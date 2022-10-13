from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dnssettings


@dataclass_json
@dataclass
class ConfigureDNSSettingsRequest:
    dns_settings: Optional[dnssettings.DNSSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dnsSettings' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    validate_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validateOnly' }})
    
