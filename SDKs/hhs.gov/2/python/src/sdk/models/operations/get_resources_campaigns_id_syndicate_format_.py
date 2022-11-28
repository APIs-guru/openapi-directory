from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetResourcesCampaignsIDSyndicateFormatPathParams:
    format: str = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesCampaignsIDSyndicateFormatQueryParams:
    display_method: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'displayMethod', 'style': 'form', 'explode': False }})
    

@dataclass
class GetResourcesCampaignsIDSyndicateFormatRequest:
    path_params: GetResourcesCampaignsIDSyndicateFormatPathParams = field()
    query_params: GetResourcesCampaignsIDSyndicateFormatQueryParams = field()
    

@dataclass
class GetResourcesCampaignsIDSyndicateFormatResponse:
    content_type: str = field()
    status_code: int = field()
    syndicate_marshaller_wrapped: Optional[shared.SyndicateMarshallerWrapped] = field(default=None)
    
