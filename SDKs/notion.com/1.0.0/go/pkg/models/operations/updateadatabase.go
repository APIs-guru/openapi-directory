package operations

type UpdateADatabasePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateADatabaseRequestBodyPropertiesWinePairing struct {
	RichText map[string]interface{} `json:"rich_text,omitempty"`
}

type UpdateADatabaseRequestBodyProperties struct {
	WinePairing *UpdateADatabaseRequestBodyPropertiesWinePairing `json:"Wine Pairing,omitempty"`
}

type UpdateADatabaseRequestBodyTitleText struct {
	Content *string `json:"content,omitempty"`
}

type UpdateADatabaseRequestBodyTitle struct {
	Text *UpdateADatabaseRequestBodyTitleText `json:"text,omitempty"`
}

type UpdateADatabaseRequestBody struct {
	Properties *UpdateADatabaseRequestBodyProperties `json:"properties,omitempty"`
	Title      []UpdateADatabaseRequestBodyTitle     `json:"title,omitempty"`
}

type UpdateADatabaseRequest struct {
	PathParams UpdateADatabasePathParams
	Request    *UpdateADatabaseRequestBody `request:"mediaType=application/json"`
}

type UpdateADatabase200ApplicationJSONParent struct {
	PageID *string `json:"page_id,omitempty"`
	Type   *string `json:"type,omitempty"`
}

type UpdateADatabase200ApplicationJSONPropertiesAuthorMultiSelectOptions struct {
	Color *string `json:"color,omitempty"`
	ID    *string `json:"id,omitempty"`
	Name  *string `json:"name,omitempty"`
}

type UpdateADatabase200ApplicationJSONPropertiesAuthorMultiSelect struct {
	Options []UpdateADatabase200ApplicationJSONPropertiesAuthorMultiSelectOptions `json:"options,omitempty"`
}

type UpdateADatabase200ApplicationJSONPropertiesAuthor struct {
	ID          *string                                                       `json:"id,omitempty"`
	MultiSelect *UpdateADatabase200ApplicationJSONPropertiesAuthorMultiSelect `json:"multi_select,omitempty"`
	Name        *string                                                       `json:"name,omitempty"`
	Type        *string                                                       `json:"type,omitempty"`
}

type UpdateADatabase200ApplicationJSONPropertiesLink struct {
	ID   *string                `json:"id,omitempty"`
	Name *string                `json:"name,omitempty"`
	Type *string                `json:"type,omitempty"`
	URL  map[string]interface{} `json:"url,omitempty"`
}

type UpdateADatabase200ApplicationJSONPropertiesName struct {
	ID    *string                `json:"id,omitempty"`
	Name  *string                `json:"name,omitempty"`
	Title map[string]interface{} `json:"title,omitempty"`
	Type  *string                `json:"type,omitempty"`
}

type UpdateADatabase200ApplicationJSONPropertiesPublisherSelectOptions struct {
	Color *string `json:"color,omitempty"`
	ID    *string `json:"id,omitempty"`
	Name  *string `json:"name,omitempty"`
}

type UpdateADatabase200ApplicationJSONPropertiesPublisherSelect struct {
	Options []UpdateADatabase200ApplicationJSONPropertiesPublisherSelectOptions `json:"options,omitempty"`
}

type UpdateADatabase200ApplicationJSONPropertiesPublisher struct {
	ID     *string                                                     `json:"id,omitempty"`
	Name   *string                                                     `json:"name,omitempty"`
	Select *UpdateADatabase200ApplicationJSONPropertiesPublisherSelect `json:"select,omitempty"`
	Type   *string                                                     `json:"type,omitempty"`
}

type UpdateADatabase200ApplicationJSONPropertiesPublishingReleaseDate struct {
	Date map[string]interface{} `json:"date,omitempty"`
	ID   *string                `json:"id,omitempty"`
	Name *string                `json:"name,omitempty"`
	Type *string                `json:"type,omitempty"`
}

type UpdateADatabase200ApplicationJSONPropertiesRead struct {
	Checkbox map[string]interface{} `json:"checkbox,omitempty"`
	ID       *string                `json:"id,omitempty"`
	Name     *string                `json:"name,omitempty"`
	Type     *string                `json:"type,omitempty"`
}

type UpdateADatabase200ApplicationJSONPropertiesScore5SelectOptions struct {
	Color *string `json:"color,omitempty"`
	ID    *string `json:"id,omitempty"`
	Name  *string `json:"name,omitempty"`
}

type UpdateADatabase200ApplicationJSONPropertiesScore5Select struct {
	Options []UpdateADatabase200ApplicationJSONPropertiesScore5SelectOptions `json:"options,omitempty"`
}

type UpdateADatabase200ApplicationJSONPropertiesScore5 struct {
	ID     *string                                                  `json:"id,omitempty"`
	Name   *string                                                  `json:"name,omitempty"`
	Select *UpdateADatabase200ApplicationJSONPropertiesScore5Select `json:"select,omitempty"`
	Type   *string                                                  `json:"type,omitempty"`
}

type UpdateADatabase200ApplicationJSONPropertiesStatusSelectOptions struct {
	Color *string `json:"color,omitempty"`
	ID    *string `json:"id,omitempty"`
	Name  *string `json:"name,omitempty"`
}

type UpdateADatabase200ApplicationJSONPropertiesStatusSelect struct {
	Options []UpdateADatabase200ApplicationJSONPropertiesStatusSelectOptions `json:"options,omitempty"`
}

type UpdateADatabase200ApplicationJSONPropertiesStatus struct {
	ID     *string                                                  `json:"id,omitempty"`
	Name   *string                                                  `json:"name,omitempty"`
	Select *UpdateADatabase200ApplicationJSONPropertiesStatusSelect `json:"select,omitempty"`
	Type   *string                                                  `json:"type,omitempty"`
}

type UpdateADatabase200ApplicationJSONPropertiesSummary struct {
	ID       *string                `json:"id,omitempty"`
	Name     *string                `json:"name,omitempty"`
	RichText map[string]interface{} `json:"rich_text,omitempty"`
	Type     *string                `json:"type,omitempty"`
}

type UpdateADatabase200ApplicationJSONPropertiesTypeSelectOptions struct {
	Color *string `json:"color,omitempty"`
	ID    *string `json:"id,omitempty"`
	Name  *string `json:"name,omitempty"`
}

type UpdateADatabase200ApplicationJSONPropertiesTypeSelect struct {
	Options []UpdateADatabase200ApplicationJSONPropertiesTypeSelectOptions `json:"options,omitempty"`
}

type UpdateADatabase200ApplicationJSONPropertiesType struct {
	ID     *string                                                `json:"id,omitempty"`
	Name   *string                                                `json:"name,omitempty"`
	Select *UpdateADatabase200ApplicationJSONPropertiesTypeSelect `json:"select,omitempty"`
	Type   *string                                                `json:"type,omitempty"`
}

type UpdateADatabase200ApplicationJSONPropertiesWinePairing struct {
	ID       *string                `json:"id,omitempty"`
	Name     *string                `json:"name,omitempty"`
	RichText map[string]interface{} `json:"rich_text,omitempty"`
	Type     *string                `json:"type,omitempty"`
}

type UpdateADatabase200ApplicationJSONPropertiesDate struct {
	Date map[string]interface{} `json:"date,omitempty"`
	ID   *string                `json:"id,omitempty"`
	Name *string                `json:"name,omitempty"`
	Type *string                `json:"type,omitempty"`
}

type UpdateADatabase200ApplicationJSONProperties struct {
	Author                *UpdateADatabase200ApplicationJSONPropertiesAuthor                `json:"Author,omitempty"`
	Link                  *UpdateADatabase200ApplicationJSONPropertiesLink                  `json:"Link,omitempty"`
	Name                  *UpdateADatabase200ApplicationJSONPropertiesName                  `json:"Name,omitempty"`
	Publisher             *UpdateADatabase200ApplicationJSONPropertiesPublisher             `json:"Publisher,omitempty"`
	PublishingReleaseDate *UpdateADatabase200ApplicationJSONPropertiesPublishingReleaseDate `json:"Publishing/Release Date,omitempty"`
	Read                  *UpdateADatabase200ApplicationJSONPropertiesRead                  `json:"Read,omitempty"`
	Score5                *UpdateADatabase200ApplicationJSONPropertiesScore5                `json:"Score /5,omitempty"`
	Status                *UpdateADatabase200ApplicationJSONPropertiesStatus                `json:"Status,omitempty"`
	Summary               *UpdateADatabase200ApplicationJSONPropertiesSummary               `json:"Summary,omitempty"`
	Type                  *UpdateADatabase200ApplicationJSONPropertiesType                  `json:"Type,omitempty"`
	WinePairing           *UpdateADatabase200ApplicationJSONPropertiesWinePairing           `json:"Wine Pairing,omitempty"`
	Date                  *UpdateADatabase200ApplicationJSONPropertiesDate                  `json:"date,omitempty"`
}

type UpdateADatabase200ApplicationJSONTitleAnnotations struct {
	Bold          *bool   `json:"bold,omitempty"`
	Code          *bool   `json:"code,omitempty"`
	Color         *string `json:"color,omitempty"`
	Italic        *bool   `json:"italic,omitempty"`
	Strikethrough *bool   `json:"strikethrough,omitempty"`
	Underline     *bool   `json:"underline,omitempty"`
}

type UpdateADatabase200ApplicationJSONTitleText struct {
	Content *string      `json:"content,omitempty"`
	Link    *interface{} `json:"link,omitempty"`
}

type UpdateADatabase200ApplicationJSONTitle struct {
	Annotations *UpdateADatabase200ApplicationJSONTitleAnnotations `json:"annotations,omitempty"`
	Href        *interface{}                                       `json:"href,omitempty"`
	PlainText   *string                                            `json:"plain_text,omitempty"`
	Text        *UpdateADatabase200ApplicationJSONTitleText        `json:"text,omitempty"`
	Type        *string                                            `json:"type,omitempty"`
}

type UpdateADatabase200ApplicationJSON struct {
	CreatedTime    *string                                      `json:"created_time,omitempty"`
	ID             *string                                      `json:"id,omitempty"`
	LastEditedTime *string                                      `json:"last_edited_time,omitempty"`
	Object         *string                                      `json:"object,omitempty"`
	Parent         *UpdateADatabase200ApplicationJSONParent     `json:"parent,omitempty"`
	Properties     *UpdateADatabase200ApplicationJSONProperties `json:"properties,omitempty"`
	Title          []UpdateADatabase200ApplicationJSONTitle     `json:"title,omitempty"`
}

type UpdateADatabaseResponse struct {
	ContentType                             string
	Headers                                 map[string][]string
	StatusCode                              int64
	UpdateADatabase200ApplicationJSONObject *UpdateADatabase200ApplicationJSON
}
