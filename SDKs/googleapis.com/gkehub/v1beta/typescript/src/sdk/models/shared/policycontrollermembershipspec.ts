import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyControllerHubConfig } from "./policycontrollerhubconfig";



// PolicyControllerMembershipSpec
/** 
 * **Policy Controller**: Configuration for a single cluster. Intended to parallel the PolicyController CR.
**/
export class PolicyControllerMembershipSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policyControllerHubConfig" })
  policyControllerHubConfig?: PolicyControllerHubConfig;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
