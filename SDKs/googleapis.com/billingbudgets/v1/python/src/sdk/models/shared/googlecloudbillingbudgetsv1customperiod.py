from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googletypedate
from . import googletypedate


@dataclass_json
@dataclass
class GoogleCloudBillingBudgetsV1CustomPeriod:
    end_date: Optional[googletypedate.GoogleTypeDate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate' }})
    start_date: Optional[googletypedate.GoogleTypeDate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate' }})
    
