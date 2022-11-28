from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetConsumerV1AppointmentsCustomfieldsQueryParams:
    location_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConsumerV1AppointmentsCustomfieldsRequest:
    query_params: GetConsumerV1AppointmentsCustomfieldsQueryParams = field()
    

@dataclass
class GetConsumerV1AppointmentsCustomfieldsResponse:
    content_type: str = field()
    status_code: int = field()
    custom_field_definition_list_view_model: Optional[shared.CustomFieldDefinitionListViewModel] = field(default=None)
    
