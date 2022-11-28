from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostSetupV1LocationsIDEmailTemplatesPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSetupV1LocationsIDEmailTemplatesRequests:
    email_template_input_model: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    email_template_input_model1: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    email_template_input_model2: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    email_template_input_model3: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostSetupV1LocationsIDEmailTemplatesRequest:
    path_params: PostSetupV1LocationsIDEmailTemplatesPathParams = field()
    request: Optional[PostSetupV1LocationsIDEmailTemplatesRequests] = field(default=None)
    

@dataclass
class PostSetupV1LocationsIDEmailTemplatesResponse:
    content_type: str = field()
    status_code: int = field()
    content_result: Optional[shared.ContentResult] = field(default=None)
    
