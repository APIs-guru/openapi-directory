from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleappsscripttypeexecutionapiconfig


@dataclass_json
@dataclass
class GoogleAppsScriptTypeExecutionAPIEntryPoint:
    entry_point_config: Optional[googleappsscripttypeexecutionapiconfig.GoogleAppsScriptTypeExecutionAPIConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entryPointConfig' }})
    
