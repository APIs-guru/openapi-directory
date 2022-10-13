from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1bigqueryconnectionspec


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1DataSourceConnectionSpec:
    bigquery_connection_spec: Optional[googleclouddatacatalogv1bigqueryconnectionspec.GoogleCloudDatacatalogV1BigQueryConnectionSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigqueryConnectionSpec' }})
    
