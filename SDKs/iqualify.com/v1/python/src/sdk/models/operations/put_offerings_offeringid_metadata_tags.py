from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutOfferingsOfferingIDMetadataTagsPathParams:
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutOfferingsOfferingIDMetadataTagsRequestBody:
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class PutOfferingsOfferingIDMetadataTagsRequest:
    path_params: PutOfferingsOfferingIDMetadataTagsPathParams = field()
    request: PutOfferingsOfferingIDMetadataTagsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutOfferingsOfferingIDMetadataTagsResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    offering_metadata_response: Optional[shared.OfferingMetadataResponse] = field(default=None)
    
