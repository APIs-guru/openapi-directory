import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SingleUser } from "./singleuser";



// UserList
/** 
 * Wrapper for UserList Field value.
**/
export class UserList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=values", elemType: SingleUser })
  values?: SingleUser[];
}
