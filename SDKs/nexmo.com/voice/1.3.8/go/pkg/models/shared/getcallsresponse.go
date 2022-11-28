package shared

// GetCallsResponseEmbedded
// A list of call objects. See the [get details of a specific call](#getCall) response fields for a description of the nested objects
type GetCallsResponseEmbedded struct {
	Calls []GetCallResponse `json:"calls,omitempty"`
}

type GetCallsResponseLinksSelf struct {
	Href *string `json:"href,omitempty"`
}

type GetCallsResponseLinks struct {
	Self *GetCallsResponseLinksSelf `json:"self,omitempty"`
}

type GetCallsResponse struct {
	Embedded    *GetCallsResponseEmbedded `json:"_embedded,omitempty"`
	Links       *GetCallsResponseLinks    `json:"_links,omitempty"`
	Count       *int64                    `json:"count,omitempty"`
	PageSize    *int64                    `json:"page_size,omitempty"`
	RecordIndex *int64                    `json:"record_index,omitempty"`
}
