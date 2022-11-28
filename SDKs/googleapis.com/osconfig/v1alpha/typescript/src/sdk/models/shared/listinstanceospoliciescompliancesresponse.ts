import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceOsPoliciesCompliance } from "./instanceospoliciescompliance";



// ListInstanceOsPoliciesCompliancesResponse
/** 
 * A response message for listing OS policies compliance data for all Compute Engine VMs in the given location.
**/
export class ListInstanceOsPoliciesCompliancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceOsPoliciesCompliances", elemType: InstanceOsPoliciesCompliance })
  instanceOsPoliciesCompliances?: InstanceOsPoliciesCompliance[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
