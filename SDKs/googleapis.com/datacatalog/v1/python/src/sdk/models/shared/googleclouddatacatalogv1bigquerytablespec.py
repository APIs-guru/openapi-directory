from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDatacatalogV1BigQueryTableSpecTableSourceTypeEnum(str, Enum):
    TABLE_SOURCE_TYPE_UNSPECIFIED = "TABLE_SOURCE_TYPE_UNSPECIFIED"
    BIGQUERY_VIEW = "BIGQUERY_VIEW"
    BIGQUERY_TABLE = "BIGQUERY_TABLE"
    BIGQUERY_MATERIALIZED_VIEW = "BIGQUERY_MATERIALIZED_VIEW"


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1BigQueryTableSpec:
    r"""GoogleCloudDatacatalogV1BigQueryTableSpec
    Describes a BigQuery table.
    """
    
    table_source_type: Optional[GoogleCloudDatacatalogV1BigQueryTableSpecTableSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableSourceType') }})
    table_spec: Optional[GoogleCloudDatacatalogV1TableSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableSpec') }})
    view_spec: Optional[GoogleCloudDatacatalogV1ViewSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewSpec') }})
    
