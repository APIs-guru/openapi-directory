from dataclasses import dataclass, field



@dataclass
class DeleteOrganizationConfigTemplatePathParams:
    config_template_id: str = field(default=None, metadata={'path_param': { 'field_name': 'configTemplateId', 'style': 'simple', 'explode': False }})
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteOrganizationConfigTemplateRequest:
    path_params: DeleteOrganizationConfigTemplatePathParams = field(default=None)
    

@dataclass
class DeleteOrganizationConfigTemplateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
