from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddDNSRecordSetRequest:
    r"""AddDNSRecordSetRequest
    Request to add a record set to a private managed DNS zone in the shared producer host project.
    """
    
    consumer_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerNetwork') }})
    dns_record_set: Optional[DNSRecordSet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsRecordSet') }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    
