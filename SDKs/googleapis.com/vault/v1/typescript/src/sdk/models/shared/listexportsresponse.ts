import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Export } from "./export";



// ListExportsResponse
/** 
 * The exports for a matter.
**/
export class ListExportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exports", elemType: Export })
  exports?: Export[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
