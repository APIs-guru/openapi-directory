import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";



// StatementTemplate
/** 
 * A single statement to check in a bulk call using BulkCheck. See CheckRequest for details about each field.
**/
export class StatementTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=relation" })
  relation?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: Asset;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: Asset;
}
