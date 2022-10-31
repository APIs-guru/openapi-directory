package shared

type GoogleCloudDocumentaiV1beta3DocumentProvenanceTypeEnum string

const (
	GoogleCloudDocumentaiV1beta3DocumentProvenanceTypeEnumOperationTypeUnspecified GoogleCloudDocumentaiV1beta3DocumentProvenanceTypeEnum = "OPERATION_TYPE_UNSPECIFIED"
	GoogleCloudDocumentaiV1beta3DocumentProvenanceTypeEnumAdd                      GoogleCloudDocumentaiV1beta3DocumentProvenanceTypeEnum = "ADD"
	GoogleCloudDocumentaiV1beta3DocumentProvenanceTypeEnumRemove                   GoogleCloudDocumentaiV1beta3DocumentProvenanceTypeEnum = "REMOVE"
	GoogleCloudDocumentaiV1beta3DocumentProvenanceTypeEnumReplace                  GoogleCloudDocumentaiV1beta3DocumentProvenanceTypeEnum = "REPLACE"
	GoogleCloudDocumentaiV1beta3DocumentProvenanceTypeEnumEvalRequested            GoogleCloudDocumentaiV1beta3DocumentProvenanceTypeEnum = "EVAL_REQUESTED"
	GoogleCloudDocumentaiV1beta3DocumentProvenanceTypeEnumEvalApproved             GoogleCloudDocumentaiV1beta3DocumentProvenanceTypeEnum = "EVAL_APPROVED"
	GoogleCloudDocumentaiV1beta3DocumentProvenanceTypeEnumEvalSkipped              GoogleCloudDocumentaiV1beta3DocumentProvenanceTypeEnum = "EVAL_SKIPPED"
)

type GoogleCloudDocumentaiV1beta3DocumentProvenance struct {
	ID       *int32                                                  `json:"id,omitempty"`
	Parents  []GoogleCloudDocumentaiV1beta3DocumentProvenanceParent  `json:"parents,omitempty"`
	Revision *int32                                                  `json:"revision,omitempty"`
	Type     *GoogleCloudDocumentaiV1beta3DocumentProvenanceTypeEnum `json:"type,omitempty"`
}
