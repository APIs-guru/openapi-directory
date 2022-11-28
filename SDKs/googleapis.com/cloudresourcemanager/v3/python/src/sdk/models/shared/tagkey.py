from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TagKeyPurposeEnum(str, Enum):
    PURPOSE_UNSPECIFIED = "PURPOSE_UNSPECIFIED"
    GCE_FIREWALL = "GCE_FIREWALL"


@dataclass_json
@dataclass
class TagKeyInput:
    r"""TagKeyInput
    A TagKey, used to group a set of TagValues.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    purpose: Optional[TagKeyPurposeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purpose') }})
    purpose_data: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purposeData') }})
    short_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortName') }})
    

@dataclass_json
@dataclass
class TagKey:
    r"""TagKey
    A TagKey, used to group a set of TagValues.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    namespaced_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespacedName') }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    purpose: Optional[TagKeyPurposeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purpose') }})
    purpose_data: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purposeData') }})
    short_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortName') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
