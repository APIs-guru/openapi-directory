from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum(str, Enum):
    ROUTINE_TYPE_UNSPECIFIED = "ROUTINE_TYPE_UNSPECIFIED"
    SCALAR_FUNCTION = "SCALAR_FUNCTION"
    PROCEDURE = "PROCEDURE"


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1RoutineSpec:
    r"""GoogleCloudDatacatalogV1RoutineSpec
    Specification that applies to a routine. Valid only for entries with the `ROUTINE` type.
    """
    
    bigquery_routine_spec: Optional[GoogleCloudDatacatalogV1BigQueryRoutineSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigqueryRoutineSpec') }})
    definition_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definitionBody') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    return_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnType') }})
    routine_arguments: Optional[List[GoogleCloudDatacatalogV1RoutineSpecArgument]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routineArguments') }})
    routine_type: Optional[GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routineType') }})
    
