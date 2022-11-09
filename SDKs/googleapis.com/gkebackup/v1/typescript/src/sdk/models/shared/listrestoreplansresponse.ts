import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RestorePlan } from "./restoreplan";


// ListRestorePlansResponse
/** 
 * Response message for ListRestorePlans.
**/
export class ListRestorePlansResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=restorePlans", elemType: shared.RestorePlan })
  restorePlans?: RestorePlan[];

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
