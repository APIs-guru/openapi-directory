from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequest:
    r"""GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequest
    Request message for RenameTagTemplateFieldEnumValue.
    """
    
    new_enum_value_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newEnumValueDisplayName') }})
    
