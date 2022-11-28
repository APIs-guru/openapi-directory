import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatacatalogV1ColumnSchema
/** 
 * A column within a schema. Columns can be nested inside other columns.
**/
export class GoogleCloudDatacatalogV1ColumnSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column" })
  column?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=gcRule" })
  gcRule?: string;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: string;

  @SpeakeasyMetadata({ data: "json, name=subcolumns", elemType: GoogleCloudDatacatalogV1ColumnSchema })
  subcolumns?: GoogleCloudDatacatalogV1ColumnSchema[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
