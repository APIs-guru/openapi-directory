from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import diagnosticconfig


@dataclass_json
@dataclass
class DiagnoseRuntimeRequest:
    diagnostic_config: Optional[diagnosticconfig.DiagnosticConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diagnosticConfig' }})
    
