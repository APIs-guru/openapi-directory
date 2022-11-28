from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class PutSetupV1ResourcesBulkQueryParams:
    google_auth_return_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'googleAuthReturnUrl', 'style': 'form', 'explode': True }})
    outlook_auth_return_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'outlookAuthReturnUrl', 'style': 'form', 'explode': True }})
    

@dataclass
class PutSetupV1ResourcesBulkRequests:
    resources_update_model: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    resources_update_model1: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    resources_update_model2: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    resources_update_model3: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutSetupV1ResourcesBulkRequest:
    query_params: PutSetupV1ResourcesBulkQueryParams = field()
    request: Optional[PutSetupV1ResourcesBulkRequests] = field(default=None)
    

@dataclass
class PutSetupV1ResourcesBulkResponse:
    content_type: str = field()
    status_code: int = field()
    resource_view_models: Optional[List[shared.ResourceViewModel]] = field(default=None)
    
