package shared

type ListVerificationsResponse struct {
	NextPageToken *string        `json:"nextPageToken"`
	Verifications []Verification `json:"verifications"`
}
