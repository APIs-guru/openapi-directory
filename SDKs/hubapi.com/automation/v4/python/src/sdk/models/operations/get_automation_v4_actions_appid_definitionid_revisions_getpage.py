from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPagePathParams:
    app_id: int = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    definition_id: str = field(metadata={'path_param': { 'field_name': 'definitionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPageQueryParams:
    after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPageSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPageRequest:
    path_params: GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPagePathParams = field()
    query_params: GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPageQueryParams = field()
    security: GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPageSecurity = field()
    

@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDRevisionsGetPageResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    collection_response_action_revision_forward_paging: Optional[shared.CollectionResponseActionRevisionForwardPaging] = field(default=None)
    
