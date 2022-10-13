from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dnsrecordset


@dataclass_json
@dataclass
class RemoveDNSRecordSetRequest:
    consumer_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumerNetwork' }})
    dns_record_set: Optional[dnsrecordset.DNSRecordSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dnsRecordSet' }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    
