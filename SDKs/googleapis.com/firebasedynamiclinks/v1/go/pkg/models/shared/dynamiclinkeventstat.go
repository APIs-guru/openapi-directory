package shared

type DynamicLinkEventStatEventEnum string

const (
	DynamicLinkEventStatEventEnumDynamicLinkEventUnspecified DynamicLinkEventStatEventEnum = "DYNAMIC_LINK_EVENT_UNSPECIFIED"
	DynamicLinkEventStatEventEnumClick                       DynamicLinkEventStatEventEnum = "CLICK"
	DynamicLinkEventStatEventEnumRedirect                    DynamicLinkEventStatEventEnum = "REDIRECT"
	DynamicLinkEventStatEventEnumAppInstall                  DynamicLinkEventStatEventEnum = "APP_INSTALL"
	DynamicLinkEventStatEventEnumAppFirstOpen                DynamicLinkEventStatEventEnum = "APP_FIRST_OPEN"
	DynamicLinkEventStatEventEnumAppReOpen                   DynamicLinkEventStatEventEnum = "APP_RE_OPEN"
)

type DynamicLinkEventStatPlatformEnum string

const (
	DynamicLinkEventStatPlatformEnumDynamicLinkPlatformUnspecified DynamicLinkEventStatPlatformEnum = "DYNAMIC_LINK_PLATFORM_UNSPECIFIED"
	DynamicLinkEventStatPlatformEnumAndroid                        DynamicLinkEventStatPlatformEnum = "ANDROID"
	DynamicLinkEventStatPlatformEnumIos                            DynamicLinkEventStatPlatformEnum = "IOS"
	DynamicLinkEventStatPlatformEnumDesktop                        DynamicLinkEventStatPlatformEnum = "DESKTOP"
	DynamicLinkEventStatPlatformEnumOther                          DynamicLinkEventStatPlatformEnum = "OTHER"
)

type DynamicLinkEventStat struct {
	Count    *string                           `json:"count"`
	Event    *DynamicLinkEventStatEventEnum    `json:"event"`
	Platform *DynamicLinkEventStatPlatformEnum `json:"platform"`
}
