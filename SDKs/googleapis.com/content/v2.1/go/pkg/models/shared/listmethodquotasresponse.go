package shared

// ListMethodQuotasResponse
// Response message for the ListMethodQuotas method.
type ListMethodQuotasResponse struct {
	MethodQuotas  []MethodQuota `json:"methodQuotas,omitempty"`
	NextPageToken *string       `json:"nextPageToken,omitempty"`
}
