package operations

type UpdateADatabasePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateADatabaseRequestBodyPropertiesWinePairing struct {
	RichText map[string]interface{} `json:"rich_text"`
}

type UpdateADatabaseRequestBodyProperties struct {
	WinePairing *UpdateADatabaseRequestBodyPropertiesWinePairing `json:"Wine Pairing"`
}

type UpdateADatabaseRequestBodyTitleText struct {
	Content *string `json:"content"`
}

type UpdateADatabaseRequestBodyTitle struct {
	Text *UpdateADatabaseRequestBodyTitleText `json:"text"`
}

type UpdateADatabaseRequestBody struct {
	Properties *UpdateADatabaseRequestBodyProperties `json:"properties"`
	Title      []UpdateADatabaseRequestBodyTitle     `json:"title"`
}

type UpdateADatabaseRequest struct {
	PathParams UpdateADatabasePathParams
	Request    *UpdateADatabaseRequestBody `request:"mediaType=application/json"`
}

type UpdateADatabase200ApplicationJSONParent struct {
	PageID *string `json:"page_id"`
	Type   *string `json:"type"`
}

type UpdateADatabase200ApplicationJSONPropertiesAuthorMultiSelectOptions struct {
	Color *string `json:"color"`
	ID    *string `json:"id"`
	Name  *string `json:"name"`
}

type UpdateADatabase200ApplicationJSONPropertiesAuthorMultiSelect struct {
	Options []UpdateADatabase200ApplicationJSONPropertiesAuthorMultiSelectOptions `json:"options"`
}

type UpdateADatabase200ApplicationJSONPropertiesAuthor struct {
	ID          *string                                                       `json:"id"`
	MultiSelect *UpdateADatabase200ApplicationJSONPropertiesAuthorMultiSelect `json:"multi_select"`
	Name        *string                                                       `json:"name"`
	Type        *string                                                       `json:"type"`
}

type UpdateADatabase200ApplicationJSONPropertiesLink struct {
	ID   *string                `json:"id"`
	Name *string                `json:"name"`
	Type *string                `json:"type"`
	URL  map[string]interface{} `json:"url"`
}

type UpdateADatabase200ApplicationJSONPropertiesName struct {
	ID    *string                `json:"id"`
	Name  *string                `json:"name"`
	Title map[string]interface{} `json:"title"`
	Type  *string                `json:"type"`
}

type UpdateADatabase200ApplicationJSONPropertiesPublisherSelectOptions struct {
	Color *string `json:"color"`
	ID    *string `json:"id"`
	Name  *string `json:"name"`
}

type UpdateADatabase200ApplicationJSONPropertiesPublisherSelect struct {
	Options []UpdateADatabase200ApplicationJSONPropertiesPublisherSelectOptions `json:"options"`
}

type UpdateADatabase200ApplicationJSONPropertiesPublisher struct {
	ID     *string                                                     `json:"id"`
	Name   *string                                                     `json:"name"`
	Select *UpdateADatabase200ApplicationJSONPropertiesPublisherSelect `json:"select"`
	Type   *string                                                     `json:"type"`
}

type UpdateADatabase200ApplicationJSONPropertiesPublishingReleaseDate struct {
	Date map[string]interface{} `json:"date"`
	ID   *string                `json:"id"`
	Name *string                `json:"name"`
	Type *string                `json:"type"`
}

type UpdateADatabase200ApplicationJSONPropertiesRead struct {
	Checkbox map[string]interface{} `json:"checkbox"`
	ID       *string                `json:"id"`
	Name     *string                `json:"name"`
	Type     *string                `json:"type"`
}

type UpdateADatabase200ApplicationJSONPropertiesScore5SelectOptions struct {
	Color *string `json:"color"`
	ID    *string `json:"id"`
	Name  *string `json:"name"`
}

type UpdateADatabase200ApplicationJSONPropertiesScore5Select struct {
	Options []UpdateADatabase200ApplicationJSONPropertiesScore5SelectOptions `json:"options"`
}

type UpdateADatabase200ApplicationJSONPropertiesScore5 struct {
	ID     *string                                                  `json:"id"`
	Name   *string                                                  `json:"name"`
	Select *UpdateADatabase200ApplicationJSONPropertiesScore5Select `json:"select"`
	Type   *string                                                  `json:"type"`
}

type UpdateADatabase200ApplicationJSONPropertiesStatusSelectOptions struct {
	Color *string `json:"color"`
	ID    *string `json:"id"`
	Name  *string `json:"name"`
}

type UpdateADatabase200ApplicationJSONPropertiesStatusSelect struct {
	Options []UpdateADatabase200ApplicationJSONPropertiesStatusSelectOptions `json:"options"`
}

type UpdateADatabase200ApplicationJSONPropertiesStatus struct {
	ID     *string                                                  `json:"id"`
	Name   *string                                                  `json:"name"`
	Select *UpdateADatabase200ApplicationJSONPropertiesStatusSelect `json:"select"`
	Type   *string                                                  `json:"type"`
}

type UpdateADatabase200ApplicationJSONPropertiesSummary struct {
	ID       *string                `json:"id"`
	Name     *string                `json:"name"`
	RichText map[string]interface{} `json:"rich_text"`
	Type     *string                `json:"type"`
}

type UpdateADatabase200ApplicationJSONPropertiesTypeSelectOptions struct {
	Color *string `json:"color"`
	ID    *string `json:"id"`
	Name  *string `json:"name"`
}

type UpdateADatabase200ApplicationJSONPropertiesTypeSelect struct {
	Options []UpdateADatabase200ApplicationJSONPropertiesTypeSelectOptions `json:"options"`
}

type UpdateADatabase200ApplicationJSONPropertiesType struct {
	ID     *string                                                `json:"id"`
	Name   *string                                                `json:"name"`
	Select *UpdateADatabase200ApplicationJSONPropertiesTypeSelect `json:"select"`
	Type   *string                                                `json:"type"`
}

type UpdateADatabase200ApplicationJSONPropertiesWinePairing struct {
	ID       *string                `json:"id"`
	Name     *string                `json:"name"`
	RichText map[string]interface{} `json:"rich_text"`
	Type     *string                `json:"type"`
}

type UpdateADatabase200ApplicationJSONPropertiesDate struct {
	Date map[string]interface{} `json:"date"`
	ID   *string                `json:"id"`
	Name *string                `json:"name"`
	Type *string                `json:"type"`
}

type UpdateADatabase200ApplicationJSONProperties struct {
	Author                *UpdateADatabase200ApplicationJSONPropertiesAuthor                `json:"Author"`
	Link                  *UpdateADatabase200ApplicationJSONPropertiesLink                  `json:"Link"`
	Name                  *UpdateADatabase200ApplicationJSONPropertiesName                  `json:"Name"`
	Publisher             *UpdateADatabase200ApplicationJSONPropertiesPublisher             `json:"Publisher"`
	PublishingReleaseDate *UpdateADatabase200ApplicationJSONPropertiesPublishingReleaseDate `json:"Publishing/Release Date"`
	Read                  *UpdateADatabase200ApplicationJSONPropertiesRead                  `json:"Read"`
	Score5                *UpdateADatabase200ApplicationJSONPropertiesScore5                `json:"Score /5"`
	Status                *UpdateADatabase200ApplicationJSONPropertiesStatus                `json:"Status"`
	Summary               *UpdateADatabase200ApplicationJSONPropertiesSummary               `json:"Summary"`
	Type                  *UpdateADatabase200ApplicationJSONPropertiesType                  `json:"Type"`
	WinePairing           *UpdateADatabase200ApplicationJSONPropertiesWinePairing           `json:"Wine Pairing"`
	Date                  *UpdateADatabase200ApplicationJSONPropertiesDate                  `json:"date"`
}

type UpdateADatabase200ApplicationJSONTitleAnnotations struct {
	Bold          *bool   `json:"bold"`
	Code          *bool   `json:"code"`
	Color         *string `json:"color"`
	Italic        *bool   `json:"italic"`
	Strikethrough *bool   `json:"strikethrough"`
	Underline     *bool   `json:"underline"`
}

type UpdateADatabase200ApplicationJSONTitleText struct {
	Content *string      `json:"content"`
	Link    *interface{} `json:"link"`
}

type UpdateADatabase200ApplicationJSONTitle struct {
	Annotations *UpdateADatabase200ApplicationJSONTitleAnnotations `json:"annotations"`
	Href        *interface{}                                       `json:"href"`
	PlainText   *string                                            `json:"plain_text"`
	Text        *UpdateADatabase200ApplicationJSONTitleText        `json:"text"`
	Type        *string                                            `json:"type"`
}

type UpdateADatabase200ApplicationJSON struct {
	CreatedTime    *string                                      `json:"created_time"`
	ID             *string                                      `json:"id"`
	LastEditedTime *string                                      `json:"last_edited_time"`
	Object         *string                                      `json:"object"`
	Parent         *UpdateADatabase200ApplicationJSONParent     `json:"parent"`
	Properties     *UpdateADatabase200ApplicationJSONProperties `json:"properties"`
	Title          []UpdateADatabase200ApplicationJSONTitle     `json:"title"`
}

type UpdateADatabaseResponse struct {
	ContentType                             string
	Headers                                 map[string][]string
	StatusCode                              int64
	UpdateADatabase200ApplicationJSONObject *UpdateADatabase200ApplicationJSON
}
