package operations

type QueryADatabasePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type QueryADatabaseRequestBodyFilterOrSelect struct {
	Equals *string `json:"equals"`
}

type QueryADatabaseRequestBodyFilterOr struct {
	Property *string                                  `json:"property"`
	Select   *QueryADatabaseRequestBodyFilterOrSelect `json:"select"`
}

type QueryADatabaseRequestBodyFilter struct {
	Or []QueryADatabaseRequestBodyFilterOr `json:"or"`
}

type QueryADatabaseRequestBodySorts struct {
	Direction *string `json:"direction"`
	Property  *string `json:"property"`
}

type QueryADatabaseRequestBody struct {
	Filter *QueryADatabaseRequestBodyFilter `json:"filter"`
	Sorts  []QueryADatabaseRequestBodySorts `json:"sorts"`
}

type QueryADatabaseRequest struct {
	PathParams QueryADatabasePathParams
	Request    *QueryADatabaseRequestBody `request:"mediaType=application/json"`
}

type QueryADatabase200ApplicationJSONResultsParent struct {
	DatabaseID *string `json:"database_id"`
	Type       *string `json:"type"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesAuthorMultiSelect struct {
	Color *string `json:"color"`
	ID    *string `json:"id"`
	Name  *string `json:"name"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesAuthor struct {
	ID          *string                                                              `json:"id"`
	MultiSelect []QueryADatabase200ApplicationJSONResultsPropertiesAuthorMultiSelect `json:"multi_select"`
	Type        *string                                                              `json:"type"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesLink struct {
	ID   *string `json:"id"`
	Type *string `json:"type"`
	URL  *string `json:"url"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesNameTitleAnnotations struct {
	Bold          *bool   `json:"bold"`
	Code          *bool   `json:"code"`
	Color         *string `json:"color"`
	Italic        *bool   `json:"italic"`
	Strikethrough *bool   `json:"strikethrough"`
	Underline     *bool   `json:"underline"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesNameTitleText struct {
	Content *string      `json:"content"`
	Link    *interface{} `json:"link"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesNameTitle struct {
	Annotations *QueryADatabase200ApplicationJSONResultsPropertiesNameTitleAnnotations `json:"annotations"`
	Href        *interface{}                                                           `json:"href"`
	PlainText   *string                                                                `json:"plain_text"`
	Text        *QueryADatabase200ApplicationJSONResultsPropertiesNameTitleText        `json:"text"`
	Type        *string                                                                `json:"type"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesName struct {
	ID    *string                                                      `json:"id"`
	Title []QueryADatabase200ApplicationJSONResultsPropertiesNameTitle `json:"title"`
	Type  *string                                                      `json:"type"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesPublisherSelect struct {
	Color *string `json:"color"`
	ID    *string `json:"id"`
	Name  *string `json:"name"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesPublisher struct {
	ID     *string                                                           `json:"id"`
	Select *QueryADatabase200ApplicationJSONResultsPropertiesPublisherSelect `json:"select"`
	Type   *string                                                           `json:"type"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesPublishingReleaseDateDate struct {
	End   *interface{} `json:"end"`
	Start *string      `json:"start"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesPublishingReleaseDate struct {
	Date *QueryADatabase200ApplicationJSONResultsPropertiesPublishingReleaseDateDate `json:"date"`
	ID   *string                                                                     `json:"id"`
	Type *string                                                                     `json:"type"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesRead struct {
	Checkbox *bool   `json:"checkbox"`
	ID       *string `json:"id"`
	Type     *string `json:"type"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesScore5Select struct {
	Color *string `json:"color"`
	ID    *string `json:"id"`
	Name  *string `json:"name"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesScore5 struct {
	ID     *string                                                        `json:"id"`
	Select *QueryADatabase200ApplicationJSONResultsPropertiesScore5Select `json:"select"`
	Type   *string                                                        `json:"type"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesStatusSelect struct {
	Color *string `json:"color"`
	ID    *string `json:"id"`
	Name  *string `json:"name"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesStatus struct {
	ID     *string                                                        `json:"id"`
	Select *QueryADatabase200ApplicationJSONResultsPropertiesStatusSelect `json:"select"`
	Type   *string                                                        `json:"type"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesSummary struct {
	ID   *string       `json:"id"`
	Text []interface{} `json:"text"`
	Type *string       `json:"type"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesTypeSelect struct {
	Color *string `json:"color"`
	ID    *string `json:"id"`
	Name  *string `json:"name"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesType struct {
	ID     *string                                                      `json:"id"`
	Select *QueryADatabase200ApplicationJSONResultsPropertiesTypeSelect `json:"select"`
	Type   *string                                                      `json:"type"`
}

type QueryADatabase200ApplicationJSONResultsProperties struct {
	Author                *QueryADatabase200ApplicationJSONResultsPropertiesAuthor                `json:"Author"`
	Link                  *QueryADatabase200ApplicationJSONResultsPropertiesLink                  `json:"Link"`
	Name                  *QueryADatabase200ApplicationJSONResultsPropertiesName                  `json:"Name"`
	Publisher             *QueryADatabase200ApplicationJSONResultsPropertiesPublisher             `json:"Publisher"`
	PublishingReleaseDate *QueryADatabase200ApplicationJSONResultsPropertiesPublishingReleaseDate `json:"Publishing/Release Date"`
	Read                  *QueryADatabase200ApplicationJSONResultsPropertiesRead                  `json:"Read"`
	Score5                *QueryADatabase200ApplicationJSONResultsPropertiesScore5                `json:"Score /5"`
	Status                *QueryADatabase200ApplicationJSONResultsPropertiesStatus                `json:"Status"`
	Summary               *QueryADatabase200ApplicationJSONResultsPropertiesSummary               `json:"Summary"`
	Type                  *QueryADatabase200ApplicationJSONResultsPropertiesType                  `json:"Type"`
}

type QueryADatabase200ApplicationJSONResults struct {
	Archived       *bool                                              `json:"archived"`
	CreatedTime    *string                                            `json:"created_time"`
	ID             *string                                            `json:"id"`
	LastEditedTime *string                                            `json:"last_edited_time"`
	Object         *string                                            `json:"object"`
	Parent         *QueryADatabase200ApplicationJSONResultsParent     `json:"parent"`
	Properties     *QueryADatabase200ApplicationJSONResultsProperties `json:"properties"`
}

type QueryADatabase200ApplicationJSON struct {
	HasMore    *bool                                     `json:"has_more"`
	NextCursor *interface{}                              `json:"next_cursor"`
	Object     *string                                   `json:"object"`
	Results    []QueryADatabase200ApplicationJSONResults `json:"results"`
}

type QueryADatabaseResponse struct {
	ContentType                            string
	Headers                                map[string][]string
	StatusCode                             int64
	QueryADatabase200ApplicationJSONObject *QueryADatabase200ApplicationJSON
}
