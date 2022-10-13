from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CircuitsCircuitTerminationsListQueryParams:
    circuit_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'circuit_id', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    port_speed: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'port_speed', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    site: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    site_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'site_id', 'style': 'form', 'explode': True }})
    term_side: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'term_side', 'style': 'form', 'explode': True }})
    upstream_speed: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'upstream_speed', 'style': 'form', 'explode': True }})
    xconnect_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'xconnect_id', 'style': 'form', 'explode': True }})
    

@dataclass
class CircuitsCircuitTerminationsListRequest:
    query_params: CircuitsCircuitTerminationsListQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class CircuitsCircuitTerminationsList200ApplicationJSON:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    results: List[shared.CircuitTermination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class CircuitsCircuitTerminationsListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    circuits_circuit_terminations_list_200_application_json_object: Optional[CircuitsCircuitTerminationsList200ApplicationJSON] = field(default=None)
    
