from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDPathParams:
    app_id: int = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    definition_id: str = field(default=None, metadata={'path_param': { 'field_name': 'definitionId', 'style': 'simple', 'explode': False }})
    revision_id: str = field(default=None, metadata={'path_param': { 'field_name': 'revisionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDRequest:
    path_params: GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDPathParams = field(default=None)
    security: GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDSecurity = field(default=None)
    

@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDResponse:
    action_revision: Optional[shared.ActionRevision] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
