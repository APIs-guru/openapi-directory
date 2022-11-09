import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SavedColumn
/** 
 * A saved column
**/
export class SavedColumn extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=savedColumnName" })
  savedColumnName?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
