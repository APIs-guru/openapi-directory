from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class VisualizationDataKeyUnitEnum(str, Enum):
    KEY_UNIT_UNSPECIFIED = "KEY_UNIT_UNSPECIFIED"
    KEY = "KEY"
    CHUNK = "CHUNK"


@dataclass_json
@dataclass
class VisualizationData:
    data_source_end_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceEndToken') }})
    data_source_separator_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceSeparatorToken') }})
    diagnostic_messages: Optional[List[DiagnosticMessage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diagnosticMessages') }})
    end_key_strings: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endKeyStrings') }})
    has_pii: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasPii') }})
    indexed_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexedKeys') }})
    key_separator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keySeparator') }})
    key_unit: Optional[VisualizationDataKeyUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyUnit') }})
    metrics: Optional[List[Metric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    prefix_nodes: Optional[List[PrefixNode]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefixNodes') }})
    
