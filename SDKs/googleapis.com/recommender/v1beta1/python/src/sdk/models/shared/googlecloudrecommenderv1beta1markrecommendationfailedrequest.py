from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1beta1MarkRecommendationFailedRequest:
    r"""GoogleCloudRecommenderV1beta1MarkRecommendationFailedRequest
    Request for the `MarkRecommendationFailed` Method.
    """
    
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    state_metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateMetadata') }})
    
