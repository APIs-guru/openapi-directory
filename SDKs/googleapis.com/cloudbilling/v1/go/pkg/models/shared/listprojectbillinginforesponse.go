package shared

type ListProjectBillingInfoResponse struct {
	NextPageToken      *string              `json:"nextPageToken"`
	ProjectBillingInfo []ProjectBillingInfo `json:"projectBillingInfo"`
}
