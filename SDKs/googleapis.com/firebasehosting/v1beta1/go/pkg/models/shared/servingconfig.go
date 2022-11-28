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

// ServingConfig
// The configuration for how incoming requests to a site should be routed and processed before serving content. The URL request paths are matched against the specified URL patterns in the configuration, then Hosting applies the applicable configuration according to a specific [priority order](https://firebase.google.com/docs/hosting/full-config#hosting_priority_order).
type ServingConfig struct {
	AppAssociation        *ServingConfigAppAssociationEnum        `json:"appAssociation,omitempty"`
	CleanUrls             *bool                                   `json:"cleanUrls,omitempty"`
	Headers               []Header                                `json:"headers,omitempty"`
	I18n                  *I18nConfig                             `json:"i18n,omitempty"`
	Redirects             []Redirect                              `json:"redirects,omitempty"`
	Rewrites              []Rewrite                               `json:"rewrites,omitempty"`
	TrailingSlashBehavior *ServingConfigTrailingSlashBehaviorEnum `json:"trailingSlashBehavior,omitempty"`
}
