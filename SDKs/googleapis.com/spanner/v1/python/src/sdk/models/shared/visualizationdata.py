from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import diagnosticmessage
from . import metric
from . import prefixnode

class VisualizationDataKeyUnitEnum(str, Enum):
    KEY_UNIT_UNSPECIFIED = "KEY_UNIT_UNSPECIFIED"
    KEY = "KEY"
    CHUNK = "CHUNK"


@dataclass_json
@dataclass
class VisualizationData:
    data_source_end_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceEndToken' }})
    data_source_separator_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceSeparatorToken' }})
    diagnostic_messages: Optional[List[diagnosticmessage.DiagnosticMessage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diagnosticMessages' }})
    end_key_strings: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endKeyStrings' }})
    has_pii: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasPii' }})
    indexed_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexedKeys' }})
    key_separator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keySeparator' }})
    key_unit: Optional[VisualizationDataKeyUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyUnit' }})
    metrics: Optional[List[metric.Metric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    prefix_nodes: Optional[List[prefixnode.PrefixNode]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefixNodes' }})
    
