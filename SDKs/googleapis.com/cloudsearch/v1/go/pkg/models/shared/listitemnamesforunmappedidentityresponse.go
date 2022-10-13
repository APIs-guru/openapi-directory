package shared

type ListItemNamesForUnmappedIdentityResponse struct {
	ItemNames     []string `json:"itemNames"`
	NextPageToken *string  `json:"nextPageToken"`
}
