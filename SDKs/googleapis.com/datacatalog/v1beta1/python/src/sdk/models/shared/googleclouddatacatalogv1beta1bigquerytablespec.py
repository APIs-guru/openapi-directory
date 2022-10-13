from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1beta1tablespec
from . import googleclouddatacatalogv1beta1viewspec

class GoogleCloudDatacatalogV1beta1BigQueryTableSpecTableSourceTypeEnum(str, Enum):
    TABLE_SOURCE_TYPE_UNSPECIFIED = "TABLE_SOURCE_TYPE_UNSPECIFIED"
    BIGQUERY_VIEW = "BIGQUERY_VIEW"
    BIGQUERY_TABLE = "BIGQUERY_TABLE"
    BIGQUERY_MATERIALIZED_VIEW = "BIGQUERY_MATERIALIZED_VIEW"


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1BigQueryTableSpec:
    table_source_type: Optional[GoogleCloudDatacatalogV1beta1BigQueryTableSpecTableSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableSourceType' }})
    table_spec: Optional[googleclouddatacatalogv1beta1tablespec.GoogleCloudDatacatalogV1beta1TableSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableSpec' }})
    view_spec: Optional[googleclouddatacatalogv1beta1viewspec.GoogleCloudDatacatalogV1beta1ViewSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewSpec' }})
    
