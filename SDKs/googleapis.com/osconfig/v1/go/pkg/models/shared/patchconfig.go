package shared

type PatchConfigRebootConfigEnum string

const (
	PatchConfigRebootConfigEnumRebootConfigUnspecified PatchConfigRebootConfigEnum = "REBOOT_CONFIG_UNSPECIFIED"
	PatchConfigRebootConfigEnumDefault                 PatchConfigRebootConfigEnum = "DEFAULT"
	PatchConfigRebootConfigEnumAlways                  PatchConfigRebootConfigEnum = "ALWAYS"
	PatchConfigRebootConfigEnumNever                   PatchConfigRebootConfigEnum = "NEVER"
)

type PatchConfig struct {
	Apt                 *AptSettings                 `json:"apt"`
	Goo                 map[string]interface{}       `json:"goo"`
	MigInstancesAllowed *bool                        `json:"migInstancesAllowed"`
	PostStep            *ExecStep                    `json:"postStep"`
	PreStep             *ExecStep                    `json:"preStep"`
	RebootConfig        *PatchConfigRebootConfigEnum `json:"rebootConfig"`
	WindowsUpdate       *WindowsUpdateSettings       `json:"windowsUpdate"`
	Yum                 *YumSettings                 `json:"yum"`
	Zypper              *ZypperSettings              `json:"zypper"`
}
