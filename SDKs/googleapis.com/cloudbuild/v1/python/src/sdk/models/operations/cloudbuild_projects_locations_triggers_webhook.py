from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class CloudbuildProjectsLocationsTriggersWebhookPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class CloudbuildProjectsLocationsTriggersWebhookQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    project_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'projectId', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    secret: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'secret', 'style': 'form', 'explode': True }})
    trigger: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'trigger', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class CloudbuildProjectsLocationsTriggersWebhookRequest:
    path_params: CloudbuildProjectsLocationsTriggersWebhookPathParams = field()
    query_params: CloudbuildProjectsLocationsTriggersWebhookQueryParams = field()
    request: Optional[shared.HTTPBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CloudbuildProjectsLocationsTriggersWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    receive_trigger_webhook_response: Optional[dict[str, Any]] = field(default=None)
    
