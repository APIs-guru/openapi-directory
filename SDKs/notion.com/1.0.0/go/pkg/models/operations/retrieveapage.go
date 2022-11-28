package operations

type RetrieveAPagePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type RetrieveAPage200ApplicationJSONParent struct {
	DatabaseID *string `json:"database_id,omitempty"`
	Type       *string `json:"type,omitempty"`
}

type RetrieveAPage200ApplicationJSONPropertiesAuthorMultiSelect struct {
	Color *string `json:"color,omitempty"`
	ID    *string `json:"id,omitempty"`
	Name  *string `json:"name,omitempty"`
}

type RetrieveAPage200ApplicationJSONPropertiesAuthor struct {
	ID          *string                                                      `json:"id,omitempty"`
	MultiSelect []RetrieveAPage200ApplicationJSONPropertiesAuthorMultiSelect `json:"multi_select,omitempty"`
	Type        *string                                                      `json:"type,omitempty"`
}

type RetrieveAPage200ApplicationJSONPropertiesLink struct {
	ID   *string `json:"id,omitempty"`
	Type *string `json:"type,omitempty"`
	URL  *string `json:"url,omitempty"`
}

type RetrieveAPage200ApplicationJSONPropertiesNameTitleAnnotations struct {
	Bold          *bool   `json:"bold,omitempty"`
	Code          *bool   `json:"code,omitempty"`
	Color         *string `json:"color,omitempty"`
	Italic        *bool   `json:"italic,omitempty"`
	Strikethrough *bool   `json:"strikethrough,omitempty"`
	Underline     *bool   `json:"underline,omitempty"`
}

type RetrieveAPage200ApplicationJSONPropertiesNameTitleText struct {
	Content *string      `json:"content,omitempty"`
	Link    *interface{} `json:"link,omitempty"`
}

type RetrieveAPage200ApplicationJSONPropertiesNameTitle struct {
	Annotations *RetrieveAPage200ApplicationJSONPropertiesNameTitleAnnotations `json:"annotations,omitempty"`
	Href        *interface{}                                                   `json:"href,omitempty"`
	PlainText   *string                                                        `json:"plain_text,omitempty"`
	Text        *RetrieveAPage200ApplicationJSONPropertiesNameTitleText        `json:"text,omitempty"`
	Type        *string                                                        `json:"type,omitempty"`
}

type RetrieveAPage200ApplicationJSONPropertiesName struct {
	ID    *string                                              `json:"id,omitempty"`
	Title []RetrieveAPage200ApplicationJSONPropertiesNameTitle `json:"title,omitempty"`
	Type  *string                                              `json:"type,omitempty"`
}

type RetrieveAPage200ApplicationJSONPropertiesPublisherSelect struct {
	Color *string `json:"color,omitempty"`
	ID    *string `json:"id,omitempty"`
	Name  *string `json:"name,omitempty"`
}

type RetrieveAPage200ApplicationJSONPropertiesPublisher struct {
	ID     *string                                                   `json:"id,omitempty"`
	Select *RetrieveAPage200ApplicationJSONPropertiesPublisherSelect `json:"select,omitempty"`
	Type   *string                                                   `json:"type,omitempty"`
}

type RetrieveAPage200ApplicationJSONPropertiesPublishingReleaseDateDate struct {
	End   *interface{} `json:"end,omitempty"`
	Start *string      `json:"start,omitempty"`
}

type RetrieveAPage200ApplicationJSONPropertiesPublishingReleaseDate struct {
	Date *RetrieveAPage200ApplicationJSONPropertiesPublishingReleaseDateDate `json:"date,omitempty"`
	ID   *string                                                             `json:"id,omitempty"`
	Type *string                                                             `json:"type,omitempty"`
}

type RetrieveAPage200ApplicationJSONPropertiesRead struct {
	Checkbox *bool   `json:"checkbox,omitempty"`
	ID       *string `json:"id,omitempty"`
	Type     *string `json:"type,omitempty"`
}

type RetrieveAPage200ApplicationJSONPropertiesStatusSelect struct {
	Color *string `json:"color,omitempty"`
	ID    *string `json:"id,omitempty"`
	Name  *string `json:"name,omitempty"`
}

type RetrieveAPage200ApplicationJSONPropertiesStatus struct {
	ID     *string                                                `json:"id,omitempty"`
	Select *RetrieveAPage200ApplicationJSONPropertiesStatusSelect `json:"select,omitempty"`
	Type   *string                                                `json:"type,omitempty"`
}

type RetrieveAPage200ApplicationJSONPropertiesSummaryTextAnnotations struct {
	Bold          *bool   `json:"bold,omitempty"`
	Code          *bool   `json:"code,omitempty"`
	Color         *string `json:"color,omitempty"`
	Italic        *bool   `json:"italic,omitempty"`
	Strikethrough *bool   `json:"strikethrough,omitempty"`
	Underline     *bool   `json:"underline,omitempty"`
}

type RetrieveAPage200ApplicationJSONPropertiesSummaryTextText struct {
	Content *string      `json:"content,omitempty"`
	Link    *interface{} `json:"link,omitempty"`
}

type RetrieveAPage200ApplicationJSONPropertiesSummaryText struct {
	Annotations *RetrieveAPage200ApplicationJSONPropertiesSummaryTextAnnotations `json:"annotations,omitempty"`
	Href        *interface{}                                                     `json:"href,omitempty"`
	PlainText   *string                                                          `json:"plain_text,omitempty"`
	Text        *RetrieveAPage200ApplicationJSONPropertiesSummaryTextText        `json:"text,omitempty"`
	Type        *string                                                          `json:"type,omitempty"`
}

type RetrieveAPage200ApplicationJSONPropertiesSummary struct {
	ID   *string                                                `json:"id,omitempty"`
	Text []RetrieveAPage200ApplicationJSONPropertiesSummaryText `json:"text,omitempty"`
	Type *string                                                `json:"type,omitempty"`
}

type RetrieveAPage200ApplicationJSONPropertiesTypeSelect struct {
	Color *string `json:"color,omitempty"`
	ID    *string `json:"id,omitempty"`
	Name  *string `json:"name,omitempty"`
}

type RetrieveAPage200ApplicationJSONPropertiesType struct {
	ID     *string                                              `json:"id,omitempty"`
	Select *RetrieveAPage200ApplicationJSONPropertiesTypeSelect `json:"select,omitempty"`
	Type   *string                                              `json:"type,omitempty"`
}

type RetrieveAPage200ApplicationJSONProperties struct {
	Author                *RetrieveAPage200ApplicationJSONPropertiesAuthor                `json:"Author,omitempty"`
	Link                  *RetrieveAPage200ApplicationJSONPropertiesLink                  `json:"Link,omitempty"`
	Name                  *RetrieveAPage200ApplicationJSONPropertiesName                  `json:"Name,omitempty"`
	Publisher             *RetrieveAPage200ApplicationJSONPropertiesPublisher             `json:"Publisher,omitempty"`
	PublishingReleaseDate *RetrieveAPage200ApplicationJSONPropertiesPublishingReleaseDate `json:"Publishing/Release Date,omitempty"`
	Read                  *RetrieveAPage200ApplicationJSONPropertiesRead                  `json:"Read,omitempty"`
	Status                *RetrieveAPage200ApplicationJSONPropertiesStatus                `json:"Status,omitempty"`
	Summary               *RetrieveAPage200ApplicationJSONPropertiesSummary               `json:"Summary,omitempty"`
	Type                  *RetrieveAPage200ApplicationJSONPropertiesType                  `json:"Type,omitempty"`
}

type RetrieveAPage200ApplicationJSON struct {
	Archived       *bool                                      `json:"archived,omitempty"`
	CreatedTime    *string                                    `json:"created_time,omitempty"`
	ID             *string                                    `json:"id,omitempty"`
	LastEditedTime *string                                    `json:"last_edited_time,omitempty"`
	Object         *string                                    `json:"object,omitempty"`
	Parent         *RetrieveAPage200ApplicationJSONParent     `json:"parent,omitempty"`
	Properties     *RetrieveAPage200ApplicationJSONProperties `json:"properties,omitempty"`
}

type RetrieveAPageRequest struct {
	PathParams RetrieveAPagePathParams
}

type RetrieveAPageResponse struct {
	ContentType                           string
	Headers                               map[string][]string
	StatusCode                            int64
	RetrieveAPage200ApplicationJSONObject *RetrieveAPage200ApplicationJSON
}
