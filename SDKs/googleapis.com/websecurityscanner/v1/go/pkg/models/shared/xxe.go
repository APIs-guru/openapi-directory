package shared

type XxePayloadLocationEnum string

const (
	XxePayloadLocationEnumLocationUnspecified XxePayloadLocationEnum = "LOCATION_UNSPECIFIED"
	XxePayloadLocationEnumCompleteRequestBody XxePayloadLocationEnum = "COMPLETE_REQUEST_BODY"
)

// Xxe
// Information reported for an XXE.
type Xxe struct {
	PayloadLocation *XxePayloadLocationEnum `json:"payloadLocation,omitempty"`
	PayloadValue    *string                 `json:"payloadValue,omitempty"`
}
