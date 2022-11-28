from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutOfferingsOfferingIDMetadataCategoryPathParams:
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutOfferingsOfferingIDMetadataCategoryRequestBody:
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    

@dataclass
class PutOfferingsOfferingIDMetadataCategoryRequest:
    path_params: PutOfferingsOfferingIDMetadataCategoryPathParams = field()
    request: PutOfferingsOfferingIDMetadataCategoryRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutOfferingsOfferingIDMetadataCategoryResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    offering_metadata_response: Optional[shared.OfferingMetadataResponse] = field(default=None)
    
