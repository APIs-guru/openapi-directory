from dataclasses import dataclass, field



@dataclass
class DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchivePathParams:
    app_id: int = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    subscription_id: int = field(default=None, metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchiveSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchiveRequest:
    path_params: DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchivePathParams = field(default=None)
    security: DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchiveSecurity = field(default=None)
    

@dataclass
class DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchiveResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
