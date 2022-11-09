import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Delegate } from "./delegate";


// ListDelegatesResponse
/** 
 * Response for the ListDelegates method.
**/
export class ListDelegatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=delegates", elemType: shared.Delegate })
  delegates?: Delegate[];
}
