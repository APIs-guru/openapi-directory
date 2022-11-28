from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSetupV1CompaniesEmailTemplatesMasterResponse:
    content_type: str = field()
    status_code: int = field()
    master_email_template_settings_view_model: Optional[shared.MasterEmailTemplateSettingsViewModel] = field(default=None)
    
