package shared

type ActivityContentDetailsSocialTypeEnum string

const (
	ActivityContentDetailsSocialTypeEnumUnspecified ActivityContentDetailsSocialTypeEnum = "unspecified"
	ActivityContentDetailsSocialTypeEnumGooglePlus  ActivityContentDetailsSocialTypeEnum = "googlePlus"
	ActivityContentDetailsSocialTypeEnumFacebook    ActivityContentDetailsSocialTypeEnum = "facebook"
	ActivityContentDetailsSocialTypeEnumTwitter     ActivityContentDetailsSocialTypeEnum = "twitter"
)

type ActivityContentDetailsSocial struct {
	Author       *string                               `json:"author"`
	ImageURL     *string                               `json:"imageUrl"`
	ReferenceURL *string                               `json:"referenceUrl"`
	ResourceID   *ResourceID                           `json:"resourceId"`
	Type         *ActivityContentDetailsSocialTypeEnum `json:"type"`
}
