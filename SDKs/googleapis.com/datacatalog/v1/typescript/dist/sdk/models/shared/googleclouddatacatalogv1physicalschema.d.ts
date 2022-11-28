import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema } from "./googleclouddatacatalogv1physicalschemaavroschema";
import { GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema } from "./googleclouddatacatalogv1physicalschemaprotobufschema";
import { GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema } from "./googleclouddatacatalogv1physicalschemathriftschema";
/**
 * Native schema used by a resource represented as an entry. Used by query engines for deserializing and parsing source data.
**/
export declare class GoogleCloudDatacatalogV1PhysicalSchema extends SpeakeasyBase {
    avro?: GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema;
    csv?: Map<string, any>;
    orc?: Map<string, any>;
    parquet?: Map<string, any>;
    protobuf?: GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema;
    thrift?: GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema;
}
