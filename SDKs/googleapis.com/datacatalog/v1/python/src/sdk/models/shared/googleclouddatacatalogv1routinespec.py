from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1bigqueryroutinespec
from . import googleclouddatacatalogv1routinespecargument

class GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum(str, Enum):
    ROUTINE_TYPE_UNSPECIFIED = "ROUTINE_TYPE_UNSPECIFIED"
    SCALAR_FUNCTION = "SCALAR_FUNCTION"
    PROCEDURE = "PROCEDURE"


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1RoutineSpec:
    bigquery_routine_spec: Optional[googleclouddatacatalogv1bigqueryroutinespec.GoogleCloudDatacatalogV1BigQueryRoutineSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigqueryRoutineSpec' }})
    definition_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'definitionBody' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    return_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnType' }})
    routine_arguments: Optional[List[googleclouddatacatalogv1routinespecargument.GoogleCloudDatacatalogV1RoutineSpecArgument]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routineArguments' }})
    routine_type: Optional[GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routineType' }})
    
