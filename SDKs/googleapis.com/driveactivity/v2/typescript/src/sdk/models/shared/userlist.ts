import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SingleUser } from "./singleuser";


// UserList
/** 
 * Wrapper for UserList Field value.
**/
export class UserList extends SpeakeasyBase {
  @Metadata({ data: "json, name=values", elemType: shared.SingleUser })
  values?: SingleUser[];
}
