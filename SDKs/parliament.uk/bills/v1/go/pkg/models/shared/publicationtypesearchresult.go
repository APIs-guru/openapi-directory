package shared

type PublicationTypeSearchResult struct {
	Items        []PublicationType `json:"items"`
	ItemsPerPage *int32            `json:"itemsPerPage"`
	TotalResults *int32            `json:"totalResults"`
}
