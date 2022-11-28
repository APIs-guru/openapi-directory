import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementConfigSync } from "./configmanagementconfigsync";
import { ConfigManagementHierarchyControllerConfig } from "./configmanagementhierarchycontrollerconfig";
import { ConfigManagementPolicyController } from "./configmanagementpolicycontroller";
/**
 * **Anthos Config Management**: Configuration for a single cluster. Intended to parallel the ConfigManagement CR.
**/
export declare class ConfigManagementMembershipSpec extends SpeakeasyBase {
    configSync?: ConfigManagementConfigSync;
    hierarchyController?: ConfigManagementHierarchyControllerConfig;
    policyController?: ConfigManagementPolicyController;
    version?: string;
}
