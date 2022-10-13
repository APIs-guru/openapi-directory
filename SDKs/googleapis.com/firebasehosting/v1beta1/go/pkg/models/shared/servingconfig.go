package shared

type ServingConfigAppAssociationEnum string

const (
	ServingConfigAppAssociationEnumAuto ServingConfigAppAssociationEnum = "AUTO"
	ServingConfigAppAssociationEnumNone ServingConfigAppAssociationEnum = "NONE"
)

type ServingConfigTrailingSlashBehaviorEnum string

const (
	ServingConfigTrailingSlashBehaviorEnumTrailingSlashBehaviorUnspecified ServingConfigTrailingSlashBehaviorEnum = "TRAILING_SLASH_BEHAVIOR_UNSPECIFIED"
	ServingConfigTrailingSlashBehaviorEnumAdd                              ServingConfigTrailingSlashBehaviorEnum = "ADD"
	ServingConfigTrailingSlashBehaviorEnumRemove                           ServingConfigTrailingSlashBehaviorEnum = "REMOVE"
)

type ServingConfig struct {
	AppAssociation        *ServingConfigAppAssociationEnum        `json:"appAssociation"`
	CleanUrls             *bool                                   `json:"cleanUrls"`
	Headers               []Header                                `json:"headers"`
	I18n                  *I18nConfig                             `json:"i18n"`
	Redirects             []Redirect                              `json:"redirects"`
	Rewrites              []Rewrite                               `json:"rewrites"`
	TrailingSlashBehavior *ServingConfigTrailingSlashBehaviorEnum `json:"trailingSlashBehavior"`
}
