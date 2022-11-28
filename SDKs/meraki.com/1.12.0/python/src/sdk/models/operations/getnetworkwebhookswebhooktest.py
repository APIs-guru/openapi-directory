from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkWebhooksWebhookTestPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    webhook_test_id: str = field(metadata={'path_param': { 'field_name': 'webhookTestId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkWebhooksWebhookTestRequest:
    path_params: GetNetworkWebhooksWebhookTestPathParams = field()
    

@dataclass
class GetNetworkWebhooksWebhookTestResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_webhooks_webhook_test_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
