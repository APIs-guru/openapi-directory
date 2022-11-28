from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AdvertiserGeneralConfig:
    r"""AdvertiserGeneralConfig
    General settings of an advertiser.
    """
    
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    domain_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainUrl') }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    

@dataclass_json
@dataclass
class AdvertiserGeneralConfigInput:
    r"""AdvertiserGeneralConfigInput
    General settings of an advertiser.
    """
    
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    domain_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainUrl') }})
    
