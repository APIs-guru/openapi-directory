package shared

type GoogleCloudPolicyanalyzerV1Activity struct {
	Activity          map[string]interface{}                        `json:"activity,omitempty"`
	ActivityType      *string                                       `json:"activityType,omitempty"`
	FullResourceName  *string                                       `json:"fullResourceName,omitempty"`
	ObservationPeriod *GoogleCloudPolicyanalyzerV1ObservationPeriod `json:"observationPeriod,omitempty"`
}
