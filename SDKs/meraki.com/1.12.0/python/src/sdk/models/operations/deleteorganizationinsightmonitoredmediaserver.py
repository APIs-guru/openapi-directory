from dataclasses import dataclass, field



@dataclass
class DeleteOrganizationInsightMonitoredMediaServerPathParams:
    monitored_media_server_id: str = field(default=None, metadata={'path_param': { 'field_name': 'monitoredMediaServerId', 'style': 'simple', 'explode': False }})
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteOrganizationInsightMonitoredMediaServerRequest:
    path_params: DeleteOrganizationInsightMonitoredMediaServerPathParams = field(default=None)
    

@dataclass
class DeleteOrganizationInsightMonitoredMediaServerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
