package shared

type Conversion struct {
	ChildDirectedTreatment    *bool                      `json:"childDirectedTreatment"`
	CustomVariables           []CustomFloodlightVariable `json:"customVariables"`
	EncryptedUserID           *string                    `json:"encryptedUserId"`
	EncryptedUserIDCandidates []string                   `json:"encryptedUserIdCandidates"`
	FloodlightActivityID      *string                    `json:"floodlightActivityId"`
	FloodlightConfigurationID *string                    `json:"floodlightConfigurationId"`
	Gclid                     *string                    `json:"gclid"`
	Kind                      *string                    `json:"kind"`
	LimitAdTracking           *bool                      `json:"limitAdTracking"`
	MatchID                   *string                    `json:"matchId"`
	MobileDeviceID            *string                    `json:"mobileDeviceId"`
	NonPersonalizedAd         *bool                      `json:"nonPersonalizedAd"`
	Ordinal                   *string                    `json:"ordinal"`
	Quantity                  *string                    `json:"quantity"`
	TimestampMicros           *string                    `json:"timestampMicros"`
	TreatmentForUnderage      *bool                      `json:"treatmentForUnderage"`
	Value                     *float64                   `json:"value"`
}
