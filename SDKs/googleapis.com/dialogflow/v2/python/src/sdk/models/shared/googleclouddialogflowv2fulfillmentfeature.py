from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDialogflowV2FulfillmentFeatureTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    SMALLTALK = "SMALLTALK"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2FulfillmentFeature:
    type: Optional[GoogleCloudDialogflowV2FulfillmentFeatureTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
