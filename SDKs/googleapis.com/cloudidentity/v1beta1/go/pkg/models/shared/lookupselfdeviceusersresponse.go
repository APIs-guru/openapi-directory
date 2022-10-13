package shared

type LookupSelfDeviceUsersResponse struct {
	Customer      *string  `json:"customer"`
	Names         []string `json:"names"`
	NextPageToken *string  `json:"nextPageToken"`
}
