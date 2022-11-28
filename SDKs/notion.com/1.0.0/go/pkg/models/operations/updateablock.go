package operations

type UpdateABlockPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateABlockRequestBodyParagraphTextText struct {
	Content *string `json:"content,omitempty"`
}

type UpdateABlockRequestBodyParagraphText struct {
	Text *UpdateABlockRequestBodyParagraphTextText `json:"text,omitempty"`
	Type *string                                   `json:"type,omitempty"`
}

type UpdateABlockRequestBodyParagraph struct {
	Text []UpdateABlockRequestBodyParagraphText `json:"text,omitempty"`
}

type UpdateABlockRequestBody struct {
	Paragraph *UpdateABlockRequestBodyParagraph `json:"paragraph,omitempty"`
}

type UpdateABlock200ApplicationJSONParagraphTextAnnotations struct {
	Bold          *bool   `json:"bold,omitempty"`
	Code          *bool   `json:"code,omitempty"`
	Color         *string `json:"color,omitempty"`
	Italic        *bool   `json:"italic,omitempty"`
	Strikethrough *bool   `json:"strikethrough,omitempty"`
	Underline     *bool   `json:"underline,omitempty"`
}

type UpdateABlock200ApplicationJSONParagraphTextText struct {
	Content *string      `json:"content,omitempty"`
	Link    *interface{} `json:"link,omitempty"`
}

type UpdateABlock200ApplicationJSONParagraphText struct {
	Annotations *UpdateABlock200ApplicationJSONParagraphTextAnnotations `json:"annotations,omitempty"`
	Href        *interface{}                                            `json:"href,omitempty"`
	PlainText   *string                                                 `json:"plain_text,omitempty"`
	Text        *UpdateABlock200ApplicationJSONParagraphTextText        `json:"text,omitempty"`
	Type        *string                                                 `json:"type,omitempty"`
}

type UpdateABlock200ApplicationJSONParagraph struct {
	Text []UpdateABlock200ApplicationJSONParagraphText `json:"text,omitempty"`
}

type UpdateABlock200ApplicationJSON struct {
	CreatedTime    *string                                  `json:"created_time,omitempty"`
	HasChildren    *bool                                    `json:"has_children,omitempty"`
	ID             *string                                  `json:"id,omitempty"`
	LastEditedTime *string                                  `json:"last_edited_time,omitempty"`
	Object         *string                                  `json:"object,omitempty"`
	Paragraph      *UpdateABlock200ApplicationJSONParagraph `json:"paragraph,omitempty"`
	Type           *string                                  `json:"type,omitempty"`
}

type UpdateABlockRequest struct {
	PathParams UpdateABlockPathParams
	Request    *UpdateABlockRequestBody `request:"mediaType=application/json"`
}

type UpdateABlockResponse struct {
	ContentType                          string
	Headers                              map[string][]string
	StatusCode                           int64
	UpdateABlock200ApplicationJSONObject *UpdateABlock200ApplicationJSON
}
