from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional


@dataclass
class GetOrganizationDevicesPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationDevicesQueryParams:
    configuration_updated_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'configurationUpdatedAfter', 'style': 'form', 'explode': True }})
    ending_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOrganizationDevicesRequest:
    path_params: GetOrganizationDevicesPathParams = field()
    query_params: GetOrganizationDevicesQueryParams = field()
    

@dataclass
class GetOrganizationDevicesResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_organization_devices_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
