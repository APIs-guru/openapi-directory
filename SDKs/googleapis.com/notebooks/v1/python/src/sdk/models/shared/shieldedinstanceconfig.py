from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ShieldedInstanceConfig:
    r"""ShieldedInstanceConfig
    A set of Shielded Instance options. Check [Images using supported Shielded VM features] Not all combinations are valid.
    """
    
    enable_integrity_monitoring: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableIntegrityMonitoring') }})
    enable_secure_boot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableSecureBoot') }})
    enable_vtpm: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableVtpm') }})
    
