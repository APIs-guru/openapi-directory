import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1ColumnSchema } from "./googleclouddatacatalogv1columnschema";


// GoogleCloudDatacatalogV1Schema
/** 
 * Represents a schema, for example, a BigQuery, GoogleSQL, or Avro schema.
**/
export class GoogleCloudDatacatalogV1Schema extends SpeakeasyBase {
  @Metadata({ data: "json, name=columns", elemType: shared.GoogleCloudDatacatalogV1ColumnSchema })
  columns?: GoogleCloudDatacatalogV1ColumnSchema[];
}
