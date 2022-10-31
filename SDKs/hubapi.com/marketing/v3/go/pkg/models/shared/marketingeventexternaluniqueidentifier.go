package shared



type MarketingEventExternalUniqueIdentifier struct {
    AppID int32 `json:"appId"`
    ExternalAccountID string `json:"externalAccountId"`
    ExternalEventID string `json:"externalEventId"`
    
}

