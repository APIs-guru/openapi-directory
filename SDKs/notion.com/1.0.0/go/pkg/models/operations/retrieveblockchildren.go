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
	CreatedTime    *string                `json:"created_time,omitempty"`
	HasChildren    *bool                  `json:"has_children,omitempty"`
	ID             *string                `json:"id,omitempty"`
	LastEditedTime *string                `json:"last_edited_time,omitempty"`
	Object         *string                `json:"object,omitempty"`
	Type           *string                `json:"type,omitempty"`
	Unsupported    map[string]interface{} `json:"unsupported,omitempty"`
}

type RetrieveBlockChildren200ApplicationJSON struct {
	HasMore    *bool                                            `json:"has_more,omitempty"`
	NextCursor *interface{}                                     `json:"next_cursor,omitempty"`
	Object     *string                                          `json:"object,omitempty"`
	Results    []RetrieveBlockChildren200ApplicationJSONResults `json:"results,omitempty"`
}

type RetrieveBlockChildrenResponse struct {
	ContentType                                   string
	Headers                                       map[string][]string
	StatusCode                                    int64
	RetrieveBlockChildren200ApplicationJSONObject *RetrieveBlockChildren200ApplicationJSON
}
