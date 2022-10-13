from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1tablespec
from . import googleclouddatacatalogv1viewspec

class GoogleCloudDatacatalogV1BigQueryTableSpecTableSourceTypeEnum(str, Enum):
    TABLE_SOURCE_TYPE_UNSPECIFIED = "TABLE_SOURCE_TYPE_UNSPECIFIED"
    BIGQUERY_VIEW = "BIGQUERY_VIEW"
    BIGQUERY_TABLE = "BIGQUERY_TABLE"
    BIGQUERY_MATERIALIZED_VIEW = "BIGQUERY_MATERIALIZED_VIEW"


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1BigQueryTableSpec:
    table_source_type: Optional[GoogleCloudDatacatalogV1BigQueryTableSpecTableSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableSourceType' }})
    table_spec: Optional[googleclouddatacatalogv1tablespec.GoogleCloudDatacatalogV1TableSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableSpec' }})
    view_spec: Optional[googleclouddatacatalogv1viewspec.GoogleCloudDatacatalogV1ViewSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewSpec' }})
    
