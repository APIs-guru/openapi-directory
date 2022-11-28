import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Target } from "./target";



// ListenRequest
/** 
 * A request for Firestore.Listen
**/
export class ListenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addTarget" })
  addTarget?: Target;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=removeTarget" })
  removeTarget?: number;
}
