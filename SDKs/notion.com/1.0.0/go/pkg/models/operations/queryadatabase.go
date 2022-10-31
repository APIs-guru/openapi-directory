package operations

type QueryADatabasePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type QueryADatabaseRequestBodyFilterOrSelect struct {
	Equals *string `json:"equals,omitempty"`
}

type QueryADatabaseRequestBodyFilterOr struct {
	Property *string                                  `json:"property,omitempty"`
	Select   *QueryADatabaseRequestBodyFilterOrSelect `json:"select,omitempty"`
}

type QueryADatabaseRequestBodyFilter struct {
	Or []QueryADatabaseRequestBodyFilterOr `json:"or,omitempty"`
}

type QueryADatabaseRequestBodySorts struct {
	Direction *string `json:"direction,omitempty"`
	Property  *string `json:"property,omitempty"`
}

type QueryADatabaseRequestBody struct {
	Filter *QueryADatabaseRequestBodyFilter `json:"filter,omitempty"`
	Sorts  []QueryADatabaseRequestBodySorts `json:"sorts,omitempty"`
}

type QueryADatabaseRequest struct {
	PathParams QueryADatabasePathParams
	Request    *QueryADatabaseRequestBody `request:"mediaType=application/json"`
}

type QueryADatabase200ApplicationJSONResultsParent struct {
	DatabaseID *string `json:"database_id,omitempty"`
	Type       *string `json:"type,omitempty"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesAuthorMultiSelect struct {
	Color *string `json:"color,omitempty"`
	ID    *string `json:"id,omitempty"`
	Name  *string `json:"name,omitempty"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesAuthor struct {
	ID          *string                                                              `json:"id,omitempty"`
	MultiSelect []QueryADatabase200ApplicationJSONResultsPropertiesAuthorMultiSelect `json:"multi_select,omitempty"`
	Type        *string                                                              `json:"type,omitempty"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesLink struct {
	ID   *string `json:"id,omitempty"`
	Type *string `json:"type,omitempty"`
	URL  *string `json:"url,omitempty"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesNameTitleAnnotations struct {
	Bold          *bool   `json:"bold,omitempty"`
	Code          *bool   `json:"code,omitempty"`
	Color         *string `json:"color,omitempty"`
	Italic        *bool   `json:"italic,omitempty"`
	Strikethrough *bool   `json:"strikethrough,omitempty"`
	Underline     *bool   `json:"underline,omitempty"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesNameTitleText struct {
	Content *string      `json:"content,omitempty"`
	Link    *interface{} `json:"link,omitempty"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesNameTitle struct {
	Annotations *QueryADatabase200ApplicationJSONResultsPropertiesNameTitleAnnotations `json:"annotations,omitempty"`
	Href        *interface{}                                                           `json:"href,omitempty"`
	PlainText   *string                                                                `json:"plain_text,omitempty"`
	Text        *QueryADatabase200ApplicationJSONResultsPropertiesNameTitleText        `json:"text,omitempty"`
	Type        *string                                                                `json:"type,omitempty"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesName struct {
	ID    *string                                                      `json:"id,omitempty"`
	Title []QueryADatabase200ApplicationJSONResultsPropertiesNameTitle `json:"title,omitempty"`
	Type  *string                                                      `json:"type,omitempty"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesPublisherSelect struct {
	Color *string `json:"color,omitempty"`
	ID    *string `json:"id,omitempty"`
	Name  *string `json:"name,omitempty"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesPublisher struct {
	ID     *string                                                           `json:"id,omitempty"`
	Select *QueryADatabase200ApplicationJSONResultsPropertiesPublisherSelect `json:"select,omitempty"`
	Type   *string                                                           `json:"type,omitempty"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesPublishingReleaseDateDate struct {
	End   *interface{} `json:"end,omitempty"`
	Start *string      `json:"start,omitempty"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesPublishingReleaseDate struct {
	Date *QueryADatabase200ApplicationJSONResultsPropertiesPublishingReleaseDateDate `json:"date,omitempty"`
	ID   *string                                                                     `json:"id,omitempty"`
	Type *string                                                                     `json:"type,omitempty"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesRead struct {
	Checkbox *bool   `json:"checkbox,omitempty"`
	ID       *string `json:"id,omitempty"`
	Type     *string `json:"type,omitempty"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesScore5Select struct {
	Color *string `json:"color,omitempty"`
	ID    *string `json:"id,omitempty"`
	Name  *string `json:"name,omitempty"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesScore5 struct {
	ID     *string                                                        `json:"id,omitempty"`
	Select *QueryADatabase200ApplicationJSONResultsPropertiesScore5Select `json:"select,omitempty"`
	Type   *string                                                        `json:"type,omitempty"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesStatusSelect struct {
	Color *string `json:"color,omitempty"`
	ID    *string `json:"id,omitempty"`
	Name  *string `json:"name,omitempty"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesStatus struct {
	ID     *string                                                        `json:"id,omitempty"`
	Select *QueryADatabase200ApplicationJSONResultsPropertiesStatusSelect `json:"select,omitempty"`
	Type   *string                                                        `json:"type,omitempty"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesSummary struct {
	ID   *string       `json:"id,omitempty"`
	Text []interface{} `json:"text,omitempty"`
	Type *string       `json:"type,omitempty"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesTypeSelect struct {
	Color *string `json:"color,omitempty"`
	ID    *string `json:"id,omitempty"`
	Name  *string `json:"name,omitempty"`
}

type QueryADatabase200ApplicationJSONResultsPropertiesType struct {
	ID     *string                                                      `json:"id,omitempty"`
	Select *QueryADatabase200ApplicationJSONResultsPropertiesTypeSelect `json:"select,omitempty"`
	Type   *string                                                      `json:"type,omitempty"`
}

type QueryADatabase200ApplicationJSONResultsProperties struct {
	Author                *QueryADatabase200ApplicationJSONResultsPropertiesAuthor                `json:"Author,omitempty"`
	Link                  *QueryADatabase200ApplicationJSONResultsPropertiesLink                  `json:"Link,omitempty"`
	Name                  *QueryADatabase200ApplicationJSONResultsPropertiesName                  `json:"Name,omitempty"`
	Publisher             *QueryADatabase200ApplicationJSONResultsPropertiesPublisher             `json:"Publisher,omitempty"`
	PublishingReleaseDate *QueryADatabase200ApplicationJSONResultsPropertiesPublishingReleaseDate `json:"Publishing/Release Date,omitempty"`
	Read                  *QueryADatabase200ApplicationJSONResultsPropertiesRead                  `json:"Read,omitempty"`
	Score5                *QueryADatabase200ApplicationJSONResultsPropertiesScore5                `json:"Score /5,omitempty"`
	Status                *QueryADatabase200ApplicationJSONResultsPropertiesStatus                `json:"Status,omitempty"`
	Summary               *QueryADatabase200ApplicationJSONResultsPropertiesSummary               `json:"Summary,omitempty"`
	Type                  *QueryADatabase200ApplicationJSONResultsPropertiesType                  `json:"Type,omitempty"`
}

type QueryADatabase200ApplicationJSONResults struct {
	Archived       *bool                                              `json:"archived,omitempty"`
	CreatedTime    *string                                            `json:"created_time,omitempty"`
	ID             *string                                            `json:"id,omitempty"`
	LastEditedTime *string                                            `json:"last_edited_time,omitempty"`
	Object         *string                                            `json:"object,omitempty"`
	Parent         *QueryADatabase200ApplicationJSONResultsParent     `json:"parent,omitempty"`
	Properties     *QueryADatabase200ApplicationJSONResultsProperties `json:"properties,omitempty"`
}

type QueryADatabase200ApplicationJSON struct {
	HasMore    *bool                                     `json:"has_more,omitempty"`
	NextCursor *interface{}                              `json:"next_cursor,omitempty"`
	Object     *string                                   `json:"object,omitempty"`
	Results    []QueryADatabase200ApplicationJSONResults `json:"results,omitempty"`
}

type QueryADatabaseResponse struct {
	ContentType                            string
	Headers                                map[string][]string
	StatusCode                             int64
	QueryADatabase200ApplicationJSONObject *QueryADatabase200ApplicationJSON
}
