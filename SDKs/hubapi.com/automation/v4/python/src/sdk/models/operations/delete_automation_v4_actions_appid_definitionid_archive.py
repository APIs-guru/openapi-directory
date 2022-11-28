from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteAutomationV4ActionsAppIDDefinitionIDArchivePathParams:
    app_id: int = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    definition_id: str = field(metadata={'path_param': { 'field_name': 'definitionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAutomationV4ActionsAppIDDefinitionIDArchiveSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class DeleteAutomationV4ActionsAppIDDefinitionIDArchiveRequest:
    path_params: DeleteAutomationV4ActionsAppIDDefinitionIDArchivePathParams = field()
    security: DeleteAutomationV4ActionsAppIDDefinitionIDArchiveSecurity = field()
    

@dataclass
class DeleteAutomationV4ActionsAppIDDefinitionIDArchiveResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
