package shared



type BillingProfilesListResponse struct {
    BillingProfiles []BillingProfile `json:"billingProfiles,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

