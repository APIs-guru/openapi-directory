from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDialogflowV2beta1FulfillmentFeatureTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    SMALLTALK = "SMALLTALK"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1FulfillmentFeature:
    r"""GoogleCloudDialogflowV2beta1FulfillmentFeature
    Whether fulfillment is enabled for the specific feature.
    """
    
    type: Optional[GoogleCloudDialogflowV2beta1FulfillmentFeatureTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
