package shared

type GetCallsResponseEmbedded struct {
	Calls []GetCallResponse `json:"calls"`
}

type GetCallsResponseLinksSelf struct {
	Href *string `json:"href"`
}

type GetCallsResponseLinks struct {
	Self *GetCallsResponseLinksSelf `json:"self"`
}

type GetCallsResponse struct {
	Embedded    *GetCallsResponseEmbedded `json:"_embedded"`
	Links       *GetCallsResponseLinks    `json:"_links"`
	Count       *int64                    `json:"count"`
	PageSize    *int64                    `json:"page_size"`
	RecordIndex *int64                    `json:"record_index"`
}
