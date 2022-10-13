package shared

type LinodeConfigHelpers struct {
	DevtmpfsAutomount *bool `json:"devtmpfs_automount"`
	Distro            *bool `json:"distro"`
	ModulesDep        *bool `json:"modules_dep"`
	Network           *bool `json:"network"`
	UpdatedbDisabled  *bool `json:"updatedb_disabled"`
}

type LinodeConfigRunLevelEnum string

const (
	LinodeConfigRunLevelEnumDefault LinodeConfigRunLevelEnum = "default"
	LinodeConfigRunLevelEnumSingle  LinodeConfigRunLevelEnum = "single"
	LinodeConfigRunLevelEnumBinbash LinodeConfigRunLevelEnum = "binbash"
)

type LinodeConfigVirtModeEnum string

const (
	LinodeConfigVirtModeEnumParavirt LinodeConfigVirtModeEnum = "paravirt"
	LinodeConfigVirtModeEnumFullvirt LinodeConfigVirtModeEnum = "fullvirt"
)

type LinodeConfig struct {
	Comments    *string                   `json:"comments"`
	Devices     Devices                   `json:"devices"`
	Helpers     *LinodeConfigHelpers      `json:"helpers"`
	ID          *int64                    `json:"id"`
	Interfaces  []LinodeConfigInterface   `json:"interfaces"`
	Kernel      *string                   `json:"kernel"`
	Label       string                    `json:"label"`
	MemoryLimit *int64                    `json:"memory_limit"`
	RootDevice  *string                   `json:"root_device"`
	RunLevel    *LinodeConfigRunLevelEnum `json:"run_level"`
	VirtMode    *LinodeConfigVirtModeEnum `json:"virt_mode"`
}
