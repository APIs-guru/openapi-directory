import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TagHold } from "./taghold";


// ListTagHoldsResponse
/** 
 * The ListTagHolds response.
**/
export class ListTagHoldsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=tagHolds", elemType: shared.TagHold })
  tagHolds?: TagHold[];
}
