package operations

type UpdatePagePropertiesPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdatePagePropertiesRequestBodyPropertiesStatusSelect struct {
	Name *string `json:"name"`
}

type UpdatePagePropertiesRequestBodyPropertiesStatus struct {
	Select *UpdatePagePropertiesRequestBodyPropertiesStatusSelect `json:"select"`
}

type UpdatePagePropertiesRequestBodyProperties struct {
	Status *UpdatePagePropertiesRequestBodyPropertiesStatus `json:"Status"`
}

type UpdatePagePropertiesRequestBody struct {
	Properties *UpdatePagePropertiesRequestBodyProperties `json:"properties"`
}

type UpdatePagePropertiesRequest struct {
	PathParams UpdatePagePropertiesPathParams
	Request    *UpdatePagePropertiesRequestBody `request:"mediaType=application/json"`
}

type UpdatePageProperties200ApplicationJSONParent struct {
	DatabaseID *string `json:"database_id"`
	Type       *string `json:"type"`
}

type UpdatePageProperties200ApplicationJSONPropertiesAuthorMultiSelect struct {
	Color *string `json:"color"`
	ID    *string `json:"id"`
	Name  *string `json:"name"`
}

type UpdatePageProperties200ApplicationJSONPropertiesAuthor struct {
	ID          *string                                                             `json:"id"`
	MultiSelect []UpdatePageProperties200ApplicationJSONPropertiesAuthorMultiSelect `json:"multi_select"`
	Type        *string                                                             `json:"type"`
}

type UpdatePageProperties200ApplicationJSONPropertiesLink struct {
	ID   *string `json:"id"`
	Type *string `json:"type"`
	URL  *string `json:"url"`
}

type UpdatePageProperties200ApplicationJSONPropertiesNameTitleAnnotations struct {
	Bold          *bool   `json:"bold"`
	Code          *bool   `json:"code"`
	Color         *string `json:"color"`
	Italic        *bool   `json:"italic"`
	Strikethrough *bool   `json:"strikethrough"`
	Underline     *bool   `json:"underline"`
}

type UpdatePageProperties200ApplicationJSONPropertiesNameTitleText struct {
	Content *string      `json:"content"`
	Link    *interface{} `json:"link"`
}

type UpdatePageProperties200ApplicationJSONPropertiesNameTitle struct {
	Annotations *UpdatePageProperties200ApplicationJSONPropertiesNameTitleAnnotations `json:"annotations"`
	Href        *interface{}                                                          `json:"href"`
	PlainText   *string                                                               `json:"plain_text"`
	Text        *UpdatePageProperties200ApplicationJSONPropertiesNameTitleText        `json:"text"`
	Type        *string                                                               `json:"type"`
}

type UpdatePageProperties200ApplicationJSONPropertiesName struct {
	ID    *string                                                     `json:"id"`
	Title []UpdatePageProperties200ApplicationJSONPropertiesNameTitle `json:"title"`
	Type  *string                                                     `json:"type"`
}

type UpdatePageProperties200ApplicationJSONPropertiesPublisherSelect struct {
	Color *string `json:"color"`
	ID    *string `json:"id"`
	Name  *string `json:"name"`
}

type UpdatePageProperties200ApplicationJSONPropertiesPublisher struct {
	ID     *string                                                          `json:"id"`
	Select *UpdatePageProperties200ApplicationJSONPropertiesPublisherSelect `json:"select"`
	Type   *string                                                          `json:"type"`
}

type UpdatePageProperties200ApplicationJSONPropertiesPublishingReleaseDateDate struct {
	End   *interface{} `json:"end"`
	Start *string      `json:"start"`
}

type UpdatePageProperties200ApplicationJSONPropertiesPublishingReleaseDate struct {
	Date *UpdatePageProperties200ApplicationJSONPropertiesPublishingReleaseDateDate `json:"date"`
	ID   *string                                                                    `json:"id"`
	Type *string                                                                    `json:"type"`
}

type UpdatePageProperties200ApplicationJSONPropertiesRead struct {
	Checkbox *bool   `json:"checkbox"`
	ID       *string `json:"id"`
	Type     *string `json:"type"`
}

type UpdatePageProperties200ApplicationJSONPropertiesScore5Select struct {
	Color *string `json:"color"`
	ID    *string `json:"id"`
	Name  *string `json:"name"`
}

type UpdatePageProperties200ApplicationJSONPropertiesScore5 struct {
	ID     *string                                                       `json:"id"`
	Select *UpdatePageProperties200ApplicationJSONPropertiesScore5Select `json:"select"`
	Type   *string                                                       `json:"type"`
}

type UpdatePageProperties200ApplicationJSONPropertiesStatusSelect struct {
	Color *string `json:"color"`
	ID    *string `json:"id"`
	Name  *string `json:"name"`
}

type UpdatePageProperties200ApplicationJSONPropertiesStatus struct {
	ID     *string                                                       `json:"id"`
	Select *UpdatePageProperties200ApplicationJSONPropertiesStatusSelect `json:"select"`
	Type   *string                                                       `json:"type"`
}

type UpdatePageProperties200ApplicationJSONPropertiesSummaryRichTextAnnotations struct {
	Bold          *bool   `json:"bold"`
	Code          *bool   `json:"code"`
	Color         *string `json:"color"`
	Italic        *bool   `json:"italic"`
	Strikethrough *bool   `json:"strikethrough"`
	Underline     *bool   `json:"underline"`
}

type UpdatePageProperties200ApplicationJSONPropertiesSummaryRichTextText struct {
	Content *string      `json:"content"`
	Link    *interface{} `json:"link"`
}

type UpdatePageProperties200ApplicationJSONPropertiesSummaryRichText struct {
	Annotations *UpdatePageProperties200ApplicationJSONPropertiesSummaryRichTextAnnotations `json:"annotations"`
	Href        *interface{}                                                                `json:"href"`
	PlainText   *string                                                                     `json:"plain_text"`
	Text        *UpdatePageProperties200ApplicationJSONPropertiesSummaryRichTextText        `json:"text"`
	Type        *string                                                                     `json:"type"`
}

type UpdatePageProperties200ApplicationJSONPropertiesSummary struct {
	ID       *string                                                           `json:"id"`
	RichText []UpdatePageProperties200ApplicationJSONPropertiesSummaryRichText `json:"rich_text"`
	Type     *string                                                           `json:"type"`
}

type UpdatePageProperties200ApplicationJSONPropertiesTypeSelect struct {
	Color *string `json:"color"`
	ID    *string `json:"id"`
	Name  *string `json:"name"`
}

type UpdatePageProperties200ApplicationJSONPropertiesType struct {
	ID     *string                                                     `json:"id"`
	Select *UpdatePageProperties200ApplicationJSONPropertiesTypeSelect `json:"select"`
	Type   *string                                                     `json:"type"`
}

type UpdatePageProperties200ApplicationJSONProperties struct {
	Author                *UpdatePageProperties200ApplicationJSONPropertiesAuthor                `json:"Author"`
	Link                  *UpdatePageProperties200ApplicationJSONPropertiesLink                  `json:"Link"`
	Name                  *UpdatePageProperties200ApplicationJSONPropertiesName                  `json:"Name"`
	Publisher             *UpdatePageProperties200ApplicationJSONPropertiesPublisher             `json:"Publisher"`
	PublishingReleaseDate *UpdatePageProperties200ApplicationJSONPropertiesPublishingReleaseDate `json:"Publishing/Release Date"`
	Read                  *UpdatePageProperties200ApplicationJSONPropertiesRead                  `json:"Read"`
	Score5                *UpdatePageProperties200ApplicationJSONPropertiesScore5                `json:"Score /5"`
	Status                *UpdatePageProperties200ApplicationJSONPropertiesStatus                `json:"Status"`
	Summary               *UpdatePageProperties200ApplicationJSONPropertiesSummary               `json:"Summary"`
	Type                  *UpdatePageProperties200ApplicationJSONPropertiesType                  `json:"Type"`
}

type UpdatePageProperties200ApplicationJSON struct {
	Archived       *bool                                             `json:"archived"`
	CreatedTime    *string                                           `json:"created_time"`
	ID             *string                                           `json:"id"`
	LastEditedTime *string                                           `json:"last_edited_time"`
	Object         *string                                           `json:"object"`
	Parent         *UpdatePageProperties200ApplicationJSONParent     `json:"parent"`
	Properties     *UpdatePageProperties200ApplicationJSONProperties `json:"properties"`
}

type UpdatePagePropertiesResponse struct {
	ContentType                                  string
	Headers                                      map[string][]string
	StatusCode                                   int64
	UpdatePageProperties200ApplicationJSONObject *UpdatePageProperties200ApplicationJSON
}
