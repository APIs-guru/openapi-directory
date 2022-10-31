package shared

type GoogleFirestoreAdminV1IndexFieldArrayConfigEnum string

const (
	GoogleFirestoreAdminV1IndexFieldArrayConfigEnumArrayConfigUnspecified GoogleFirestoreAdminV1IndexFieldArrayConfigEnum = "ARRAY_CONFIG_UNSPECIFIED"
	GoogleFirestoreAdminV1IndexFieldArrayConfigEnumContains               GoogleFirestoreAdminV1IndexFieldArrayConfigEnum = "CONTAINS"
)

type GoogleFirestoreAdminV1IndexFieldOrderEnum string

const (
	GoogleFirestoreAdminV1IndexFieldOrderEnumOrderUnspecified GoogleFirestoreAdminV1IndexFieldOrderEnum = "ORDER_UNSPECIFIED"
	GoogleFirestoreAdminV1IndexFieldOrderEnumAscending        GoogleFirestoreAdminV1IndexFieldOrderEnum = "ASCENDING"
	GoogleFirestoreAdminV1IndexFieldOrderEnumDescending       GoogleFirestoreAdminV1IndexFieldOrderEnum = "DESCENDING"
)

type GoogleFirestoreAdminV1IndexField struct {
	ArrayConfig *GoogleFirestoreAdminV1IndexFieldArrayConfigEnum `json:"arrayConfig,omitempty"`
	FieldPath   *string                                          `json:"fieldPath,omitempty"`
	Order       *GoogleFirestoreAdminV1IndexFieldOrderEnum       `json:"order,omitempty"`
}
