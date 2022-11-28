import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConfigManagementHierarchyControllerConfig
/** 
 * Configuration for Hierarchy Controller
**/
export class ConfigManagementHierarchyControllerConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableHierarchicalResourceQuota" })
  enableHierarchicalResourceQuota?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enablePodTreeLabels" })
  enablePodTreeLabels?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
