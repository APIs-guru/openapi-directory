import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigManagementHierarchyControllerDeploymentState } from "./configmanagementhierarchycontrollerdeploymentstate";
import { ConfigManagementHierarchyControllerVersion } from "./configmanagementhierarchycontrollerversion";


// ConfigManagementHierarchyControllerState
/** 
 * State for Hierarchy Controller
**/
export class ConfigManagementHierarchyControllerState extends SpeakeasyBase {
  @Metadata({ data: "json, name=state" })
  state?: ConfigManagementHierarchyControllerDeploymentState;

  @Metadata({ data: "json, name=version" })
  version?: ConfigManagementHierarchyControllerVersion;
}
