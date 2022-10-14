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

type GoogleCloudDialogflowV2EntityType struct {
	AutoExpansionMode     *GoogleCloudDialogflowV2EntityTypeAutoExpansionModeEnum `json:"autoExpansionMode,omitempty"`
	DisplayName           *string                                                 `json:"displayName,omitempty"`
	EnableFuzzyExtraction *bool                                                   `json:"enableFuzzyExtraction,omitempty"`
	Entities              []GoogleCloudDialogflowV2EntityTypeEntity               `json:"entities,omitempty"`
	Kind                  *GoogleCloudDialogflowV2EntityTypeKindEnum              `json:"kind,omitempty"`
	Name                  *string                                                 `json:"name,omitempty"`
}
