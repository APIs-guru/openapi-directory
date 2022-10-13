from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2infotypecategory
from . import googleprivacydlpv2versiondescription

class GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum(str, Enum):
    ENUM_TYPE_UNSPECIFIED = "ENUM_TYPE_UNSPECIFIED"
    INSPECT = "INSPECT"
    RISK_ANALYSIS = "RISK_ANALYSIS"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2InfoTypeDescription:
    categories: Optional[List[googleprivacydlpv2infotypecategory.GooglePrivacyDlpV2InfoTypeCategory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    supported_by: Optional[List[GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportedBy' }})
    versions: Optional[List[googleprivacydlpv2versiondescription.GooglePrivacyDlpV2VersionDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versions' }})
    
