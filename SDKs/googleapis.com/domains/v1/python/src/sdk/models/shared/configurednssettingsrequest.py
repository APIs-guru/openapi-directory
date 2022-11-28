from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConfigureDNSSettingsRequestInput:
    r"""ConfigureDNSSettingsRequestInput
    Request for the `ConfigureDnsSettings` method.
    """
    
    dns_settings: Optional[DNSSettingsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsSettings') }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    validate_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validateOnly') }})
    
