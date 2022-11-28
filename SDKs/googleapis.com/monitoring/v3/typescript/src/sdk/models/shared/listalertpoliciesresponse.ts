import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlertPolicy } from "./alertpolicy";



// ListAlertPoliciesResponse
/** 
 * The protocol for the ListAlertPolicies response.
**/
export class ListAlertPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alertPolicies", elemType: AlertPolicy })
  alertPolicies?: AlertPolicy[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
