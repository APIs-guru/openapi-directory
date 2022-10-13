from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AccountSettingsRequest:
    dr_call_back_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'drCallBackUrl' }})
    mo_call_back_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'moCallBackUrl' }})
    
