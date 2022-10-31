package shared




type XxePayloadLocationEnum string

const (
    XxePayloadLocationEnumLocationUnspecified XxePayloadLocationEnum = "LOCATION_UNSPECIFIED"
XxePayloadLocationEnumCompleteRequestBody XxePayloadLocationEnum = "COMPLETE_REQUEST_BODY"
)


type Xxe struct {
    PayloadLocation *XxePayloadLocationEnum `json:"payloadLocation,omitempty"`
    PayloadValue *string `json:"payloadValue,omitempty"`
    
}

