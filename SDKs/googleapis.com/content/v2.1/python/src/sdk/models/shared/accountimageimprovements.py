from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import accountimageimprovementssettings


@dataclass_json
@dataclass
class AccountImageImprovements:
    account_image_improvements_settings: Optional[accountimageimprovementssettings.AccountImageImprovementsSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountImageImprovementsSettings' }})
    effective_allow_automatic_image_improvements: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveAllowAutomaticImageImprovements' }})
    
