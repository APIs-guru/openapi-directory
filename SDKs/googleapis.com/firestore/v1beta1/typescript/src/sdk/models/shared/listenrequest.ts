import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Target } from "./target";


// ListenRequest
/** 
 * A request for Firestore.Listen
**/
export class ListenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=addTarget" })
  addTarget?: Target;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=removeTarget" })
  removeTarget?: number;
}
