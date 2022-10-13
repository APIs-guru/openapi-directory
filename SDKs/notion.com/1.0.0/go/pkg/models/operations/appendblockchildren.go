package operations

type AppendBlockChildrenPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type AppendBlockChildrenRequestBodyChildrenHeading2TextText struct {
	Content *string `json:"content"`
}

type AppendBlockChildrenRequestBodyChildrenHeading2Text struct {
	Text *AppendBlockChildrenRequestBodyChildrenHeading2TextText `json:"text"`
	Type *string                                                 `json:"type"`
}

type AppendBlockChildrenRequestBodyChildrenHeading2 struct {
	Text []AppendBlockChildrenRequestBodyChildrenHeading2Text `json:"text"`
}

type AppendBlockChildrenRequestBodyChildren struct {
	Heading2 *AppendBlockChildrenRequestBodyChildrenHeading2 `json:"heading_2"`
	Object   *string                                         `json:"object"`
	Type     *string                                         `json:"type"`
}

type AppendBlockChildrenRequestBody struct {
	Children []AppendBlockChildrenRequestBodyChildren `json:"children"`
}

type AppendBlockChildrenRequest struct {
	PathParams AppendBlockChildrenPathParams
	Request    *AppendBlockChildrenRequestBody `request:"mediaType=application/json"`
}

type AppendBlockChildren200ApplicationJSONChildPage struct {
	Title *string `json:"title"`
}

type AppendBlockChildren200ApplicationJSON struct {
	ChildPage      *AppendBlockChildren200ApplicationJSONChildPage `json:"child_page"`
	CreatedTime    *string                                         `json:"created_time"`
	HasChildren    *bool                                           `json:"has_children"`
	ID             *string                                         `json:"id"`
	LastEditedTime *string                                         `json:"last_edited_time"`
	Object         *string                                         `json:"object"`
	Type           *string                                         `json:"type"`
}

type AppendBlockChildrenResponse struct {
	ContentType                                 string
	Headers                                     map[string][]string
	StatusCode                                  int64
	AppendBlockChildren200ApplicationJSONObject *AppendBlockChildren200ApplicationJSON
}
