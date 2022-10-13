from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import changereport
from . import diagnostic


@dataclass_json
@dataclass
class GenerateConfigReportResponse:
    change_reports: Optional[List[changereport.ChangeReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changeReports' }})
    diagnostics: Optional[List[diagnostic.Diagnostic]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diagnostics' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceName' }})
    
