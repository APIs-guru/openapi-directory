package operations

type RetrieveADatabasePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type RetrieveADatabaseRequest struct {
	PathParams RetrieveADatabasePathParams
}

type RetrieveADatabase200ApplicationJSONPropertiesAuthorMultiSelectOptions struct {
	Color *string `json:"color"`
	ID    *string `json:"id"`
	Name  *string `json:"name"`
}

type RetrieveADatabase200ApplicationJSONPropertiesAuthorMultiSelect struct {
	Options []RetrieveADatabase200ApplicationJSONPropertiesAuthorMultiSelectOptions `json:"options"`
}

type RetrieveADatabase200ApplicationJSONPropertiesAuthor struct {
	ID          *string                                                         `json:"id"`
	MultiSelect *RetrieveADatabase200ApplicationJSONPropertiesAuthorMultiSelect `json:"multi_select"`
	Type        *string                                                         `json:"type"`
}

type RetrieveADatabase200ApplicationJSONPropertiesLink struct {
	ID   *string                `json:"id"`
	Type *string                `json:"type"`
	URL  map[string]interface{} `json:"url"`
}

type RetrieveADatabase200ApplicationJSONPropertiesName struct {
	ID    *string                `json:"id"`
	Title map[string]interface{} `json:"title"`
	Type  *string                `json:"type"`
}

type RetrieveADatabase200ApplicationJSONPropertiesPublisherSelectOptions struct {
	Color *string `json:"color"`
	ID    *string `json:"id"`
	Name  *string `json:"name"`
}

type RetrieveADatabase200ApplicationJSONPropertiesPublisherSelect struct {
	Options []RetrieveADatabase200ApplicationJSONPropertiesPublisherSelectOptions `json:"options"`
}

type RetrieveADatabase200ApplicationJSONPropertiesPublisher struct {
	ID     *string                                                       `json:"id"`
	Select *RetrieveADatabase200ApplicationJSONPropertiesPublisherSelect `json:"select"`
	Type   *string                                                       `json:"type"`
}

type RetrieveADatabase200ApplicationJSONPropertiesPublishingReleaseDate struct {
	Date map[string]interface{} `json:"date"`
	ID   *string                `json:"id"`
	Type *string                `json:"type"`
}

type RetrieveADatabase200ApplicationJSONPropertiesRead struct {
	Checkbox map[string]interface{} `json:"checkbox"`
	ID       *string                `json:"id"`
	Type     *string                `json:"type"`
}

type RetrieveADatabase200ApplicationJSONPropertiesScore5SelectOptions struct {
	Color *string `json:"color"`
	ID    *string `json:"id"`
	Name  *string `json:"name"`
}

type RetrieveADatabase200ApplicationJSONPropertiesScore5Select struct {
	Options []RetrieveADatabase200ApplicationJSONPropertiesScore5SelectOptions `json:"options"`
}

type RetrieveADatabase200ApplicationJSONPropertiesScore5 struct {
	ID     *string                                                    `json:"id"`
	Select *RetrieveADatabase200ApplicationJSONPropertiesScore5Select `json:"select"`
	Type   *string                                                    `json:"type"`
}

type RetrieveADatabase200ApplicationJSONPropertiesStatusSelectOptions struct {
	Color *string `json:"color"`
	ID    *string `json:"id"`
	Name  *string `json:"name"`
}

type RetrieveADatabase200ApplicationJSONPropertiesStatusSelect struct {
	Options []RetrieveADatabase200ApplicationJSONPropertiesStatusSelectOptions `json:"options"`
}

type RetrieveADatabase200ApplicationJSONPropertiesStatus struct {
	ID     *string                                                    `json:"id"`
	Select *RetrieveADatabase200ApplicationJSONPropertiesStatusSelect `json:"select"`
	Type   *string                                                    `json:"type"`
}

type RetrieveADatabase200ApplicationJSONPropertiesSummary struct {
	ID   *string                `json:"id"`
	Text map[string]interface{} `json:"text"`
	Type *string                `json:"type"`
}

type RetrieveADatabase200ApplicationJSONPropertiesTypeSelectOptions struct {
	Color *string `json:"color"`
	ID    *string `json:"id"`
	Name  *string `json:"name"`
}

type RetrieveADatabase200ApplicationJSONPropertiesTypeSelect struct {
	Options []RetrieveADatabase200ApplicationJSONPropertiesTypeSelectOptions `json:"options"`
}

type RetrieveADatabase200ApplicationJSONPropertiesType struct {
	ID     *string                                                  `json:"id"`
	Select *RetrieveADatabase200ApplicationJSONPropertiesTypeSelect `json:"select"`
	Type   *string                                                  `json:"type"`
}

type RetrieveADatabase200ApplicationJSONProperties struct {
	Author                *RetrieveADatabase200ApplicationJSONPropertiesAuthor                `json:"Author"`
	Link                  *RetrieveADatabase200ApplicationJSONPropertiesLink                  `json:"Link"`
	Name                  *RetrieveADatabase200ApplicationJSONPropertiesName                  `json:"Name"`
	Publisher             *RetrieveADatabase200ApplicationJSONPropertiesPublisher             `json:"Publisher"`
	PublishingReleaseDate *RetrieveADatabase200ApplicationJSONPropertiesPublishingReleaseDate `json:"Publishing/Release Date"`
	Read                  *RetrieveADatabase200ApplicationJSONPropertiesRead                  `json:"Read"`
	Score5                *RetrieveADatabase200ApplicationJSONPropertiesScore5                `json:"Score /5"`
	Status                *RetrieveADatabase200ApplicationJSONPropertiesStatus                `json:"Status"`
	Summary               *RetrieveADatabase200ApplicationJSONPropertiesSummary               `json:"Summary"`
	Type                  *RetrieveADatabase200ApplicationJSONPropertiesType                  `json:"Type"`
}

type RetrieveADatabase200ApplicationJSONTitleAnnotations struct {
	Bold          *bool   `json:"bold"`
	Code          *bool   `json:"code"`
	Color         *string `json:"color"`
	Italic        *bool   `json:"italic"`
	Strikethrough *bool   `json:"strikethrough"`
	Underline     *bool   `json:"underline"`
}

type RetrieveADatabase200ApplicationJSONTitleText struct {
	Content *string      `json:"content"`
	Link    *interface{} `json:"link"`
}

type RetrieveADatabase200ApplicationJSONTitle struct {
	Annotations *RetrieveADatabase200ApplicationJSONTitleAnnotations `json:"annotations"`
	Href        *interface{}                                         `json:"href"`
	PlainText   *string                                              `json:"plain_text"`
	Text        *RetrieveADatabase200ApplicationJSONTitleText        `json:"text"`
	Type        *string                                              `json:"type"`
}

type RetrieveADatabase200ApplicationJSON struct {
	CreatedTime    *string                                        `json:"created_time"`
	ID             *string                                        `json:"id"`
	LastEditedTime *string                                        `json:"last_edited_time"`
	Object         *string                                        `json:"object"`
	Properties     *RetrieveADatabase200ApplicationJSONProperties `json:"properties"`
	Title          []RetrieveADatabase200ApplicationJSONTitle     `json:"title"`
}

type RetrieveADatabaseResponse struct {
	ContentType                               string
	Headers                                   map[string][]string
	StatusCode                                int64
	RetrieveADatabase200ApplicationJSONObject *RetrieveADatabase200ApplicationJSON
}
