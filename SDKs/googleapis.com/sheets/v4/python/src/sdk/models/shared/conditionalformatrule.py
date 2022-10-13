from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import booleanrule
from . import gradientrule
from . import gridrange


@dataclass_json
@dataclass
class ConditionalFormatRule:
    boolean_rule: Optional[booleanrule.BooleanRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'booleanRule' }})
    gradient_rule: Optional[gradientrule.GradientRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gradientRule' }})
    ranges: Optional[List[gridrange.GridRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ranges' }})
    
