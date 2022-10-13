from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import intervalcollection


@dataclass_json
@dataclass
class IntervalCollectionResponse:
    data: Optional[intervalcollection.IntervalCollection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    requested_currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedCurrency' }})
    requested_symbol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedSymbol' }})
    requested_unit_of_measure: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedUnitOfMeasure' }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    
