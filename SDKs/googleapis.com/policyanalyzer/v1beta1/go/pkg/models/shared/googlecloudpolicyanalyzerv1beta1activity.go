package shared

type GoogleCloudPolicyanalyzerV1beta1Activity struct {
	Activity          map[string]interface{}                             `json:"activity"`
	ActivityType      *string                                            `json:"activityType"`
	FullResourceName  *string                                            `json:"fullResourceName"`
	ObservationPeriod *GoogleCloudPolicyanalyzerV1beta1ObservationPeriod `json:"observationPeriod"`
}
