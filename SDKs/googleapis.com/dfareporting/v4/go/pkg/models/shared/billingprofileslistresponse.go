package shared

type BillingProfilesListResponse struct {
	BillingProfiles []BillingProfile `json:"billingProfiles"`
	Kind            *string          `json:"kind"`
	NextPageToken   *string          `json:"nextPageToken"`
}
