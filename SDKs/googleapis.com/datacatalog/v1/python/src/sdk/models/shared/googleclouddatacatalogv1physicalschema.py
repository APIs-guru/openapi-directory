from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1physicalschemaavroschema
from . import googleclouddatacatalogv1physicalschemaprotobufschema
from . import googleclouddatacatalogv1physicalschemathriftschema


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1PhysicalSchema:
    avro: Optional[googleclouddatacatalogv1physicalschemaavroschema.GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avro' }})
    csv: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'csv' }})
    orc: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orc' }})
    parquet: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parquet' }})
    protobuf: Optional[googleclouddatacatalogv1physicalschemaprotobufschema.GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protobuf' }})
    thrift: Optional[googleclouddatacatalogv1physicalschemathriftschema.GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thrift' }})
    
