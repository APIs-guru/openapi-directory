import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HotTablet } from "./hottablet";


// ListHotTabletsResponse
/** 
 * Response message for BigtableInstanceAdmin.ListHotTablets.
**/
export class ListHotTabletsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=hotTablets", elemType: shared.HotTablet })
  hotTablets?: HotTablet[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
