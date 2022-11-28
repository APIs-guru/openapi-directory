import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LinuxNodeConfigCgroupModeEnum {
    CgroupModeUnspecified = "CGROUP_MODE_UNSPECIFIED",
    CgroupModeV1 = "CGROUP_MODE_V1",
    CgroupModeV2 = "CGROUP_MODE_V2"
}
/**
 * Parameters that can be configured on Linux nodes.
**/
export declare class LinuxNodeConfig extends SpeakeasyBase {
    cgroupMode?: LinuxNodeConfigCgroupModeEnum;
    sysctls?: Map<string, string>;
}
