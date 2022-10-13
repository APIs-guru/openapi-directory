from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import metricabsence
from . import logmatch
from . import monitoringquerylanguagecondition
from . import metricthreshold


@dataclass_json
@dataclass
class Condition:
    condition_absent: Optional[metricabsence.MetricAbsence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditionAbsent' }})
    condition_matched_log: Optional[logmatch.LogMatch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditionMatchedLog' }})
    condition_monitoring_query_language: Optional[monitoringquerylanguagecondition.MonitoringQueryLanguageCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditionMonitoringQueryLanguage' }})
    condition_threshold: Optional[metricthreshold.MetricThreshold] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditionThreshold' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
