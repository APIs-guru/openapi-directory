from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import obpostaladdress6


@dataclass_json
@dataclass
class ObBranchAndFinancialInstitutionIdentification61:
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    postal_address: Optional[obpostaladdress6.ObPostalAddress6] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostalAddress' }})
    scheme_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    
