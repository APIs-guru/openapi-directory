from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DNSSettingsInput:
    r"""DNSSettingsInput
    Defines the DNS configuration of a `Registration`, including name servers, DNSSEC, and glue records.
    """
    
    custom_dns: Optional[CustomDNS] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customDns') }})
    glue_records: Optional[List[GlueRecord]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glueRecords') }})
    google_domains_dns: Optional[GoogleDomainsDNSInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleDomainsDns') }})
    

@dataclass_json
@dataclass
class DNSSettings:
    r"""DNSSettings
    Defines the DNS configuration of a `Registration`, including name servers, DNSSEC, and glue records.
    """
    
    custom_dns: Optional[CustomDNS] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customDns') }})
    glue_records: Optional[List[GlueRecord]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glueRecords') }})
    google_domains_dns: Optional[GoogleDomainsDNS] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleDomainsDns') }})
    
