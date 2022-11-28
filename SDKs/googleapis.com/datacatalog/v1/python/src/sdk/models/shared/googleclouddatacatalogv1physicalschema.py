from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1PhysicalSchema:
    r"""GoogleCloudDatacatalogV1PhysicalSchema
    Native schema used by a resource represented as an entry. Used by query engines for deserializing and parsing source data.
    """
    
    avro: Optional[GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avro') }})
    csv: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('csv') }})
    orc: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orc') }})
    parquet: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parquet') }})
    protobuf: Optional[GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protobuf') }})
    thrift: Optional[GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thrift') }})
    
