package shared




type AlertPolicyCombinerEnum string

const (
    AlertPolicyCombinerEnumCombineUnspecified AlertPolicyCombinerEnum = "COMBINE_UNSPECIFIED"
AlertPolicyCombinerEnumAnd AlertPolicyCombinerEnum = "AND"
AlertPolicyCombinerEnumOr AlertPolicyCombinerEnum = "OR"
AlertPolicyCombinerEnumAndWithMatchingResource AlertPolicyCombinerEnum = "AND_WITH_MATCHING_RESOURCE"
)


type AlertPolicy struct {
    AlertStrategy *AlertStrategy `json:"alertStrategy,omitempty"`
    Combiner *AlertPolicyCombinerEnum `json:"combiner,omitempty"`
    Conditions []Condition `json:"conditions,omitempty"`
    CreationRecord *MutationRecord `json:"creationRecord,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Documentation *Documentation `json:"documentation,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    MutationRecord *MutationRecord `json:"mutationRecord,omitempty"`
    Name *string `json:"name,omitempty"`
    NotificationChannels []string `json:"notificationChannels,omitempty"`
    UserLabels map[string]string `json:"userLabels,omitempty"`
    Validity *Status `json:"validity,omitempty"`
    
}

