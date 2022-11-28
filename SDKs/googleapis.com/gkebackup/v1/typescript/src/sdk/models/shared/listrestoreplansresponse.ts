import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RestorePlan } from "./restoreplan";



// ListRestorePlansResponse
/** 
 * Response message for ListRestorePlans.
**/
export class ListRestorePlansResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=restorePlans", elemType: RestorePlan })
  restorePlans?: RestorePlan[];

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
