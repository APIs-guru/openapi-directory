from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EnrichmentGeneRequest:
    acc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accId' }})
    gene_symbols: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geneSymbols' }})
    species: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'species' }})
    
