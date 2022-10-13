from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import outputconfig

class ExportAssetsRequestContentTypeEnum(str, Enum):
    CONTENT_TYPE_UNSPECIFIED = "CONTENT_TYPE_UNSPECIFIED"
    RESOURCE = "RESOURCE"
    IAM_POLICY = "IAM_POLICY"


@dataclass_json
@dataclass
class ExportAssetsRequest:
    asset_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetTypes' }})
    content_type: Optional[ExportAssetsRequestContentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentType' }})
    output_config: Optional[outputconfig.OutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputConfig' }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readTime' }})
    
