package shared

type GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnum string

const (
	GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnumOperationTypeUnspecified GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnum = "OPERATION_TYPE_UNSPECIFIED"
	GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnumAdd                      GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnum = "ADD"
	GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnumRemove                   GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnum = "REMOVE"
	GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnumReplace                  GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnum = "REPLACE"
	GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnumEvalRequested            GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnum = "EVAL_REQUESTED"
	GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnumEvalApproved             GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnum = "EVAL_APPROVED"
	GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnumEvalSkipped              GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnum = "EVAL_SKIPPED"
)

type GoogleCloudDocumentaiV1beta2DocumentProvenance struct {
	ID       *int32                                                  `json:"id"`
	Parents  []GoogleCloudDocumentaiV1beta2DocumentProvenanceParent  `json:"parents"`
	Revision *int32                                                  `json:"revision"`
	Type     *GoogleCloudDocumentaiV1beta2DocumentProvenanceTypeEnum `json:"type"`
}
