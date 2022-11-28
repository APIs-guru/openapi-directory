from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetOrganizationWebhooksAlertTypesPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationWebhooksAlertTypesRequest:
    path_params: GetOrganizationWebhooksAlertTypesPathParams = field()
    

@dataclass
class GetOrganizationWebhooksAlertTypesResponse:
    content_type: str = field()
    status_code: int = field()
    get_organization_webhooks_alert_types_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
