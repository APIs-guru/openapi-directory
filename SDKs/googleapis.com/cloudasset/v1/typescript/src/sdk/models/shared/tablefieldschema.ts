import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TableFieldSchema
/** 
 * A field in TableSchema.
**/
export class TableFieldSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=fields", elemType: TableFieldSchema })
  fields?: TableFieldSchema[];

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
