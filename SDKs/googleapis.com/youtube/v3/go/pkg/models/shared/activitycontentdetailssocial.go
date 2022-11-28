package shared

type ActivityContentDetailsSocialTypeEnum string

const (
	ActivityContentDetailsSocialTypeEnumUnspecified ActivityContentDetailsSocialTypeEnum = "unspecified"
	ActivityContentDetailsSocialTypeEnumGooglePlus  ActivityContentDetailsSocialTypeEnum = "googlePlus"
	ActivityContentDetailsSocialTypeEnumFacebook    ActivityContentDetailsSocialTypeEnum = "facebook"
	ActivityContentDetailsSocialTypeEnumTwitter     ActivityContentDetailsSocialTypeEnum = "twitter"
)

// ActivityContentDetailsSocial
// Details about a social network post.
type ActivityContentDetailsSocial struct {
	Author       *string                               `json:"author,omitempty"`
	ImageURL     *string                               `json:"imageUrl,omitempty"`
	ReferenceURL *string                               `json:"referenceUrl,omitempty"`
	ResourceID   *ResourceID                           `json:"resourceId,omitempty"`
	Type         *ActivityContentDetailsSocialTypeEnum `json:"type,omitempty"`
}
