from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1Schema:
    r"""GoogleCloudDatacatalogV1Schema
    Represents a schema, for example, a BigQuery, GoogleSQL, or Avro schema.
    """
    
    columns: Optional[List[GoogleCloudDatacatalogV1ColumnSchema]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    
