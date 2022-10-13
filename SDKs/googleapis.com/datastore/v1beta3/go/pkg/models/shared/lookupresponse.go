package shared

type LookupResponse struct {
	Deferred []Key          `json:"deferred"`
	Found    []EntityResult `json:"found"`
	Missing  []EntityResult `json:"missing"`
	ReadTime *string        `json:"readTime"`
}
