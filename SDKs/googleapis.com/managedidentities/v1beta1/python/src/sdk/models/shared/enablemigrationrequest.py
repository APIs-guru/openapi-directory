from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import onpremdomaindetails


@dataclass_json
@dataclass
class EnableMigrationRequest:
    migrating_domains: Optional[List[onpremdomaindetails.OnPremDomainDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'migratingDomains' }})
    
