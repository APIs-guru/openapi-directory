from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2alphapredictresponsepredictionresult


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaPredictResponse:
    attribution_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributionToken' }})
    missing_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'missingIds' }})
    results: Optional[List[googlecloudretailv2alphapredictresponsepredictionresult.GoogleCloudRetailV2alphaPredictResponsePredictionResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    validate_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validateOnly' }})
    
