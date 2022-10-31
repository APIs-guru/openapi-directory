package shared

type GoogleCloudPolicyanalyzerV1beta1Activity struct {
	Activity          map[string]interface{}                             `json:"activity,omitempty"`
	ActivityType      *string                                            `json:"activityType,omitempty"`
	FullResourceName  *string                                            `json:"fullResourceName,omitempty"`
	ObservationPeriod *GoogleCloudPolicyanalyzerV1beta1ObservationPeriod `json:"observationPeriod,omitempty"`
}
