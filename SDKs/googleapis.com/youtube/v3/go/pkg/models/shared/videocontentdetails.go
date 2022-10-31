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
	Caption            *VideoContentDetailsCaptionEnum       `json:"caption,omitempty"`
	ContentRating      *ContentRating                        `json:"contentRating,omitempty"`
	CountryRestriction *AccessPolicy                         `json:"countryRestriction,omitempty"`
	Definition         *VideoContentDetailsDefinitionEnum    `json:"definition,omitempty"`
	Dimension          *string                               `json:"dimension,omitempty"`
	Duration           *string                               `json:"duration,omitempty"`
	HasCustomThumbnail *bool                                 `json:"hasCustomThumbnail,omitempty"`
	LicensedContent    *bool                                 `json:"licensedContent,omitempty"`
	Projection         *VideoContentDetailsProjectionEnum    `json:"projection,omitempty"`
	RegionRestriction  *VideoContentDetailsRegionRestriction `json:"regionRestriction,omitempty"`
}
