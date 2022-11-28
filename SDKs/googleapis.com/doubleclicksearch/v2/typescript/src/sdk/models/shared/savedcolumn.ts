import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SavedColumn
/** 
 * A saved column
**/
export class SavedColumn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=savedColumnName" })
  savedColumnName?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
