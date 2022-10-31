package operations



type RetrieveADatabasePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type RetrieveADatabaseRequest struct {
    PathParams RetrieveADatabasePathParams 
    
}

type RetrieveADatabase200ApplicationJSONPropertiesAuthorMultiSelectOptions struct {
    Color *string `json:"color,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type RetrieveADatabase200ApplicationJSONPropertiesAuthorMultiSelect struct {
    Options []RetrieveADatabase200ApplicationJSONPropertiesAuthorMultiSelectOptions `json:"options,omitempty"`
    
}

type RetrieveADatabase200ApplicationJSONPropertiesAuthor struct {
    ID *string `json:"id,omitempty"`
    MultiSelect *RetrieveADatabase200ApplicationJSONPropertiesAuthorMultiSelect `json:"multi_select,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type RetrieveADatabase200ApplicationJSONPropertiesLink struct {
    ID *string `json:"id,omitempty"`
    Type *string `json:"type,omitempty"`
    URL map[string]interface{} `json:"url,omitempty"`
    
}

type RetrieveADatabase200ApplicationJSONPropertiesName struct {
    ID *string `json:"id,omitempty"`
    Title map[string]interface{} `json:"title,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type RetrieveADatabase200ApplicationJSONPropertiesPublisherSelectOptions struct {
    Color *string `json:"color,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type RetrieveADatabase200ApplicationJSONPropertiesPublisherSelect struct {
    Options []RetrieveADatabase200ApplicationJSONPropertiesPublisherSelectOptions `json:"options,omitempty"`
    
}

type RetrieveADatabase200ApplicationJSONPropertiesPublisher struct {
    ID *string `json:"id,omitempty"`
    Select *RetrieveADatabase200ApplicationJSONPropertiesPublisherSelect `json:"select,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type RetrieveADatabase200ApplicationJSONPropertiesPublishingReleaseDate struct {
    Date map[string]interface{} `json:"date,omitempty"`
    ID *string `json:"id,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type RetrieveADatabase200ApplicationJSONPropertiesRead struct {
    Checkbox map[string]interface{} `json:"checkbox,omitempty"`
    ID *string `json:"id,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type RetrieveADatabase200ApplicationJSONPropertiesScore5SelectOptions struct {
    Color *string `json:"color,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type RetrieveADatabase200ApplicationJSONPropertiesScore5Select struct {
    Options []RetrieveADatabase200ApplicationJSONPropertiesScore5SelectOptions `json:"options,omitempty"`
    
}

type RetrieveADatabase200ApplicationJSONPropertiesScore5 struct {
    ID *string `json:"id,omitempty"`
    Select *RetrieveADatabase200ApplicationJSONPropertiesScore5Select `json:"select,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type RetrieveADatabase200ApplicationJSONPropertiesStatusSelectOptions struct {
    Color *string `json:"color,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type RetrieveADatabase200ApplicationJSONPropertiesStatusSelect struct {
    Options []RetrieveADatabase200ApplicationJSONPropertiesStatusSelectOptions `json:"options,omitempty"`
    
}

type RetrieveADatabase200ApplicationJSONPropertiesStatus struct {
    ID *string `json:"id,omitempty"`
    Select *RetrieveADatabase200ApplicationJSONPropertiesStatusSelect `json:"select,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type RetrieveADatabase200ApplicationJSONPropertiesSummary struct {
    ID *string `json:"id,omitempty"`
    Text map[string]interface{} `json:"text,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type RetrieveADatabase200ApplicationJSONPropertiesTypeSelectOptions struct {
    Color *string `json:"color,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type RetrieveADatabase200ApplicationJSONPropertiesTypeSelect struct {
    Options []RetrieveADatabase200ApplicationJSONPropertiesTypeSelectOptions `json:"options,omitempty"`
    
}

type RetrieveADatabase200ApplicationJSONPropertiesType struct {
    ID *string `json:"id,omitempty"`
    Select *RetrieveADatabase200ApplicationJSONPropertiesTypeSelect `json:"select,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type RetrieveADatabase200ApplicationJSONProperties struct {
    Author *RetrieveADatabase200ApplicationJSONPropertiesAuthor `json:"Author,omitempty"`
    Link *RetrieveADatabase200ApplicationJSONPropertiesLink `json:"Link,omitempty"`
    Name *RetrieveADatabase200ApplicationJSONPropertiesName `json:"Name,omitempty"`
    Publisher *RetrieveADatabase200ApplicationJSONPropertiesPublisher `json:"Publisher,omitempty"`
    PublishingReleaseDate *RetrieveADatabase200ApplicationJSONPropertiesPublishingReleaseDate `json:"Publishing/Release Date,omitempty"`
    Read *RetrieveADatabase200ApplicationJSONPropertiesRead `json:"Read,omitempty"`
    Score5 *RetrieveADatabase200ApplicationJSONPropertiesScore5 `json:"Score /5,omitempty"`
    Status *RetrieveADatabase200ApplicationJSONPropertiesStatus `json:"Status,omitempty"`
    Summary *RetrieveADatabase200ApplicationJSONPropertiesSummary `json:"Summary,omitempty"`
    Type *RetrieveADatabase200ApplicationJSONPropertiesType `json:"Type,omitempty"`
    
}

type RetrieveADatabase200ApplicationJSONTitleAnnotations struct {
    Bold *bool `json:"bold,omitempty"`
    Code *bool `json:"code,omitempty"`
    Color *string `json:"color,omitempty"`
    Italic *bool `json:"italic,omitempty"`
    Strikethrough *bool `json:"strikethrough,omitempty"`
    Underline *bool `json:"underline,omitempty"`
    
}

type RetrieveADatabase200ApplicationJSONTitleText struct {
    Content *string `json:"content,omitempty"`
    Link *interface{} `json:"link,omitempty"`
    
}

type RetrieveADatabase200ApplicationJSONTitle struct {
    Annotations *RetrieveADatabase200ApplicationJSONTitleAnnotations `json:"annotations,omitempty"`
    Href *interface{} `json:"href,omitempty"`
    PlainText *string `json:"plain_text,omitempty"`
    Text *RetrieveADatabase200ApplicationJSONTitleText `json:"text,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type RetrieveADatabase200ApplicationJSON struct {
    CreatedTime *string `json:"created_time,omitempty"`
    ID *string `json:"id,omitempty"`
    LastEditedTime *string `json:"last_edited_time,omitempty"`
    Object *string `json:"object,omitempty"`
    Properties *RetrieveADatabase200ApplicationJSONProperties `json:"properties,omitempty"`
    Title []RetrieveADatabase200ApplicationJSONTitle `json:"title,omitempty"`
    
}

type RetrieveADatabaseResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    RetrieveADatabase200ApplicationJSONObject *RetrieveADatabase200ApplicationJSON 
    
}

