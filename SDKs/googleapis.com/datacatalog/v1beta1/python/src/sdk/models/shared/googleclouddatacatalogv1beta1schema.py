from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1Schema:
    r"""GoogleCloudDatacatalogV1beta1Schema
    Represents a schema (e.g. BigQuery, GoogleSQL, Avro schema).
    """
    
    columns: Optional[List[GoogleCloudDatacatalogV1beta1ColumnSchema]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    
