from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2TimespanConfig:
    r"""GooglePrivacyDlpV2TimespanConfig
    Configuration of the timespan of the items to include in scanning. Currently only supported when inspecting Cloud Storage and BigQuery.
    """
    
    enable_auto_population_of_timespan_config: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableAutoPopulationOfTimespanConfig') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    timestamp_field: Optional[GooglePrivacyDlpV2FieldID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestampField') }})
    
