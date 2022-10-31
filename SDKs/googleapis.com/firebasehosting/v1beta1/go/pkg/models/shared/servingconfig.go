package shared




type ServingConfigAppAssociationEnum string

const (
    ServingConfigAppAssociationEnumAuto ServingConfigAppAssociationEnum = "AUTO"
ServingConfigAppAssociationEnumNone ServingConfigAppAssociationEnum = "NONE"
)



type ServingConfigTrailingSlashBehaviorEnum string

const (
    ServingConfigTrailingSlashBehaviorEnumTrailingSlashBehaviorUnspecified ServingConfigTrailingSlashBehaviorEnum = "TRAILING_SLASH_BEHAVIOR_UNSPECIFIED"
ServingConfigTrailingSlashBehaviorEnumAdd ServingConfigTrailingSlashBehaviorEnum = "ADD"
ServingConfigTrailingSlashBehaviorEnumRemove ServingConfigTrailingSlashBehaviorEnum = "REMOVE"
)


type ServingConfig struct {
    AppAssociation *ServingConfigAppAssociationEnum `json:"appAssociation,omitempty"`
    CleanUrls *bool `json:"cleanUrls,omitempty"`
    Headers []Header `json:"headers,omitempty"`
    I18n *I18nConfig `json:"i18n,omitempty"`
    Redirects []Redirect `json:"redirects,omitempty"`
    Rewrites []Rewrite `json:"rewrites,omitempty"`
    TrailingSlashBehavior *ServingConfigTrailingSlashBehaviorEnum `json:"trailingSlashBehavior,omitempty"`
    
}

