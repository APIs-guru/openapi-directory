from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetResourcesCampaignsIDSyndicateFormatPathParams:
    format: str = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesCampaignsIDSyndicateFormatQueryParams:
    display_method: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'displayMethod', 'style': 'form', 'explode': False }})
    

@dataclass
class GetResourcesCampaignsIDSyndicateFormatRequest:
    path_params: GetResourcesCampaignsIDSyndicateFormatPathParams = field(default=None)
    query_params: GetResourcesCampaignsIDSyndicateFormatQueryParams = field(default=None)
    

@dataclass
class GetResourcesCampaignsIDSyndicateFormatResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    syndicate_marshaller_wrapped: Optional[shared.SyndicateMarshallerWrapped] = field(default=None)
    
