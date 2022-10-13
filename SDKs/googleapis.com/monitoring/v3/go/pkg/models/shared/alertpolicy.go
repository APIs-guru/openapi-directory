package shared

type AlertPolicyCombinerEnum string

const (
	AlertPolicyCombinerEnumCombineUnspecified      AlertPolicyCombinerEnum = "COMBINE_UNSPECIFIED"
	AlertPolicyCombinerEnumAnd                     AlertPolicyCombinerEnum = "AND"
	AlertPolicyCombinerEnumOr                      AlertPolicyCombinerEnum = "OR"
	AlertPolicyCombinerEnumAndWithMatchingResource AlertPolicyCombinerEnum = "AND_WITH_MATCHING_RESOURCE"
)

type AlertPolicy struct {
	AlertStrategy        *AlertStrategy           `json:"alertStrategy"`
	Combiner             *AlertPolicyCombinerEnum `json:"combiner"`
	Conditions           []Condition              `json:"conditions"`
	CreationRecord       *MutationRecord          `json:"creationRecord"`
	DisplayName          *string                  `json:"displayName"`
	Documentation        *Documentation           `json:"documentation"`
	Enabled              *bool                    `json:"enabled"`
	MutationRecord       *MutationRecord          `json:"mutationRecord"`
	Name                 *string                  `json:"name"`
	NotificationChannels []string                 `json:"notificationChannels"`
	UserLabels           map[string]string        `json:"userLabels"`
	Validity             *Status                  `json:"validity"`
}
