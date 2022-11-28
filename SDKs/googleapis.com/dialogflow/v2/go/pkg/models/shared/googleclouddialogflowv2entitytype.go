package shared

type GoogleCloudDialogflowV2EntityTypeAutoExpansionModeEnum string

const (
	GoogleCloudDialogflowV2EntityTypeAutoExpansionModeEnumAutoExpansionModeUnspecified GoogleCloudDialogflowV2EntityTypeAutoExpansionModeEnum = "AUTO_EXPANSION_MODE_UNSPECIFIED"
	GoogleCloudDialogflowV2EntityTypeAutoExpansionModeEnumAutoExpansionModeDefault     GoogleCloudDialogflowV2EntityTypeAutoExpansionModeEnum = "AUTO_EXPANSION_MODE_DEFAULT"
)

type GoogleCloudDialogflowV2EntityTypeKindEnum string

const (
	GoogleCloudDialogflowV2EntityTypeKindEnumKindUnspecified GoogleCloudDialogflowV2EntityTypeKindEnum = "KIND_UNSPECIFIED"
	GoogleCloudDialogflowV2EntityTypeKindEnumKindMap         GoogleCloudDialogflowV2EntityTypeKindEnum = "KIND_MAP"
	GoogleCloudDialogflowV2EntityTypeKindEnumKindList        GoogleCloudDialogflowV2EntityTypeKindEnum = "KIND_LIST"
	GoogleCloudDialogflowV2EntityTypeKindEnumKindRegexp      GoogleCloudDialogflowV2EntityTypeKindEnum = "KIND_REGEXP"
)

// GoogleCloudDialogflowV2EntityType
// Each intent parameter has a type, called the entity type, which dictates exactly how data from an end-user expression is extracted. Dialogflow provides predefined system entities that can match many common types of data. For example, there are system entities for matching dates, times, colors, email addresses, and so on. You can also create your own custom entities for matching custom data. For example, you could define a vegetable entity that can match the types of vegetables available for purchase with a grocery store agent. For more information, see the [Entity guide](https://cloud.google.com/dialogflow/docs/entities-overview).
type GoogleCloudDialogflowV2EntityType struct {
	AutoExpansionMode     *GoogleCloudDialogflowV2EntityTypeAutoExpansionModeEnum `json:"autoExpansionMode,omitempty"`
	DisplayName           *string                                                 `json:"displayName,omitempty"`
	EnableFuzzyExtraction *bool                                                   `json:"enableFuzzyExtraction,omitempty"`
	Entities              []GoogleCloudDialogflowV2EntityTypeEntity               `json:"entities,omitempty"`
	Kind                  *GoogleCloudDialogflowV2EntityTypeKindEnum              `json:"kind,omitempty"`
	Name                  *string                                                 `json:"name,omitempty"`
}
