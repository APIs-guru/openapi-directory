package shared

type LdapsSettingsStateEnum string

const (
	LdapsSettingsStateEnumStateUnspecified LdapsSettingsStateEnum = "STATE_UNSPECIFIED"
	LdapsSettingsStateEnumUpdating         LdapsSettingsStateEnum = "UPDATING"
	LdapsSettingsStateEnumActive           LdapsSettingsStateEnum = "ACTIVE"
	LdapsSettingsStateEnumFailed           LdapsSettingsStateEnum = "FAILED"
)

type LdapsSettings struct {
	Certificate         *Certificate            `json:"certificate,omitempty"`
	CertificatePassword *string                 `json:"certificatePassword,omitempty"`
	CertificatePfx      *string                 `json:"certificatePfx,omitempty"`
	Name                *string                 `json:"name,omitempty"`
	State               *LdapsSettingsStateEnum `json:"state,omitempty"`
	UpdateTime          *string                 `json:"updateTime,omitempty"`
}
