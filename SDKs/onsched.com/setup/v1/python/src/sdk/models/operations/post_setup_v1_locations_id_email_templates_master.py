from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostSetupV1LocationsIDEmailTemplatesMasterPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSetupV1LocationsIDEmailTemplatesMasterRequests:
    master_template_settings_input_model: Optional[shared.MasterTemplateSettingsInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    master_template_settings_input_model1: Optional[shared.MasterTemplateSettingsInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    master_template_settings_input_model2: Optional[shared.MasterTemplateSettingsInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    master_template_settings_input_model3: Optional[shared.MasterTemplateSettingsInputModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostSetupV1LocationsIDEmailTemplatesMasterRequest:
    path_params: PostSetupV1LocationsIDEmailTemplatesMasterPathParams = field(default=None)
    request: Optional[PostSetupV1LocationsIDEmailTemplatesMasterRequests] = field(default=None)
    

@dataclass
class PostSetupV1LocationsIDEmailTemplatesMasterResponse:
    content_type: str = field(default=None)
    master_email_template_settings_view_model: Optional[shared.MasterEmailTemplateSettingsViewModel] = field(default=None)
    status_code: int = field(default=None)
    
