package shared



type Conversion struct {
    ChildDirectedTreatment *bool `json:"childDirectedTreatment,omitempty"`
    CustomVariables []CustomFloodlightVariable `json:"customVariables,omitempty"`
    EncryptedUserID *string `json:"encryptedUserId,omitempty"`
    EncryptedUserIDCandidates []string `json:"encryptedUserIdCandidates,omitempty"`
    FloodlightActivityID *string `json:"floodlightActivityId,omitempty"`
    FloodlightConfigurationID *string `json:"floodlightConfigurationId,omitempty"`
    Gclid *string `json:"gclid,omitempty"`
    Kind *string `json:"kind,omitempty"`
    LimitAdTracking *bool `json:"limitAdTracking,omitempty"`
    MatchID *string `json:"matchId,omitempty"`
    MobileDeviceID *string `json:"mobileDeviceId,omitempty"`
    NonPersonalizedAd *bool `json:"nonPersonalizedAd,omitempty"`
    Ordinal *string `json:"ordinal,omitempty"`
    Quantity *string `json:"quantity,omitempty"`
    TimestampMicros *string `json:"timestampMicros,omitempty"`
    TreatmentForUnderage *bool `json:"treatmentForUnderage,omitempty"`
    Value *float64 `json:"value,omitempty"`
    
}

