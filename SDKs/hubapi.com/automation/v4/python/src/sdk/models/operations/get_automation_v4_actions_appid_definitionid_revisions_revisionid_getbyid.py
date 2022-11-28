from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDPathParams:
    app_id: int = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    definition_id: str = field(metadata={'path_param': { 'field_name': 'definitionId', 'style': 'simple', 'explode': False }})
    revision_id: str = field(metadata={'path_param': { 'field_name': 'revisionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDRequest:
    path_params: GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDPathParams = field()
    security: GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDSecurity = field()
    

@dataclass
class GetAutomationV4ActionsAppIDDefinitionIDRevisionsRevisionIDGetByIDResponse:
    content_type: str = field()
    status_code: int = field()
    action_revision: Optional[shared.ActionRevision] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
