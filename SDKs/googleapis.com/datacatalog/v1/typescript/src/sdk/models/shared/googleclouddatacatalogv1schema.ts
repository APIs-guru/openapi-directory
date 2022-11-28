import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1ColumnSchema } from "./googleclouddatacatalogv1columnschema";



// GoogleCloudDatacatalogV1Schema
/** 
 * Represents a schema, for example, a BigQuery, GoogleSQL, or Avro schema.
**/
export class GoogleCloudDatacatalogV1Schema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columns", elemType: GoogleCloudDatacatalogV1ColumnSchema })
  columns?: GoogleCloudDatacatalogV1ColumnSchema[];
}
