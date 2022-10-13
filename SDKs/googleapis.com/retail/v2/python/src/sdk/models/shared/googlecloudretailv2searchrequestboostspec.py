from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2searchrequestboostspecconditionboostspec


@dataclass_json
@dataclass
class GoogleCloudRetailV2SearchRequestBoostSpec:
    condition_boost_specs: Optional[List[googlecloudretailv2searchrequestboostspecconditionboostspec.GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditionBoostSpecs' }})
    skip_boost_spec_validation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipBoostSpecValidation' }})
    
