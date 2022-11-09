import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1beta1ColumnSchema } from "./googleclouddatacatalogv1beta1columnschema";


// GoogleCloudDatacatalogV1beta1Schema
/** 
 * Represents a schema (e.g. BigQuery, GoogleSQL, Avro schema).
**/
export class GoogleCloudDatacatalogV1beta1Schema extends SpeakeasyBase {
  @Metadata({ data: "json, name=columns", elemType: shared.GoogleCloudDatacatalogV1beta1ColumnSchema })
  columns?: GoogleCloudDatacatalogV1beta1ColumnSchema[];
}
