from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import companydomainviewmodel


@dataclass_json
@dataclass
class CompanyDomainListViewModel:
    data: Optional[List[companydomainviewmodel.CompanyDomainViewModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    object_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectName' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
