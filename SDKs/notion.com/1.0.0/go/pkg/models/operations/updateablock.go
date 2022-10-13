package operations

type UpdateABlockPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateABlockRequestBodyParagraphTextText struct {
	Content *string `json:"content"`
}

type UpdateABlockRequestBodyParagraphText struct {
	Text *UpdateABlockRequestBodyParagraphTextText `json:"text"`
	Type *string                                   `json:"type"`
}

type UpdateABlockRequestBodyParagraph struct {
	Text []UpdateABlockRequestBodyParagraphText `json:"text"`
}

type UpdateABlockRequestBody struct {
	Paragraph *UpdateABlockRequestBodyParagraph `json:"paragraph"`
}

type UpdateABlockRequest struct {
	PathParams UpdateABlockPathParams
	Request    *UpdateABlockRequestBody `request:"mediaType=application/json"`
}

type UpdateABlock200ApplicationJSONParagraphTextAnnotations struct {
	Bold          *bool   `json:"bold"`
	Code          *bool   `json:"code"`
	Color         *string `json:"color"`
	Italic        *bool   `json:"italic"`
	Strikethrough *bool   `json:"strikethrough"`
	Underline     *bool   `json:"underline"`
}

type UpdateABlock200ApplicationJSONParagraphTextText struct {
	Content *string      `json:"content"`
	Link    *interface{} `json:"link"`
}

type UpdateABlock200ApplicationJSONParagraphText struct {
	Annotations *UpdateABlock200ApplicationJSONParagraphTextAnnotations `json:"annotations"`
	Href        *interface{}                                            `json:"href"`
	PlainText   *string                                                 `json:"plain_text"`
	Text        *UpdateABlock200ApplicationJSONParagraphTextText        `json:"text"`
	Type        *string                                                 `json:"type"`
}

type UpdateABlock200ApplicationJSONParagraph struct {
	Text []UpdateABlock200ApplicationJSONParagraphText `json:"text"`
}

type UpdateABlock200ApplicationJSON struct {
	CreatedTime    *string                                  `json:"created_time"`
	HasChildren    *bool                                    `json:"has_children"`
	ID             *string                                  `json:"id"`
	LastEditedTime *string                                  `json:"last_edited_time"`
	Object         *string                                  `json:"object"`
	Paragraph      *UpdateABlock200ApplicationJSONParagraph `json:"paragraph"`
	Type           *string                                  `json:"type"`
}

type UpdateABlockResponse struct {
	ContentType                          string
	Headers                              map[string][]string
	StatusCode                           int64
	UpdateABlock200ApplicationJSONObject *UpdateABlock200ApplicationJSON
}
