package shared

type GcsDestinationContentStructureEnum string

const (
	GcsDestinationContentStructureEnumContentStructureUnspecified GcsDestinationContentStructureEnum = "CONTENT_STRUCTURE_UNSPECIFIED"
	GcsDestinationContentStructureEnumMessageJSON                 GcsDestinationContentStructureEnum = "MESSAGE_JSON"
)

type GcsDestinationMessageViewEnum string

const (
	GcsDestinationMessageViewEnumMessageViewUnspecified GcsDestinationMessageViewEnum = "MESSAGE_VIEW_UNSPECIFIED"
	GcsDestinationMessageViewEnumRawOnly                GcsDestinationMessageViewEnum = "RAW_ONLY"
	GcsDestinationMessageViewEnumParsedOnly             GcsDestinationMessageViewEnum = "PARSED_ONLY"
	GcsDestinationMessageViewEnumFull                   GcsDestinationMessageViewEnum = "FULL"
	GcsDestinationMessageViewEnumSchematizedOnly        GcsDestinationMessageViewEnum = "SCHEMATIZED_ONLY"
	GcsDestinationMessageViewEnumBasic                  GcsDestinationMessageViewEnum = "BASIC"
)

type GcsDestination struct {
	ContentStructure *GcsDestinationContentStructureEnum `json:"contentStructure,omitempty"`
	MessageView      *GcsDestinationMessageViewEnum      `json:"messageView,omitempty"`
	URIPrefix        *string                             `json:"uriPrefix,omitempty"`
}
