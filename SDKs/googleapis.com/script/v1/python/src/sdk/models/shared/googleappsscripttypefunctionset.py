from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleappsscripttypefunction


@dataclass_json
@dataclass
class GoogleAppsScriptTypeFunctionSet:
    values: Optional[List[googleappsscripttypefunction.GoogleAppsScriptTypeFunction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
