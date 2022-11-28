from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListPeeredDNSDomainsResponse:
    r"""ListPeeredDNSDomainsResponse
    Response to list peered DNS domains for a given connection.
    """
    
    peered_dns_domains: Optional[List[PeeredDNSDomain]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('peeredDnsDomains') }})
    
