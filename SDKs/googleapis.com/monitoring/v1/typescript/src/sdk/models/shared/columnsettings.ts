import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ColumnSettings
/** 
 * The persistent settings for a table's columns.
**/
export class ColumnSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column" })
  column?: string;

  @SpeakeasyMetadata({ data: "json, name=visible" })
  visible?: boolean;
}
