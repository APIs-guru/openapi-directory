from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleappsscripttypeaddonentrypoint
from . import googleappsscripttypeexecutionapientrypoint
from . import googleappsscripttypewebappentrypoint

class EntryPointEntryPointTypeEnum(str, Enum):
    ENTRY_POINT_TYPE_UNSPECIFIED = "ENTRY_POINT_TYPE_UNSPECIFIED"
    WEB_APP = "WEB_APP"
    EXECUTION_API = "EXECUTION_API"
    ADD_ON = "ADD_ON"


@dataclass_json
@dataclass
class EntryPoint:
    add_on: Optional[googleappsscripttypeaddonentrypoint.GoogleAppsScriptTypeAddOnEntryPoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addOn' }})
    entry_point_type: Optional[EntryPointEntryPointTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entryPointType' }})
    execution_api: Optional[googleappsscripttypeexecutionapientrypoint.GoogleAppsScriptTypeExecutionAPIEntryPoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionApi' }})
    web_app: Optional[googleappsscripttypewebappentrypoint.GoogleAppsScriptTypeWebAppEntryPoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webApp' }})
    
