package shared

type GoogleCloudDialogflowV2beta1EntityTypeAutoExpansionModeEnum string

const (
	GoogleCloudDialogflowV2beta1EntityTypeAutoExpansionModeEnumAutoExpansionModeUnspecified GoogleCloudDialogflowV2beta1EntityTypeAutoExpansionModeEnum = "AUTO_EXPANSION_MODE_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1EntityTypeAutoExpansionModeEnumAutoExpansionModeDefault     GoogleCloudDialogflowV2beta1EntityTypeAutoExpansionModeEnum = "AUTO_EXPANSION_MODE_DEFAULT"
)

type GoogleCloudDialogflowV2beta1EntityTypeKindEnum string

const (
	GoogleCloudDialogflowV2beta1EntityTypeKindEnumKindUnspecified GoogleCloudDialogflowV2beta1EntityTypeKindEnum = "KIND_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1EntityTypeKindEnumKindMap         GoogleCloudDialogflowV2beta1EntityTypeKindEnum = "KIND_MAP"
	GoogleCloudDialogflowV2beta1EntityTypeKindEnumKindList        GoogleCloudDialogflowV2beta1EntityTypeKindEnum = "KIND_LIST"
	GoogleCloudDialogflowV2beta1EntityTypeKindEnumKindRegexp      GoogleCloudDialogflowV2beta1EntityTypeKindEnum = "KIND_REGEXP"
)

type GoogleCloudDialogflowV2beta1EntityType struct {
	AutoExpansionMode     *GoogleCloudDialogflowV2beta1EntityTypeAutoExpansionModeEnum `json:"autoExpansionMode"`
	DisplayName           *string                                                      `json:"displayName"`
	EnableFuzzyExtraction *bool                                                        `json:"enableFuzzyExtraction"`
	Entities              []GoogleCloudDialogflowV2beta1EntityTypeEntity               `json:"entities"`
	Kind                  *GoogleCloudDialogflowV2beta1EntityTypeKindEnum              `json:"kind"`
	Name                  *string                                                      `json:"name"`
}
