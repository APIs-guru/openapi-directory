import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigManagementBinauthzState } from "./configmanagementbinauthzstate";
import { ConfigManagementConfigSyncState } from "./configmanagementconfigsyncstate";
import { ConfigManagementHierarchyControllerState } from "./configmanagementhierarchycontrollerstate";
import { ConfigManagementMembershipSpec } from "./configmanagementmembershipspec";
import { ConfigManagementOperatorState } from "./configmanagementoperatorstate";
import { ConfigManagementPolicyControllerState } from "./configmanagementpolicycontrollerstate";
/**
 * **Anthos Config Management**: State for a single cluster.
**/
export declare class ConfigManagementMembershipState extends SpeakeasyBase {
    binauthzState?: ConfigManagementBinauthzState;
    clusterName?: string;
    configSyncState?: ConfigManagementConfigSyncState;
    hierarchyControllerState?: ConfigManagementHierarchyControllerState;
    membershipSpec?: ConfigManagementMembershipSpec;
    operatorState?: ConfigManagementOperatorState;
    policyControllerState?: ConfigManagementPolicyControllerState;
}
