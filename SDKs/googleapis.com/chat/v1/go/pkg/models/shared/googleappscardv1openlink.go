package shared

type GoogleAppsCardV1OpenLinkOnCloseEnum string

const (
	GoogleAppsCardV1OpenLinkOnCloseEnumNothing GoogleAppsCardV1OpenLinkOnCloseEnum = "NOTHING"
	GoogleAppsCardV1OpenLinkOnCloseEnumReload  GoogleAppsCardV1OpenLinkOnCloseEnum = "RELOAD"
)

type GoogleAppsCardV1OpenLinkOpenAsEnum string

const (
	GoogleAppsCardV1OpenLinkOpenAsEnumFullSize GoogleAppsCardV1OpenLinkOpenAsEnum = "FULL_SIZE"
	GoogleAppsCardV1OpenLinkOpenAsEnumOverlay  GoogleAppsCardV1OpenLinkOpenAsEnum = "OVERLAY"
)

type GoogleAppsCardV1OpenLink struct {
	OnClose *GoogleAppsCardV1OpenLinkOnCloseEnum `json:"onClose,omitempty"`
	OpenAs  *GoogleAppsCardV1OpenLinkOpenAsEnum  `json:"openAs,omitempty"`
	URL     *string                              `json:"url,omitempty"`
}
