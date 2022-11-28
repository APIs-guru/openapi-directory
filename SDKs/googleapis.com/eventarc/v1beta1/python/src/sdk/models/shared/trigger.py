from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Trigger:
    r"""Trigger
    A representation of the trigger resource.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    destination: Optional[Destination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    matching_criteria: Optional[List[MatchingCriteria]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchingCriteria') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    transport: Optional[Transport] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transport') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class TriggerInput:
    r"""TriggerInput
    A representation of the trigger resource.
    """
    
    destination: Optional[Destination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    matching_criteria: Optional[List[MatchingCriteria]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchingCriteria') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    transport: Optional[TransportInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transport') }})
    
