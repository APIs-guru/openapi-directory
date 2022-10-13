from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetConsumerV1CustomersCustomfieldsQueryParams:
    lead_questions: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'leadQuestions', 'style': 'form', 'explode': True }})
    location_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConsumerV1CustomersCustomfieldsRequest:
    query_params: GetConsumerV1CustomersCustomfieldsQueryParams = field(default=None)
    

@dataclass
class GetConsumerV1CustomersCustomfieldsResponse:
    content_type: str = field(default=None)
    custom_field_definition_list_view_model: Optional[shared.CustomFieldDefinitionListViewModel] = field(default=None)
    status_code: int = field(default=None)
    
