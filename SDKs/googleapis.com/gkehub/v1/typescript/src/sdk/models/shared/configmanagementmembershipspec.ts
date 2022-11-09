import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigManagementConfigSync } from "./configmanagementconfigsync";
import { ConfigManagementHierarchyControllerConfig } from "./configmanagementhierarchycontrollerconfig";
import { ConfigManagementPolicyController } from "./configmanagementpolicycontroller";


// ConfigManagementMembershipSpec
/** 
 * **Anthos Config Management**: Configuration for a single cluster. Intended to parallel the ConfigManagement CR.
**/
export class ConfigManagementMembershipSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=configSync" })
  configSync?: ConfigManagementConfigSync;

  @Metadata({ data: "json, name=hierarchyController" })
  hierarchyController?: ConfigManagementHierarchyControllerConfig;

  @Metadata({ data: "json, name=policyController" })
  policyController?: ConfigManagementPolicyController;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
