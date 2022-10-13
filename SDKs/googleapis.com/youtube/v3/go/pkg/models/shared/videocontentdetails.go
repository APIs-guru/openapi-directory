package shared

type VideoContentDetailsCaptionEnum string

const (
	VideoContentDetailsCaptionEnumTrue  VideoContentDetailsCaptionEnum = "true"
	VideoContentDetailsCaptionEnumFalse VideoContentDetailsCaptionEnum = "false"
)

type VideoContentDetailsDefinitionEnum string

const (
	VideoContentDetailsDefinitionEnumSd VideoContentDetailsDefinitionEnum = "sd"
	VideoContentDetailsDefinitionEnumHd VideoContentDetailsDefinitionEnum = "hd"
)

type VideoContentDetailsProjectionEnum string

const (
	VideoContentDetailsProjectionEnumRectangular          VideoContentDetailsProjectionEnum = "rectangular"
	VideoContentDetailsProjectionEnumThreeHundredAndSixty VideoContentDetailsProjectionEnum = "360"
)

type VideoContentDetails struct {
	Caption            *VideoContentDetailsCaptionEnum       `json:"caption"`
	ContentRating      *ContentRating                        `json:"contentRating"`
	CountryRestriction *AccessPolicy                         `json:"countryRestriction"`
	Definition         *VideoContentDetailsDefinitionEnum    `json:"definition"`
	Dimension          *string                               `json:"dimension"`
	Duration           *string                               `json:"duration"`
	HasCustomThumbnail *bool                                 `json:"hasCustomThumbnail"`
	LicensedContent    *bool                                 `json:"licensedContent"`
	Projection         *VideoContentDetailsProjectionEnum    `json:"projection"`
	RegionRestriction  *VideoContentDetailsRegionRestriction `json:"regionRestriction"`
}
