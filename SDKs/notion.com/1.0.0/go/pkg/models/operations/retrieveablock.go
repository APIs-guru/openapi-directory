package operations

type RetrieveABlockPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type RetrieveABlockRequest struct {
	PathParams RetrieveABlockPathParams
}

type RetrieveABlock200ApplicationJSONParagraphTextAnnotations struct {
	Bold          *bool   `json:"bold"`
	Code          *bool   `json:"code"`
	Color         *string `json:"color"`
	Italic        *bool   `json:"italic"`
	Strikethrough *bool   `json:"strikethrough"`
	Underline     *bool   `json:"underline"`
}

type RetrieveABlock200ApplicationJSONParagraphTextText struct {
	Content *string      `json:"content"`
	Link    *interface{} `json:"link"`
}

type RetrieveABlock200ApplicationJSONParagraphText struct {
	Annotations *RetrieveABlock200ApplicationJSONParagraphTextAnnotations `json:"annotations"`
	Href        *interface{}                                              `json:"href"`
	PlainText   *string                                                   `json:"plain_text"`
	Text        *RetrieveABlock200ApplicationJSONParagraphTextText        `json:"text"`
	Type        *string                                                   `json:"type"`
}

type RetrieveABlock200ApplicationJSONParagraph struct {
	Text []RetrieveABlock200ApplicationJSONParagraphText `json:"text"`
}

type RetrieveABlock200ApplicationJSON struct {
	CreatedTime    *string                                    `json:"created_time"`
	HasChildren    *bool                                      `json:"has_children"`
	ID             *string                                    `json:"id"`
	LastEditedTime *string                                    `json:"last_edited_time"`
	Object         *string                                    `json:"object"`
	Paragraph      *RetrieveABlock200ApplicationJSONParagraph `json:"paragraph"`
	Type           *string                                    `json:"type"`
}

type RetrieveABlockResponse struct {
	ContentType                            string
	Headers                                map[string][]string
	StatusCode                             int64
	RetrieveABlock200ApplicationJSONObject *RetrieveABlock200ApplicationJSON
}
