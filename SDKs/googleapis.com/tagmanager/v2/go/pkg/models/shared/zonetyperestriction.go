package shared

type ZoneTypeRestriction struct {
	Enable            *bool    `json:"enable"`
	WhitelistedTypeID []string `json:"whitelistedTypeId"`
}
