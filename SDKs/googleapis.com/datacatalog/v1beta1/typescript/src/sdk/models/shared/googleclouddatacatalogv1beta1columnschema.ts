import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatacatalogV1beta1ColumnSchema
/** 
 * Representation of a column within a schema. Columns could be nested inside other columns.
**/
export class GoogleCloudDatacatalogV1beta1ColumnSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column" })
  column?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: string;

  @SpeakeasyMetadata({ data: "json, name=subcolumns", elemType: GoogleCloudDatacatalogV1beta1ColumnSchema })
  subcolumns?: GoogleCloudDatacatalogV1beta1ColumnSchema[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
