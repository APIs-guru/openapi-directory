from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudassetv1p7beta1outputconfig

class GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnum(str, Enum):
    CONTENT_TYPE_UNSPECIFIED = "CONTENT_TYPE_UNSPECIFIED"
    RESOURCE = "RESOURCE"
    IAM_POLICY = "IAM_POLICY"
    ORG_POLICY = "ORG_POLICY"
    ACCESS_POLICY = "ACCESS_POLICY"
    RELATIONSHIP = "RELATIONSHIP"


@dataclass_json
@dataclass
class GoogleCloudAssetV1p7beta1ExportAssetsRequest:
    asset_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetTypes' }})
    content_type: Optional[GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentType' }})
    output_config: Optional[googlecloudassetv1p7beta1outputconfig.GoogleCloudAssetV1p7beta1OutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputConfig' }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readTime' }})
    relationship_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationshipTypes' }})
    
