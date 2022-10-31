package operations

type UpdatePagePropertiesPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdatePagePropertiesRequestBodyPropertiesStatusSelect struct {
	Name *string `json:"name,omitempty"`
}

type UpdatePagePropertiesRequestBodyPropertiesStatus struct {
	Select *UpdatePagePropertiesRequestBodyPropertiesStatusSelect `json:"select,omitempty"`
}

type UpdatePagePropertiesRequestBodyProperties struct {
	Status *UpdatePagePropertiesRequestBodyPropertiesStatus `json:"Status,omitempty"`
}

type UpdatePagePropertiesRequestBody struct {
	Properties *UpdatePagePropertiesRequestBodyProperties `json:"properties,omitempty"`
}

type UpdatePagePropertiesRequest struct {
	PathParams UpdatePagePropertiesPathParams
	Request    *UpdatePagePropertiesRequestBody `request:"mediaType=application/json"`
}

type UpdatePageProperties200ApplicationJSONParent struct {
	DatabaseID *string `json:"database_id,omitempty"`
	Type       *string `json:"type,omitempty"`
}

type UpdatePageProperties200ApplicationJSONPropertiesAuthorMultiSelect struct {
	Color *string `json:"color,omitempty"`
	ID    *string `json:"id,omitempty"`
	Name  *string `json:"name,omitempty"`
}

type UpdatePageProperties200ApplicationJSONPropertiesAuthor struct {
	ID          *string                                                             `json:"id,omitempty"`
	MultiSelect []UpdatePageProperties200ApplicationJSONPropertiesAuthorMultiSelect `json:"multi_select,omitempty"`
	Type        *string                                                             `json:"type,omitempty"`
}

type UpdatePageProperties200ApplicationJSONPropertiesLink struct {
	ID   *string `json:"id,omitempty"`
	Type *string `json:"type,omitempty"`
	URL  *string `json:"url,omitempty"`
}

type UpdatePageProperties200ApplicationJSONPropertiesNameTitleAnnotations struct {
	Bold          *bool   `json:"bold,omitempty"`
	Code          *bool   `json:"code,omitempty"`
	Color         *string `json:"color,omitempty"`
	Italic        *bool   `json:"italic,omitempty"`
	Strikethrough *bool   `json:"strikethrough,omitempty"`
	Underline     *bool   `json:"underline,omitempty"`
}

type UpdatePageProperties200ApplicationJSONPropertiesNameTitleText struct {
	Content *string      `json:"content,omitempty"`
	Link    *interface{} `json:"link,omitempty"`
}

type UpdatePageProperties200ApplicationJSONPropertiesNameTitle struct {
	Annotations *UpdatePageProperties200ApplicationJSONPropertiesNameTitleAnnotations `json:"annotations,omitempty"`
	Href        *interface{}                                                          `json:"href,omitempty"`
	PlainText   *string                                                               `json:"plain_text,omitempty"`
	Text        *UpdatePageProperties200ApplicationJSONPropertiesNameTitleText        `json:"text,omitempty"`
	Type        *string                                                               `json:"type,omitempty"`
}

type UpdatePageProperties200ApplicationJSONPropertiesName struct {
	ID    *string                                                     `json:"id,omitempty"`
	Title []UpdatePageProperties200ApplicationJSONPropertiesNameTitle `json:"title,omitempty"`
	Type  *string                                                     `json:"type,omitempty"`
}

type UpdatePageProperties200ApplicationJSONPropertiesPublisherSelect struct {
	Color *string `json:"color,omitempty"`
	ID    *string `json:"id,omitempty"`
	Name  *string `json:"name,omitempty"`
}

type UpdatePageProperties200ApplicationJSONPropertiesPublisher struct {
	ID     *string                                                          `json:"id,omitempty"`
	Select *UpdatePageProperties200ApplicationJSONPropertiesPublisherSelect `json:"select,omitempty"`
	Type   *string                                                          `json:"type,omitempty"`
}

type UpdatePageProperties200ApplicationJSONPropertiesPublishingReleaseDateDate struct {
	End   *interface{} `json:"end,omitempty"`
	Start *string      `json:"start,omitempty"`
}

type UpdatePageProperties200ApplicationJSONPropertiesPublishingReleaseDate struct {
	Date *UpdatePageProperties200ApplicationJSONPropertiesPublishingReleaseDateDate `json:"date,omitempty"`
	ID   *string                                                                    `json:"id,omitempty"`
	Type *string                                                                    `json:"type,omitempty"`
}

type UpdatePageProperties200ApplicationJSONPropertiesRead struct {
	Checkbox *bool   `json:"checkbox,omitempty"`
	ID       *string `json:"id,omitempty"`
	Type     *string `json:"type,omitempty"`
}

type UpdatePageProperties200ApplicationJSONPropertiesScore5Select struct {
	Color *string `json:"color,omitempty"`
	ID    *string `json:"id,omitempty"`
	Name  *string `json:"name,omitempty"`
}

type UpdatePageProperties200ApplicationJSONPropertiesScore5 struct {
	ID     *string                                                       `json:"id,omitempty"`
	Select *UpdatePageProperties200ApplicationJSONPropertiesScore5Select `json:"select,omitempty"`
	Type   *string                                                       `json:"type,omitempty"`
}

type UpdatePageProperties200ApplicationJSONPropertiesStatusSelect struct {
	Color *string `json:"color,omitempty"`
	ID    *string `json:"id,omitempty"`
	Name  *string `json:"name,omitempty"`
}

type UpdatePageProperties200ApplicationJSONPropertiesStatus struct {
	ID     *string                                                       `json:"id,omitempty"`
	Select *UpdatePageProperties200ApplicationJSONPropertiesStatusSelect `json:"select,omitempty"`
	Type   *string                                                       `json:"type,omitempty"`
}

type UpdatePageProperties200ApplicationJSONPropertiesSummaryRichTextAnnotations struct {
	Bold          *bool   `json:"bold,omitempty"`
	Code          *bool   `json:"code,omitempty"`
	Color         *string `json:"color,omitempty"`
	Italic        *bool   `json:"italic,omitempty"`
	Strikethrough *bool   `json:"strikethrough,omitempty"`
	Underline     *bool   `json:"underline,omitempty"`
}

type UpdatePageProperties200ApplicationJSONPropertiesSummaryRichTextText struct {
	Content *string      `json:"content,omitempty"`
	Link    *interface{} `json:"link,omitempty"`
}

type UpdatePageProperties200ApplicationJSONPropertiesSummaryRichText struct {
	Annotations *UpdatePageProperties200ApplicationJSONPropertiesSummaryRichTextAnnotations `json:"annotations,omitempty"`
	Href        *interface{}                                                                `json:"href,omitempty"`
	PlainText   *string                                                                     `json:"plain_text,omitempty"`
	Text        *UpdatePageProperties200ApplicationJSONPropertiesSummaryRichTextText        `json:"text,omitempty"`
	Type        *string                                                                     `json:"type,omitempty"`
}

type UpdatePageProperties200ApplicationJSONPropertiesSummary struct {
	ID       *string                                                           `json:"id,omitempty"`
	RichText []UpdatePageProperties200ApplicationJSONPropertiesSummaryRichText `json:"rich_text,omitempty"`
	Type     *string                                                           `json:"type,omitempty"`
}

type UpdatePageProperties200ApplicationJSONPropertiesTypeSelect struct {
	Color *string `json:"color,omitempty"`
	ID    *string `json:"id,omitempty"`
	Name  *string `json:"name,omitempty"`
}

type UpdatePageProperties200ApplicationJSONPropertiesType struct {
	ID     *string                                                     `json:"id,omitempty"`
	Select *UpdatePageProperties200ApplicationJSONPropertiesTypeSelect `json:"select,omitempty"`
	Type   *string                                                     `json:"type,omitempty"`
}

type UpdatePageProperties200ApplicationJSONProperties struct {
	Author                *UpdatePageProperties200ApplicationJSONPropertiesAuthor                `json:"Author,omitempty"`
	Link                  *UpdatePageProperties200ApplicationJSONPropertiesLink                  `json:"Link,omitempty"`
	Name                  *UpdatePageProperties200ApplicationJSONPropertiesName                  `json:"Name,omitempty"`
	Publisher             *UpdatePageProperties200ApplicationJSONPropertiesPublisher             `json:"Publisher,omitempty"`
	PublishingReleaseDate *UpdatePageProperties200ApplicationJSONPropertiesPublishingReleaseDate `json:"Publishing/Release Date,omitempty"`
	Read                  *UpdatePageProperties200ApplicationJSONPropertiesRead                  `json:"Read,omitempty"`
	Score5                *UpdatePageProperties200ApplicationJSONPropertiesScore5                `json:"Score /5,omitempty"`
	Status                *UpdatePageProperties200ApplicationJSONPropertiesStatus                `json:"Status,omitempty"`
	Summary               *UpdatePageProperties200ApplicationJSONPropertiesSummary               `json:"Summary,omitempty"`
	Type                  *UpdatePageProperties200ApplicationJSONPropertiesType                  `json:"Type,omitempty"`
}

type UpdatePageProperties200ApplicationJSON struct {
	Archived       *bool                                             `json:"archived,omitempty"`
	CreatedTime    *string                                           `json:"created_time,omitempty"`
	ID             *string                                           `json:"id,omitempty"`
	LastEditedTime *string                                           `json:"last_edited_time,omitempty"`
	Object         *string                                           `json:"object,omitempty"`
	Parent         *UpdatePageProperties200ApplicationJSONParent     `json:"parent,omitempty"`
	Properties     *UpdatePageProperties200ApplicationJSONProperties `json:"properties,omitempty"`
}

type UpdatePagePropertiesResponse struct {
	ContentType                                  string
	Headers                                      map[string][]string
	StatusCode                                   int64
	UpdatePageProperties200ApplicationJSONObject *UpdatePageProperties200ApplicationJSON
}
