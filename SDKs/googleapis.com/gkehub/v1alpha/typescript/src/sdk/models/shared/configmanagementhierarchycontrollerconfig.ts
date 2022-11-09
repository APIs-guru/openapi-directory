import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConfigManagementHierarchyControllerConfig
/** 
 * Configuration for Hierarchy Controller
**/
export class ConfigManagementHierarchyControllerConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableHierarchicalResourceQuota" })
  enableHierarchicalResourceQuota?: boolean;

  @Metadata({ data: "json, name=enablePodTreeLabels" })
  enablePodTreeLabels?: boolean;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
