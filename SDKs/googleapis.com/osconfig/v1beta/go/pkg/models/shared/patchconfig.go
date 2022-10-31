package shared




type PatchConfigRebootConfigEnum string

const (
    PatchConfigRebootConfigEnumRebootConfigUnspecified PatchConfigRebootConfigEnum = "REBOOT_CONFIG_UNSPECIFIED"
PatchConfigRebootConfigEnumDefault PatchConfigRebootConfigEnum = "DEFAULT"
PatchConfigRebootConfigEnumAlways PatchConfigRebootConfigEnum = "ALWAYS"
PatchConfigRebootConfigEnumNever PatchConfigRebootConfigEnum = "NEVER"
)


type PatchConfig struct {
    Apt *AptSettings `json:"apt,omitempty"`
    Goo map[string]interface{} `json:"goo,omitempty"`
    MigInstancesAllowed *bool `json:"migInstancesAllowed,omitempty"`
    PostStep *ExecStep `json:"postStep,omitempty"`
    PreStep *ExecStep `json:"preStep,omitempty"`
    RebootConfig *PatchConfigRebootConfigEnum `json:"rebootConfig,omitempty"`
    WindowsUpdate *WindowsUpdateSettings `json:"windowsUpdate,omitempty"`
    Yum *YumSettings `json:"yum,omitempty"`
    Zypper *ZypperSettings `json:"zypper,omitempty"`
    
}

