import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigManagementConfigSyncState } from "./configmanagementconfigsyncstate";
import { ConfigManagementHierarchyControllerState } from "./configmanagementhierarchycontrollerstate";
import { ConfigManagementMembershipSpec } from "./configmanagementmembershipspec";
import { ConfigManagementOperatorState } from "./configmanagementoperatorstate";
import { ConfigManagementPolicyControllerState } from "./configmanagementpolicycontrollerstate";


// ConfigManagementMembershipState
/** 
 * **Anthos Config Management**: State for a single cluster.
**/
export class ConfigManagementMembershipState extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @Metadata({ data: "json, name=configSyncState" })
  configSyncState?: ConfigManagementConfigSyncState;

  @Metadata({ data: "json, name=hierarchyControllerState" })
  hierarchyControllerState?: ConfigManagementHierarchyControllerState;

  @Metadata({ data: "json, name=membershipSpec" })
  membershipSpec?: ConfigManagementMembershipSpec;

  @Metadata({ data: "json, name=operatorState" })
  operatorState?: ConfigManagementOperatorState;

  @Metadata({ data: "json, name=policyControllerState" })
  policyControllerState?: ConfigManagementPolicyControllerState;
}
