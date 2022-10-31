package shared




type SiteTypeEnum string

const (
    SiteTypeEnumTypeUnspecified SiteTypeEnum = "TYPE_UNSPECIFIED"
SiteTypeEnumDefaultSite SiteTypeEnum = "DEFAULT_SITE"
SiteTypeEnumUserSite SiteTypeEnum = "USER_SITE"
)


type Site struct {
    AppID *string `json:"appId,omitempty"`
    DefaultURL *string `json:"defaultUrl,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    Type *SiteTypeEnum `json:"type,omitempty"`
    
}

