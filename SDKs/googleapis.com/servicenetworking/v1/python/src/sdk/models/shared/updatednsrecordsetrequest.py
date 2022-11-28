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
class UpdateDNSRecordSetRequest:
    r"""UpdateDNSRecordSetRequest
    Request to update a record set from a private managed DNS zone in the shared producer host project. The name, type, ttl, and data values of the existing record set must all exactly match an existing record set in the specified zone.
    """
    
    consumer_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerNetwork') }})
    existing_dns_record_set: Optional[DNSRecordSet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('existingDnsRecordSet') }})
    new_dns_record_set: Optional[DNSRecordSet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newDnsRecordSet') }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    
