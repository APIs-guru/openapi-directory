from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2fieldid


@dataclass_json
@dataclass
class GooglePrivacyDlpV2TimespanConfig:
    enable_auto_population_of_timespan_config: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableAutoPopulationOfTimespanConfig' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    timestamp_field: Optional[googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestampField' }})
    
