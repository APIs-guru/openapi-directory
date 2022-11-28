package shared

type GoogleCloudDocumentaiV1DocumentProvenanceTypeEnum string

const (
	GoogleCloudDocumentaiV1DocumentProvenanceTypeEnumOperationTypeUnspecified GoogleCloudDocumentaiV1DocumentProvenanceTypeEnum = "OPERATION_TYPE_UNSPECIFIED"
	GoogleCloudDocumentaiV1DocumentProvenanceTypeEnumAdd                      GoogleCloudDocumentaiV1DocumentProvenanceTypeEnum = "ADD"
	GoogleCloudDocumentaiV1DocumentProvenanceTypeEnumRemove                   GoogleCloudDocumentaiV1DocumentProvenanceTypeEnum = "REMOVE"
	GoogleCloudDocumentaiV1DocumentProvenanceTypeEnumReplace                  GoogleCloudDocumentaiV1DocumentProvenanceTypeEnum = "REPLACE"
	GoogleCloudDocumentaiV1DocumentProvenanceTypeEnumEvalRequested            GoogleCloudDocumentaiV1DocumentProvenanceTypeEnum = "EVAL_REQUESTED"
	GoogleCloudDocumentaiV1DocumentProvenanceTypeEnumEvalApproved             GoogleCloudDocumentaiV1DocumentProvenanceTypeEnum = "EVAL_APPROVED"
	GoogleCloudDocumentaiV1DocumentProvenanceTypeEnumEvalSkipped              GoogleCloudDocumentaiV1DocumentProvenanceTypeEnum = "EVAL_SKIPPED"
)

// GoogleCloudDocumentaiV1DocumentProvenance
// Structure to identify provenance relationships between annotations in different revisions.
type GoogleCloudDocumentaiV1DocumentProvenance struct {
	ID       *int32                                             `json:"id,omitempty"`
	Parents  []GoogleCloudDocumentaiV1DocumentProvenanceParent  `json:"parents,omitempty"`
	Revision *int32                                             `json:"revision,omitempty"`
	Type     *GoogleCloudDocumentaiV1DocumentProvenanceTypeEnum `json:"type,omitempty"`
}
