import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec } from "./googleclouddatacatalogv1columnschemalookercolumnspec";
import { GoogleCloudDatacatalogV1ColumnSchema } from "./googleclouddatacatalogv1columnschema";


// GoogleCloudDatacatalogV1ColumnSchema
/** 
 * A column within a schema. Columns can be nested inside other columns.
**/
export class GoogleCloudDatacatalogV1ColumnSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=column" })
  column?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=lookerColumnSpec" })
  lookerColumnSpec?: GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec;

  @Metadata({ data: "json, name=mode" })
  mode?: string;

  @Metadata({ data: "json, name=subcolumns", elemType: shared.GoogleCloudDatacatalogV1ColumnSchema })
  subcolumns?: GoogleCloudDatacatalogV1ColumnSchema[];

  @Metadata({ data: "json, name=type" })
  type?: string;
}
