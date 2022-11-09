import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Hold } from "./hold";


// ListHoldsResponse
/** 
 * The holds for a matter.
**/
export class ListHoldsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=holds", elemType: shared.Hold })
  holds?: Hold[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
