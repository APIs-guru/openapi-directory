from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class BackendMetastoreMetastoreTypeEnum(str, Enum):
    METASTORE_TYPE_UNSPECIFIED = "METASTORE_TYPE_UNSPECIFIED"
    BIGQUERY = "BIGQUERY"
    DATAPROC_METASTORE = "DATAPROC_METASTORE"


@dataclass_json
@dataclass
class BackendMetastore:
    r"""BackendMetastore
    Represents a backend metastore for the federation.
    """
    
    metastore_type: Optional[BackendMetastoreMetastoreTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metastoreType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
