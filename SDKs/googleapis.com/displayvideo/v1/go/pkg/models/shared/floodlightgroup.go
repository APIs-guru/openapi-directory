package shared

type FloodlightGroupWebTagTypeEnum string

const (
	FloodlightGroupWebTagTypeEnumWebTagTypeUnspecified FloodlightGroupWebTagTypeEnum = "WEB_TAG_TYPE_UNSPECIFIED"
	FloodlightGroupWebTagTypeEnumWebTagTypeNone        FloodlightGroupWebTagTypeEnum = "WEB_TAG_TYPE_NONE"
	FloodlightGroupWebTagTypeEnumWebTagTypeImage       FloodlightGroupWebTagTypeEnum = "WEB_TAG_TYPE_IMAGE"
	FloodlightGroupWebTagTypeEnumWebTagTypeDynamic     FloodlightGroupWebTagTypeEnum = "WEB_TAG_TYPE_DYNAMIC"
)

type FloodlightGroup struct {
	ActiveViewConfig  *ActiveViewVideoViewabilityMetricConfig `json:"activeViewConfig"`
	CustomVariables   map[string]interface{}                  `json:"customVariables"`
	DisplayName       *string                                 `json:"displayName"`
	FloodlightGroupID *string                                 `json:"floodlightGroupId"`
	LookbackWindow    *LookbackWindow                         `json:"lookbackWindow"`
	Name              *string                                 `json:"name"`
	WebTagType        *FloodlightGroupWebTagTypeEnum          `json:"webTagType"`
}
