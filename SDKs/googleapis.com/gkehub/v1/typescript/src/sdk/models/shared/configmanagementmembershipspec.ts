import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementConfigSync } from "./configmanagementconfigsync";
import { ConfigManagementHierarchyControllerConfig } from "./configmanagementhierarchycontrollerconfig";
import { ConfigManagementPolicyController } from "./configmanagementpolicycontroller";



// ConfigManagementMembershipSpec
/** 
 * **Anthos Config Management**: Configuration for a single cluster. Intended to parallel the ConfigManagement CR.
**/
export class ConfigManagementMembershipSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configSync" })
  configSync?: ConfigManagementConfigSync;

  @SpeakeasyMetadata({ data: "json, name=hierarchyController" })
  hierarchyController?: ConfigManagementHierarchyControllerConfig;

  @SpeakeasyMetadata({ data: "json, name=policyController" })
  policyController?: ConfigManagementPolicyController;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
