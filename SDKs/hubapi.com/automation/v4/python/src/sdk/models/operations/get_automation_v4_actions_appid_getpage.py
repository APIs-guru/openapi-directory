from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAutomationV4ActionsAppIDGetPagePathParams:
    app_id: int = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAutomationV4ActionsAppIDGetPageQueryParams:
    after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    archived: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'archived', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAutomationV4ActionsAppIDGetPageSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetAutomationV4ActionsAppIDGetPageRequest:
    path_params: GetAutomationV4ActionsAppIDGetPagePathParams = field()
    query_params: GetAutomationV4ActionsAppIDGetPageQueryParams = field()
    security: GetAutomationV4ActionsAppIDGetPageSecurity = field()
    

@dataclass
class GetAutomationV4ActionsAppIDGetPageResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    collection_response_extension_action_definition_forward_paging: Optional[shared.CollectionResponseExtensionActionDefinitionForwardPaging] = field(default=None)
    
