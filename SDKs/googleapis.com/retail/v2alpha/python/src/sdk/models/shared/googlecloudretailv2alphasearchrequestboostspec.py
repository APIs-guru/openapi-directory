from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2alphasearchrequestboostspecconditionboostspec


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaSearchRequestBoostSpec:
    condition_boost_specs: Optional[List[googlecloudretailv2alphasearchrequestboostspecconditionboostspec.GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditionBoostSpecs' }})
    skip_boost_spec_validation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipBoostSpecValidation' }})
    
