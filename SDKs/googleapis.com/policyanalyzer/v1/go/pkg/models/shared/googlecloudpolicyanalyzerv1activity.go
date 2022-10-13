package shared

type GoogleCloudPolicyanalyzerV1Activity struct {
	Activity          map[string]interface{}                        `json:"activity"`
	ActivityType      *string                                       `json:"activityType"`
	FullResourceName  *string                                       `json:"fullResourceName"`
	ObservationPeriod *GoogleCloudPolicyanalyzerV1ObservationPeriod `json:"observationPeriod"`
}
