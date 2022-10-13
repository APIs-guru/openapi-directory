from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAutomationV4ActionsAppIDGetPagePathParams:
    app_id: int = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAutomationV4ActionsAppIDGetPageQueryParams:
    after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    archived: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'archived', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAutomationV4ActionsAppIDGetPageSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetAutomationV4ActionsAppIDGetPageRequest:
    path_params: GetAutomationV4ActionsAppIDGetPagePathParams = field(default=None)
    query_params: GetAutomationV4ActionsAppIDGetPageQueryParams = field(default=None)
    security: GetAutomationV4ActionsAppIDGetPageSecurity = field(default=None)
    

@dataclass
class GetAutomationV4ActionsAppIDGetPageResponse:
    body: bytes = field(default=None)
    collection_response_extension_action_definition_forward_paging: Optional[shared.CollectionResponseExtensionActionDefinitionForwardPaging] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
