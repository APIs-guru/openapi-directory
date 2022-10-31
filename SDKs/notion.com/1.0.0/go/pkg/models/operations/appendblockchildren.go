package operations



type AppendBlockChildrenPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type AppendBlockChildrenRequestBodyChildrenHeading2TextText struct {
    Content *string `json:"content,omitempty"`
    
}

type AppendBlockChildrenRequestBodyChildrenHeading2Text struct {
    Text *AppendBlockChildrenRequestBodyChildrenHeading2TextText `json:"text,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type AppendBlockChildrenRequestBodyChildrenHeading2 struct {
    Text []AppendBlockChildrenRequestBodyChildrenHeading2Text `json:"text,omitempty"`
    
}

type AppendBlockChildrenRequestBodyChildren struct {
    Heading2 *AppendBlockChildrenRequestBodyChildrenHeading2 `json:"heading_2,omitempty"`
    Object *string `json:"object,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type AppendBlockChildrenRequestBody struct {
    Children []AppendBlockChildrenRequestBodyChildren `json:"children,omitempty"`
    
}

type AppendBlockChildrenRequest struct {
    PathParams AppendBlockChildrenPathParams 
    Request *AppendBlockChildrenRequestBody `request:"mediaType=application/json"`
    
}

type AppendBlockChildren200ApplicationJSONChildPage struct {
    Title *string `json:"title,omitempty"`
    
}

type AppendBlockChildren200ApplicationJSON struct {
    ChildPage *AppendBlockChildren200ApplicationJSONChildPage `json:"child_page,omitempty"`
    CreatedTime *string `json:"created_time,omitempty"`
    HasChildren *bool `json:"has_children,omitempty"`
    ID *string `json:"id,omitempty"`
    LastEditedTime *string `json:"last_edited_time,omitempty"`
    Object *string `json:"object,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type AppendBlockChildrenResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    AppendBlockChildren200ApplicationJSONObject *AppendBlockChildren200ApplicationJSON 
    
}

