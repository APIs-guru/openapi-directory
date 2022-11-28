package operations

type RetrieveABlockPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type RetrieveABlock200ApplicationJSONParagraphTextAnnotations struct {
	Bold          *bool   `json:"bold,omitempty"`
	Code          *bool   `json:"code,omitempty"`
	Color         *string `json:"color,omitempty"`
	Italic        *bool   `json:"italic,omitempty"`
	Strikethrough *bool   `json:"strikethrough,omitempty"`
	Underline     *bool   `json:"underline,omitempty"`
}

type RetrieveABlock200ApplicationJSONParagraphTextText struct {
	Content *string      `json:"content,omitempty"`
	Link    *interface{} `json:"link,omitempty"`
}

type RetrieveABlock200ApplicationJSONParagraphText struct {
	Annotations *RetrieveABlock200ApplicationJSONParagraphTextAnnotations `json:"annotations,omitempty"`
	Href        *interface{}                                              `json:"href,omitempty"`
	PlainText   *string                                                   `json:"plain_text,omitempty"`
	Text        *RetrieveABlock200ApplicationJSONParagraphTextText        `json:"text,omitempty"`
	Type        *string                                                   `json:"type,omitempty"`
}

type RetrieveABlock200ApplicationJSONParagraph struct {
	Text []RetrieveABlock200ApplicationJSONParagraphText `json:"text,omitempty"`
}

type RetrieveABlock200ApplicationJSON struct {
	CreatedTime    *string                                    `json:"created_time,omitempty"`
	HasChildren    *bool                                      `json:"has_children,omitempty"`
	ID             *string                                    `json:"id,omitempty"`
	LastEditedTime *string                                    `json:"last_edited_time,omitempty"`
	Object         *string                                    `json:"object,omitempty"`
	Paragraph      *RetrieveABlock200ApplicationJSONParagraph `json:"paragraph,omitempty"`
	Type           *string                                    `json:"type,omitempty"`
}

type RetrieveABlockRequest struct {
	PathParams RetrieveABlockPathParams
}

type RetrieveABlockResponse struct {
	ContentType                            string
	Headers                                map[string][]string
	StatusCode                             int64
	RetrieveABlock200ApplicationJSONObject *RetrieveABlock200ApplicationJSON
}
