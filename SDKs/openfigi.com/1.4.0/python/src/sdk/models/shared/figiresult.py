from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FigiResult:
    composite_figi: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compositeFIGI') }})
    exch_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exchCode') }})
    figi: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('figi') }})
    market_sector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketSector') }})
    metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    security_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityDescription') }})
    security_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityType') }})
    security_type2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityType2') }})
    share_class_figi: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shareClassFIGI') }})
    ticker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ticker') }})
    
