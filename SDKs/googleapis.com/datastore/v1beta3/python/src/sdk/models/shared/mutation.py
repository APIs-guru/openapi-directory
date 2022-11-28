from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Mutation:
    r"""Mutation
    A mutation to apply to an entity.
    """
    
    base_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseVersion') }})
    delete: Optional[Key] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    insert: Optional[Entity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insert') }})
    update: Optional[Entity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    upsert: Optional[Entity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upsert') }})
    
