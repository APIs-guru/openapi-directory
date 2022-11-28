import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1ColumnSchema } from "./googleclouddatacatalogv1beta1columnschema";



// GoogleCloudDatacatalogV1beta1Schema
/** 
 * Represents a schema (e.g. BigQuery, GoogleSQL, Avro schema).
**/
export class GoogleCloudDatacatalogV1beta1Schema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columns", elemType: GoogleCloudDatacatalogV1beta1ColumnSchema })
  columns?: GoogleCloudDatacatalogV1beta1ColumnSchema[];
}
