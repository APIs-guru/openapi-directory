from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googletypedecimal


@dataclass_json
@dataclass
class GoogleCloudChannelV1PercentageAdjustment:
    percentage: Optional[googletypedecimal.GoogleTypeDecimal] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentage' }})
    
