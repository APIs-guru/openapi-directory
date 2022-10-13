package shared

type LinuxNodeConfigCgroupModeEnum string

const (
	LinuxNodeConfigCgroupModeEnumCgroupModeUnspecified LinuxNodeConfigCgroupModeEnum = "CGROUP_MODE_UNSPECIFIED"
	LinuxNodeConfigCgroupModeEnumCgroupModeV1          LinuxNodeConfigCgroupModeEnum = "CGROUP_MODE_V1"
	LinuxNodeConfigCgroupModeEnumCgroupModeV2          LinuxNodeConfigCgroupModeEnum = "CGROUP_MODE_V2"
)

type LinuxNodeConfig struct {
	CgroupMode *LinuxNodeConfigCgroupModeEnum `json:"cgroupMode"`
	Sysctls    map[string]string              `json:"sysctls"`
}
