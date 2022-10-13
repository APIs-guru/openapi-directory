from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betasearchrequestboostspecconditionboostspec


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaSearchRequestBoostSpec:
    condition_boost_specs: Optional[List[googlecloudretailv2betasearchrequestboostspecconditionboostspec.GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditionBoostSpecs' }})
    skip_boost_spec_validation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipBoostSpecValidation' }})
    
