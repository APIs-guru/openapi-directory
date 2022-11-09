import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AlertPolicy } from "./alertpolicy";


// ListAlertPoliciesResponse
/** 
 * The protocol for the ListAlertPolicies response.
**/
export class ListAlertPoliciesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=alertPolicies", elemType: shared.AlertPolicy })
  alertPolicies?: AlertPolicy[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
