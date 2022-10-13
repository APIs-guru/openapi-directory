from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleappsscripttypewebappconfig


@dataclass_json
@dataclass
class GoogleAppsScriptTypeWebAppEntryPoint:
    entry_point_config: Optional[googleappsscripttypewebappconfig.GoogleAppsScriptTypeWebAppConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entryPointConfig' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
