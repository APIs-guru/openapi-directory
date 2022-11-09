import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema } from "./googleclouddatacatalogv1physicalschemaavroschema";
import { GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema } from "./googleclouddatacatalogv1physicalschemaprotobufschema";
import { GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema } from "./googleclouddatacatalogv1physicalschemathriftschema";


// GoogleCloudDatacatalogV1PhysicalSchema
/** 
 * Native schema used by a resource represented as an entry. Used by query engines for deserializing and parsing source data.
**/
export class GoogleCloudDatacatalogV1PhysicalSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=avro" })
  avro?: GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema;

  @Metadata({ data: "json, name=csv" })
  csv?: Map<string, any>;

  @Metadata({ data: "json, name=orc" })
  orc?: Map<string, any>;

  @Metadata({ data: "json, name=parquet" })
  parquet?: Map<string, any>;

  @Metadata({ data: "json, name=protobuf" })
  protobuf?: GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema;

  @Metadata({ data: "json, name=thrift" })
  thrift?: GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema;
}
