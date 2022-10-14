package shared

type LinodeConfigHelpers struct {
	DevtmpfsAutomount *bool `json:"devtmpfs_automount,omitempty"`
	Distro            *bool `json:"distro,omitempty"`
	ModulesDep        *bool `json:"modules_dep,omitempty"`
	Network           *bool `json:"network,omitempty"`
	UpdatedbDisabled  *bool `json:"updatedb_disabled,omitempty"`
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
	Comments    *string                   `json:"comments,omitempty"`
	Devices     Devices                   `json:"devices"`
	Helpers     *LinodeConfigHelpers      `json:"helpers,omitempty"`
	ID          *int64                    `json:"id,omitempty"`
	Interfaces  []LinodeConfigInterface   `json:"interfaces,omitempty"`
	Kernel      *string                   `json:"kernel,omitempty"`
	Label       string                    `json:"label"`
	MemoryLimit *int64                    `json:"memory_limit,omitempty"`
	RootDevice  *string                   `json:"root_device,omitempty"`
	RunLevel    *LinodeConfigRunLevelEnum `json:"run_level,omitempty"`
	VirtMode    *LinodeConfigVirtModeEnum `json:"virt_mode,omitempty"`
}
