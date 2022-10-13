from dataclasses import dataclass, field



@dataclass
class DeleteAutomationV4ActionsAppIDDefinitionIDArchivePathParams:
    app_id: int = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    definition_id: str = field(default=None, metadata={'path_param': { 'field_name': 'definitionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAutomationV4ActionsAppIDDefinitionIDArchiveSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class DeleteAutomationV4ActionsAppIDDefinitionIDArchiveRequest:
    path_params: DeleteAutomationV4ActionsAppIDDefinitionIDArchivePathParams = field(default=None)
    security: DeleteAutomationV4ActionsAppIDDefinitionIDArchiveSecurity = field(default=None)
    

@dataclass
class DeleteAutomationV4ActionsAppIDDefinitionIDArchiveResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
