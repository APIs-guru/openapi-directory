from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RemoveDNSRecordSetRequest:
    r"""RemoveDNSRecordSetRequest
    Request to remove a record set from a private managed DNS zone in the shared producer host project. The name, type, ttl, and data values must all exactly match an existing record set in the specified zone.
    """
    
    consumer_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerNetwork') }})
    dns_record_set: Optional[DNSRecordSet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsRecordSet') }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    
