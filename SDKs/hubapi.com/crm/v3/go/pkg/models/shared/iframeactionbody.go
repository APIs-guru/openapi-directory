package shared




type IFrameActionBodyTypeEnum string

const (
    IFrameActionBodyTypeEnumIframe IFrameActionBodyTypeEnum = "IFRAME"
)


type IFrameActionBody struct {
    Height int32 `json:"height"`
    Label *string `json:"label,omitempty"`
    PropertyNamesIncluded []string `json:"propertyNamesIncluded"`
    Type IFrameActionBodyTypeEnum `json:"type"`
    URL string `json:"url"`
    Width int32 `json:"width"`
    
}

