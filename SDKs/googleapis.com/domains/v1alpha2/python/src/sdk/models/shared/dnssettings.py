from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customdns
from . import gluerecord
from . import googledomainsdns


@dataclass_json
@dataclass
class DNSSettings:
    custom_dns: Optional[customdns.CustomDNS] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customDns' }})
    glue_records: Optional[List[gluerecord.GlueRecord]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'glueRecords' }})
    google_domains_dns: Optional[googledomainsdns.GoogleDomainsDNS] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googleDomainsDns' }})
    
