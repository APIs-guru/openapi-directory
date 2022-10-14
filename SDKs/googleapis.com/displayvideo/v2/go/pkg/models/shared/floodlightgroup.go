package shared

type FloodlightGroupWebTagTypeEnum string

const (
	FloodlightGroupWebTagTypeEnumWebTagTypeUnspecified FloodlightGroupWebTagTypeEnum = "WEB_TAG_TYPE_UNSPECIFIED"
	FloodlightGroupWebTagTypeEnumWebTagTypeNone        FloodlightGroupWebTagTypeEnum = "WEB_TAG_TYPE_NONE"
	FloodlightGroupWebTagTypeEnumWebTagTypeImage       FloodlightGroupWebTagTypeEnum = "WEB_TAG_TYPE_IMAGE"
	FloodlightGroupWebTagTypeEnumWebTagTypeDynamic     FloodlightGroupWebTagTypeEnum = "WEB_TAG_TYPE_DYNAMIC"
)

type FloodlightGroup struct {
	ActiveViewConfig  *ActiveViewVideoViewabilityMetricConfig `json:"activeViewConfig,omitempty"`
	CustomVariables   map[string]interface{}                  `json:"customVariables,omitempty"`
	DisplayName       *string                                 `json:"displayName,omitempty"`
	FloodlightGroupID *string                                 `json:"floodlightGroupId,omitempty"`
	LookbackWindow    *LookbackWindow                         `json:"lookbackWindow,omitempty"`
	Name              *string                                 `json:"name,omitempty"`
	WebTagType        *FloodlightGroupWebTagTypeEnum          `json:"webTagType,omitempty"`
}
