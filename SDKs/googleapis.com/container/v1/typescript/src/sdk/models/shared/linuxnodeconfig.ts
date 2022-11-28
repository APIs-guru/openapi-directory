import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LinuxNodeConfigCgroupModeEnum {
    CgroupModeUnspecified = "CGROUP_MODE_UNSPECIFIED",
    CgroupModeV1 = "CGROUP_MODE_V1",
    CgroupModeV2 = "CGROUP_MODE_V2"
}


// LinuxNodeConfig
/** 
 * Parameters that can be configured on Linux nodes.
**/
export class LinuxNodeConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cgroupMode" })
  cgroupMode?: LinuxNodeConfigCgroupModeEnum;

  @SpeakeasyMetadata({ data: "json, name=sysctls" })
  sysctls?: Map<string, string>;
}
