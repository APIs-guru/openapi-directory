from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutOfferingsOfferingIDMetadataTopicPathParams:
    offering_id: str = field(default=None, metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutOfferingsOfferingIDMetadataTopicRequestBody:
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic' }})
    

@dataclass
class PutOfferingsOfferingIDMetadataTopicRequest:
    path_params: PutOfferingsOfferingIDMetadataTopicPathParams = field(default=None)
    request: PutOfferingsOfferingIDMetadataTopicRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutOfferingsOfferingIDMetadataTopicResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    offering_metadata_response: Optional[shared.OfferingMetadataResponse] = field(default=None)
    status_code: int = field(default=None)
    
