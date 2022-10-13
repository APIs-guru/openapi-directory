from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSetupV1LocationsIDEmailTemplatesMasterPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSetupV1LocationsIDEmailTemplatesMasterRequest:
    path_params: DeleteSetupV1LocationsIDEmailTemplatesMasterPathParams = field(default=None)
    

@dataclass
class DeleteSetupV1LocationsIDEmailTemplatesMasterResponse:
    content_type: str = field(default=None)
    master_email_template_settings_view_model: Optional[shared.MasterEmailTemplateSettingsViewModel] = field(default=None)
    status_code: int = field(default=None)
    
