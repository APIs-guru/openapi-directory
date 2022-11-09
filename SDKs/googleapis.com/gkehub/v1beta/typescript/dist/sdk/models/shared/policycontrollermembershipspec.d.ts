import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PolicyControllerHubConfig } from "./policycontrollerhubconfig";
/**
 * **Policy Controller**: Configuration for a single cluster. Intended to parallel the PolicyController CR.
**/
export declare class PolicyControllerMembershipSpec extends SpeakeasyBase {
    policyControllerHubConfig?: PolicyControllerHubConfig;
    version?: string;
}
