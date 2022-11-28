import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TableDisplayOptions
/** 
 * Table display options that can be reused.
**/
export class TableDisplayOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=shownColumns" })
  shownColumns?: string[];
}
