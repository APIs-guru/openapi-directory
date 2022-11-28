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
class OrganizationInput:
    r"""OrganizationInput
    A person's past or current organization. Overlapping date ranges are permitted.
    """
    
    cost_center: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costCenter') }})
    current: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current') }})
    department: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('department') }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    end_date: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    full_time_equivalent_millipercent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullTimeEquivalentMillipercent') }})
    job_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobDescription') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    metadata: Optional[FieldMetadataInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    phonetic_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneticName') }})
    start_date: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    symbol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('symbol') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class Organization:
    r"""Organization
    A person's past or current organization. Overlapping date ranges are permitted.
    """
    
    cost_center: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costCenter') }})
    current: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current') }})
    department: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('department') }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    end_date: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    formatted_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedType') }})
    full_time_equivalent_millipercent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullTimeEquivalentMillipercent') }})
    job_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobDescription') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    metadata: Optional[FieldMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    phonetic_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneticName') }})
    start_date: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    symbol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('symbol') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
