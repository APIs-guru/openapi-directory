import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @SpeakeasyMetadata({ data: "json, name=configSyncState" })
  configSyncState?: ConfigManagementConfigSyncState;

  @SpeakeasyMetadata({ data: "json, name=hierarchyControllerState" })
  hierarchyControllerState?: ConfigManagementHierarchyControllerState;

  @SpeakeasyMetadata({ data: "json, name=membershipSpec" })
  membershipSpec?: ConfigManagementMembershipSpec;

  @SpeakeasyMetadata({ data: "json, name=operatorState" })
  operatorState?: ConfigManagementOperatorState;

  @SpeakeasyMetadata({ data: "json, name=policyControllerState" })
  policyControllerState?: ConfigManagementPolicyControllerState;
}
