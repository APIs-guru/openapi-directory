package operations

type RetrieveBlockChildrenPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type RetrieveBlockChildrenQueryParams struct {
	PageSize *string `queryParam:"style=form,explode=true,name=page_size"`
}

type RetrieveBlockChildrenRequest struct {
	PathParams  RetrieveBlockChildrenPathParams
	QueryParams RetrieveBlockChildrenQueryParams
}

type RetrieveBlockChildren200ApplicationJSONResults struct {
	CreatedTime    *string                `json:"created_time"`
	HasChildren    *bool                  `json:"has_children"`
	ID             *string                `json:"id"`
	LastEditedTime *string                `json:"last_edited_time"`
	Object         *string                `json:"object"`
	Type           *string                `json:"type"`
	Unsupported    map[string]interface{} `json:"unsupported"`
}

type RetrieveBlockChildren200ApplicationJSON struct {
	HasMore    *bool                                            `json:"has_more"`
	NextCursor *interface{}                                     `json:"next_cursor"`
	Object     *string                                          `json:"object"`
	Results    []RetrieveBlockChildren200ApplicationJSONResults `json:"results"`
}

type RetrieveBlockChildrenResponse struct {
	ContentType                                   string
	Headers                                       map[string][]string
	StatusCode                                    int64
	RetrieveBlockChildren200ApplicationJSONObject *RetrieveBlockChildren200ApplicationJSON
}
