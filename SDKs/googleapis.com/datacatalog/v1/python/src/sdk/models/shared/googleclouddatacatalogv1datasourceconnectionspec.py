from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1DataSourceConnectionSpec:
    r"""GoogleCloudDatacatalogV1DataSourceConnectionSpec
    Specification that applies to a data source connection. Valid only for entries with the `DATA_SOURCE_CONNECTION` type. Only one of internal specs can be set at the time, and cannot be changed later.
    """
    
    bigquery_connection_spec: Optional[GoogleCloudDatacatalogV1BigQueryConnectionSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigqueryConnectionSpec') }})
    
