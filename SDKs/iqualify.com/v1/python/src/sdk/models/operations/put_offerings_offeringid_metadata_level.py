from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutOfferingsOfferingIDMetadataLevelPathParams:
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutOfferingsOfferingIDMetadataLevelRequestBody:
    level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    

@dataclass
class PutOfferingsOfferingIDMetadataLevelRequest:
    path_params: PutOfferingsOfferingIDMetadataLevelPathParams = field()
    request: PutOfferingsOfferingIDMetadataLevelRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutOfferingsOfferingIDMetadataLevelResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    offering_metadata_response: Optional[shared.OfferingMetadataResponse] = field(default=None)
    
