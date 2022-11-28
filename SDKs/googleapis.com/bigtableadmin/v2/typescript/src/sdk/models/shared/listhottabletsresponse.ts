import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HotTablet } from "./hottablet";



// ListHotTabletsResponse
/** 
 * Response message for BigtableInstanceAdmin.ListHotTablets.
**/
export class ListHotTabletsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hotTablets", elemType: HotTablet })
  hotTablets?: HotTablet[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
