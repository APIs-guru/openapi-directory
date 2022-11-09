import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Asset } from "./asset";
import { Asset } from "./asset";


// StatementTemplate
/** 
 * A single statement to check in a bulk call using BulkCheck. See CheckRequest for details about each field.
**/
export class StatementTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=relation" })
  relation?: string;

  @Metadata({ data: "json, name=source" })
  source?: Asset;

  @Metadata({ data: "json, name=target" })
  target?: Asset;
}
