import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Waiter } from "./waiter";



// ListWaitersResponse
/** 
 * Response for the `ListWaiters()` method. Order of returned waiter objects is arbitrary.
**/
export class ListWaitersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=waiters", elemType: Waiter })
  waiters?: Waiter[];
}
