import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstanceOsPoliciesCompliance } from "./instanceospoliciescompliance";


// ListInstanceOsPoliciesCompliancesResponse
/** 
 * A response message for listing OS policies compliance data for all Compute Engine VMs in the given location.
**/
export class ListInstanceOsPoliciesCompliancesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceOsPoliciesCompliances", elemType: shared.InstanceOsPoliciesCompliance })
  instanceOsPoliciesCompliances?: InstanceOsPoliciesCompliance[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
