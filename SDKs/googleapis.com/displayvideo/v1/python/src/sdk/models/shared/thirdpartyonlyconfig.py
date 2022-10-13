from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ThirdPartyOnlyConfig:
    pixel_order_id_reporting_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pixelOrderIdReportingEnabled' }})
    
