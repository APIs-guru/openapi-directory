from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostSetupV1CompaniesEmailTemplatesMasterRequests:
    master_template_settings_input_model: Optional[shared.MasterTemplateSettingsInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    master_template_settings_input_model1: Optional[shared.MasterTemplateSettingsInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    master_template_settings_input_model2: Optional[shared.MasterTemplateSettingsInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    master_template_settings_input_model3: Optional[shared.MasterTemplateSettingsInputModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostSetupV1CompaniesEmailTemplatesMasterRequest:
    request: Optional[PostSetupV1CompaniesEmailTemplatesMasterRequests] = field(default=None)
    

@dataclass
class PostSetupV1CompaniesEmailTemplatesMasterResponse:
    content_type: str = field()
    status_code: int = field()
    master_email_template_settings_view_model: Optional[shared.MasterEmailTemplateSettingsViewModel] = field(default=None)
    
