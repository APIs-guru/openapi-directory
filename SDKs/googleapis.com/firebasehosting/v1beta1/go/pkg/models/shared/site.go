package shared

type SiteTypeEnum string

const (
	SiteTypeEnumTypeUnspecified SiteTypeEnum = "TYPE_UNSPECIFIED"
	SiteTypeEnumDefaultSite     SiteTypeEnum = "DEFAULT_SITE"
	SiteTypeEnumUserSite        SiteTypeEnum = "USER_SITE"
)

type Site struct {
	AppID      *string           `json:"appId"`
	DefaultURL *string           `json:"defaultUrl"`
	Labels     map[string]string `json:"labels"`
	Name       *string           `json:"name"`
	Type       *SiteTypeEnum     `json:"type"`
}
