package shared

type LdapsSettingsStateEnum string

const (
	LdapsSettingsStateEnumStateUnspecified LdapsSettingsStateEnum = "STATE_UNSPECIFIED"
	LdapsSettingsStateEnumUpdating         LdapsSettingsStateEnum = "UPDATING"
	LdapsSettingsStateEnumActive           LdapsSettingsStateEnum = "ACTIVE"
	LdapsSettingsStateEnumFailed           LdapsSettingsStateEnum = "FAILED"
)

type LdapsSettings struct {
	Certificate         *Certificate            `json:"certificate"`
	CertificatePassword *string                 `json:"certificatePassword"`
	CertificatePfx      *string                 `json:"certificatePfx"`
	Name                *string                 `json:"name"`
	State               *LdapsSettingsStateEnum `json:"state"`
	UpdateTime          *string                 `json:"updateTime"`
}
