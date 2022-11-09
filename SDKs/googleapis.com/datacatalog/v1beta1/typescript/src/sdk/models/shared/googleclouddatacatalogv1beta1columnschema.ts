import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1beta1ColumnSchema } from "./googleclouddatacatalogv1beta1columnschema";


// GoogleCloudDatacatalogV1beta1ColumnSchema
/** 
 * Representation of a column within a schema. Columns could be nested inside other columns.
**/
export class GoogleCloudDatacatalogV1beta1ColumnSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=column" })
  column?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=mode" })
  mode?: string;

  @Metadata({ data: "json, name=subcolumns", elemType: shared.GoogleCloudDatacatalogV1beta1ColumnSchema })
  subcolumns?: GoogleCloudDatacatalogV1beta1ColumnSchema[];

  @Metadata({ data: "json, name=type" })
  type?: string;
}
