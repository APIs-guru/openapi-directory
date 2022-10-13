package shared

type ListRegistrationsResponse struct {
	NextPageToken *string        `json:"nextPageToken"`
	Registrations []Registration `json:"registrations"`
}
