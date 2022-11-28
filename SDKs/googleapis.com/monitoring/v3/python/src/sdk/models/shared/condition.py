from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Condition:
    r"""Condition
    A condition is a true/false test that determines when an alerting policy should open an incident. If a condition evaluates to true, it signifies that something is wrong.
    """
    
    condition_absent: Optional[MetricAbsence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditionAbsent') }})
    condition_matched_log: Optional[LogMatch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditionMatchedLog') }})
    condition_monitoring_query_language: Optional[MonitoringQueryLanguageCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditionMonitoringQueryLanguage') }})
    condition_threshold: Optional[MetricThreshold] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditionThreshold') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
