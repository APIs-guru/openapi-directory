from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2predictresponsepredictionresult


@dataclass_json
@dataclass
class GoogleCloudRetailV2PredictResponse:
    attribution_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributionToken' }})
    missing_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'missingIds' }})
    results: Optional[List[googlecloudretailv2predictresponsepredictionresult.GoogleCloudRetailV2PredictResponsePredictionResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    validate_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validateOnly' }})
    
