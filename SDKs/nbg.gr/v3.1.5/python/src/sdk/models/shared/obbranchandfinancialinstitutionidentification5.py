from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ObBranchAndFinancialInstitutionIdentification5:
    identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    scheme_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    
