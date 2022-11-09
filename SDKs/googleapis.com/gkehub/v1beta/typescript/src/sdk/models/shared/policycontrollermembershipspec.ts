import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PolicyControllerHubConfig } from "./policycontrollerhubconfig";


// PolicyControllerMembershipSpec
/** 
 * **Policy Controller**: Configuration for a single cluster. Intended to parallel the PolicyController CR.
**/
export class PolicyControllerMembershipSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=policyControllerHubConfig" })
  policyControllerHubConfig?: PolicyControllerHubConfig;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
