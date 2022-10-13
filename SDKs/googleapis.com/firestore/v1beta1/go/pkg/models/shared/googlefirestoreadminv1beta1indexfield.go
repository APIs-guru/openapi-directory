package shared

type GoogleFirestoreAdminV1beta1IndexFieldModeEnum string

const (
	GoogleFirestoreAdminV1beta1IndexFieldModeEnumModeUnspecified GoogleFirestoreAdminV1beta1IndexFieldModeEnum = "MODE_UNSPECIFIED"
	GoogleFirestoreAdminV1beta1IndexFieldModeEnumAscending       GoogleFirestoreAdminV1beta1IndexFieldModeEnum = "ASCENDING"
	GoogleFirestoreAdminV1beta1IndexFieldModeEnumDescending      GoogleFirestoreAdminV1beta1IndexFieldModeEnum = "DESCENDING"
	GoogleFirestoreAdminV1beta1IndexFieldModeEnumArrayContains   GoogleFirestoreAdminV1beta1IndexFieldModeEnum = "ARRAY_CONTAINS"
)

type GoogleFirestoreAdminV1beta1IndexField struct {
	FieldPath *string                                        `json:"fieldPath"`
	Mode      *GoogleFirestoreAdminV1beta1IndexFieldModeEnum `json:"mode"`
}
