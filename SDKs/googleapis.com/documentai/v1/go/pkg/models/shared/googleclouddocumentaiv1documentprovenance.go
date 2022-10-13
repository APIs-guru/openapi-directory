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

type GoogleCloudDocumentaiV1DocumentProvenance struct {
	ID       *int32                                             `json:"id"`
	Parents  []GoogleCloudDocumentaiV1DocumentProvenanceParent  `json:"parents"`
	Revision *int32                                             `json:"revision"`
	Type     *GoogleCloudDocumentaiV1DocumentProvenanceTypeEnum `json:"type"`
}
