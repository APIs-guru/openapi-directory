import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementHierarchyControllerDeploymentState } from "./configmanagementhierarchycontrollerdeploymentstate";
import { ConfigManagementHierarchyControllerVersion } from "./configmanagementhierarchycontrollerversion";



// ConfigManagementHierarchyControllerState
/** 
 * State for Hierarchy Controller
**/
export class ConfigManagementHierarchyControllerState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ConfigManagementHierarchyControllerDeploymentState;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: ConfigManagementHierarchyControllerVersion;
}
