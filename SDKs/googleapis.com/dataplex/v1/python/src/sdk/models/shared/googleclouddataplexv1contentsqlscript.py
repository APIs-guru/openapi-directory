from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDataplexV1ContentSQLScriptEngineEnum(str, Enum):
    QUERY_ENGINE_UNSPECIFIED = "QUERY_ENGINE_UNSPECIFIED"
    SPARK = "SPARK"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ContentSQLScript:
    r"""GoogleCloudDataplexV1ContentSQLScript
    Configuration for the Sql Script content.
    """
    
    engine: Optional[GoogleCloudDataplexV1ContentSQLScriptEngineEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('engine') }})
    
