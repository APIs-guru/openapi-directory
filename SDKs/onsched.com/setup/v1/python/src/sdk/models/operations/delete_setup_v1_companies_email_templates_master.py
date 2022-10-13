from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSetupV1CompaniesEmailTemplatesMasterResponse:
    content_type: str = field(default=None)
    master_email_template_settings_view_model: Optional[shared.MasterEmailTemplateSettingsViewModel] = field(default=None)
    status_code: int = field(default=None)
    
