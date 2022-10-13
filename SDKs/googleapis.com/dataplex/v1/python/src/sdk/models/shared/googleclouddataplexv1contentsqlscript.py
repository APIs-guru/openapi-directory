from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDataplexV1ContentSQLScriptEngineEnum(str, Enum):
    QUERY_ENGINE_UNSPECIFIED = "QUERY_ENGINE_UNSPECIFIED"
    SPARK = "SPARK"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ContentSQLScript:
    engine: Optional[GoogleCloudDataplexV1ContentSQLScriptEngineEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'engine' }})
    
