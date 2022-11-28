import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagHold } from "./taghold";



// ListTagHoldsResponse
/** 
 * The ListTagHolds response.
**/
export class ListTagHoldsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tagHolds", elemType: TagHold })
  tagHolds?: TagHold[];
}
