from dataclasses import dataclass, field



@dataclass
class DeleteOrganizationInsightMonitoredMediaServerPathParams:
    monitored_media_server_id: str = field(metadata={'path_param': { 'field_name': 'monitoredMediaServerId', 'style': 'simple', 'explode': False }})
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteOrganizationInsightMonitoredMediaServerRequest:
    path_params: DeleteOrganizationInsightMonitoredMediaServerPathParams = field()
    

@dataclass
class DeleteOrganizationInsightMonitoredMediaServerResponse:
    content_type: str = field()
    status_code: int = field()
    
