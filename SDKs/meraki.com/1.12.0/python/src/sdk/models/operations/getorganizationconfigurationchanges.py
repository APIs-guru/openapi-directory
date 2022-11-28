from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetOrganizationConfigurationChangesPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationConfigurationChangesQueryParams:
    admin_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'adminId', 'style': 'form', 'explode': True }})
    ending_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    network_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'networkId', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    t0: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    t1: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't1', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOrganizationConfigurationChangesRequest:
    path_params: GetOrganizationConfigurationChangesPathParams = field()
    query_params: GetOrganizationConfigurationChangesQueryParams = field()
    

@dataclass
class GetOrganizationConfigurationChangesResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_organization_configuration_changes_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
