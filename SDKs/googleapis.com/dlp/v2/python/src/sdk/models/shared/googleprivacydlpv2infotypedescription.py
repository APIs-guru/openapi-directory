from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum(str, Enum):
    ENUM_TYPE_UNSPECIFIED = "ENUM_TYPE_UNSPECIFIED"
    INSPECT = "INSPECT"
    RISK_ANALYSIS = "RISK_ANALYSIS"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2InfoTypeDescription:
    r"""GooglePrivacyDlpV2InfoTypeDescription
    InfoType description.
    """
    
    categories: Optional[List[GooglePrivacyDlpV2InfoTypeCategory]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sensitivity_score: Optional[GooglePrivacyDlpV2SensitivityScore] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sensitivityScore') }})
    supported_by: Optional[List[GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedBy') }})
    versions: Optional[List[GooglePrivacyDlpV2VersionDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versions') }})
    
