import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Delegate } from "./delegate";



// ListDelegatesResponse
/** 
 * Response for the ListDelegates method.
**/
export class ListDelegatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delegates", elemType: Delegate })
  delegates?: Delegate[];
}
