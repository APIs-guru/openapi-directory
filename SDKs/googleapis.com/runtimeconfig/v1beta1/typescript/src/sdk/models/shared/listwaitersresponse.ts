import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Waiter } from "./waiter";


// ListWaitersResponse
/** 
 * Response for the `ListWaiters()` method. Order of returned waiter objects is arbitrary.
**/
export class ListWaitersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=waiters", elemType: shared.Waiter })
  waiters?: Waiter[];
}
