import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema } from "./googleclouddatacatalogv1physicalschemaavroschema";
import { GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema } from "./googleclouddatacatalogv1physicalschemaprotobufschema";
import { GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema } from "./googleclouddatacatalogv1physicalschemathriftschema";



// GoogleCloudDatacatalogV1PhysicalSchema
/** 
 * Native schema used by a resource represented as an entry. Used by query engines for deserializing and parsing source data.
**/
export class GoogleCloudDatacatalogV1PhysicalSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avro" })
  avro?: GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema;

  @SpeakeasyMetadata({ data: "json, name=csv" })
  csv?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=orc" })
  orc?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=parquet" })
  parquet?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=protobuf" })
  protobuf?: GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema;

  @SpeakeasyMetadata({ data: "json, name=thrift" })
  thrift?: GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema;
}
