package operations

type RetrieveAPagePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type RetrieveAPageRequest struct {
	PathParams RetrieveAPagePathParams
}

type RetrieveAPage200ApplicationJSONParent struct {
	DatabaseID *string `json:"database_id"`
	Type       *string `json:"type"`
}

type RetrieveAPage200ApplicationJSONPropertiesAuthorMultiSelect struct {
	Color *string `json:"color"`
	ID    *string `json:"id"`
	Name  *string `json:"name"`
}

type RetrieveAPage200ApplicationJSONPropertiesAuthor struct {
	ID          *string                                                      `json:"id"`
	MultiSelect []RetrieveAPage200ApplicationJSONPropertiesAuthorMultiSelect `json:"multi_select"`
	Type        *string                                                      `json:"type"`
}

type RetrieveAPage200ApplicationJSONPropertiesLink struct {
	ID   *string `json:"id"`
	Type *string `json:"type"`
	URL  *string `json:"url"`
}

type RetrieveAPage200ApplicationJSONPropertiesNameTitleAnnotations struct {
	Bold          *bool   `json:"bold"`
	Code          *bool   `json:"code"`
	Color         *string `json:"color"`
	Italic        *bool   `json:"italic"`
	Strikethrough *bool   `json:"strikethrough"`
	Underline     *bool   `json:"underline"`
}

type RetrieveAPage200ApplicationJSONPropertiesNameTitleText struct {
	Content *string      `json:"content"`
	Link    *interface{} `json:"link"`
}

type RetrieveAPage200ApplicationJSONPropertiesNameTitle struct {
	Annotations *RetrieveAPage200ApplicationJSONPropertiesNameTitleAnnotations `json:"annotations"`
	Href        *interface{}                                                   `json:"href"`
	PlainText   *string                                                        `json:"plain_text"`
	Text        *RetrieveAPage200ApplicationJSONPropertiesNameTitleText        `json:"text"`
	Type        *string                                                        `json:"type"`
}

type RetrieveAPage200ApplicationJSONPropertiesName struct {
	ID    *string                                              `json:"id"`
	Title []RetrieveAPage200ApplicationJSONPropertiesNameTitle `json:"title"`
	Type  *string                                              `json:"type"`
}

type RetrieveAPage200ApplicationJSONPropertiesPublisherSelect struct {
	Color *string `json:"color"`
	ID    *string `json:"id"`
	Name  *string `json:"name"`
}

type RetrieveAPage200ApplicationJSONPropertiesPublisher struct {
	ID     *string                                                   `json:"id"`
	Select *RetrieveAPage200ApplicationJSONPropertiesPublisherSelect `json:"select"`
	Type   *string                                                   `json:"type"`
}

type RetrieveAPage200ApplicationJSONPropertiesPublishingReleaseDateDate struct {
	End   *interface{} `json:"end"`
	Start *string      `json:"start"`
}

type RetrieveAPage200ApplicationJSONPropertiesPublishingReleaseDate struct {
	Date *RetrieveAPage200ApplicationJSONPropertiesPublishingReleaseDateDate `json:"date"`
	ID   *string                                                             `json:"id"`
	Type *string                                                             `json:"type"`
}

type RetrieveAPage200ApplicationJSONPropertiesRead struct {
	Checkbox *bool   `json:"checkbox"`
	ID       *string `json:"id"`
	Type     *string `json:"type"`
}

type RetrieveAPage200ApplicationJSONPropertiesStatusSelect struct {
	Color *string `json:"color"`
	ID    *string `json:"id"`
	Name  *string `json:"name"`
}

type RetrieveAPage200ApplicationJSONPropertiesStatus struct {
	ID     *string                                                `json:"id"`
	Select *RetrieveAPage200ApplicationJSONPropertiesStatusSelect `json:"select"`
	Type   *string                                                `json:"type"`
}

type RetrieveAPage200ApplicationJSONPropertiesSummaryTextAnnotations struct {
	Bold          *bool   `json:"bold"`
	Code          *bool   `json:"code"`
	Color         *string `json:"color"`
	Italic        *bool   `json:"italic"`
	Strikethrough *bool   `json:"strikethrough"`
	Underline     *bool   `json:"underline"`
}

type RetrieveAPage200ApplicationJSONPropertiesSummaryTextText struct {
	Content *string      `json:"content"`
	Link    *interface{} `json:"link"`
}

type RetrieveAPage200ApplicationJSONPropertiesSummaryText struct {
	Annotations *RetrieveAPage200ApplicationJSONPropertiesSummaryTextAnnotations `json:"annotations"`
	Href        *interface{}                                                     `json:"href"`
	PlainText   *string                                                          `json:"plain_text"`
	Text        *RetrieveAPage200ApplicationJSONPropertiesSummaryTextText        `json:"text"`
	Type        *string                                                          `json:"type"`
}

type RetrieveAPage200ApplicationJSONPropertiesSummary struct {
	ID   *string                                                `json:"id"`
	Text []RetrieveAPage200ApplicationJSONPropertiesSummaryText `json:"text"`
	Type *string                                                `json:"type"`
}

type RetrieveAPage200ApplicationJSONPropertiesTypeSelect struct {
	Color *string `json:"color"`
	ID    *string `json:"id"`
	Name  *string `json:"name"`
}

type RetrieveAPage200ApplicationJSONPropertiesType struct {
	ID     *string                                              `json:"id"`
	Select *RetrieveAPage200ApplicationJSONPropertiesTypeSelect `json:"select"`
	Type   *string                                              `json:"type"`
}

type RetrieveAPage200ApplicationJSONProperties struct {
	Author                *RetrieveAPage200ApplicationJSONPropertiesAuthor                `json:"Author"`
	Link                  *RetrieveAPage200ApplicationJSONPropertiesLink                  `json:"Link"`
	Name                  *RetrieveAPage200ApplicationJSONPropertiesName                  `json:"Name"`
	Publisher             *RetrieveAPage200ApplicationJSONPropertiesPublisher             `json:"Publisher"`
	PublishingReleaseDate *RetrieveAPage200ApplicationJSONPropertiesPublishingReleaseDate `json:"Publishing/Release Date"`
	Read                  *RetrieveAPage200ApplicationJSONPropertiesRead                  `json:"Read"`
	Status                *RetrieveAPage200ApplicationJSONPropertiesStatus                `json:"Status"`
	Summary               *RetrieveAPage200ApplicationJSONPropertiesSummary               `json:"Summary"`
	Type                  *RetrieveAPage200ApplicationJSONPropertiesType                  `json:"Type"`
}

type RetrieveAPage200ApplicationJSON struct {
	Archived       *bool                                      `json:"archived"`
	CreatedTime    *string                                    `json:"created_time"`
	ID             *string                                    `json:"id"`
	LastEditedTime *string                                    `json:"last_edited_time"`
	Object         *string                                    `json:"object"`
	Parent         *RetrieveAPage200ApplicationJSONParent     `json:"parent"`
	Properties     *RetrieveAPage200ApplicationJSONProperties `json:"properties"`
}

type RetrieveAPageResponse struct {
	ContentType                           string
	Headers                               map[string][]string
	StatusCode                            int64
	RetrieveAPage200ApplicationJSONObject *RetrieveAPage200ApplicationJSON
}
