package shared




type GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum string

const (
    GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnumArrayConfigUnspecified GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum = "ARRAY_CONFIG_UNSPECIFIED"
GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnumContains GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum = "CONTAINS"
)



type GoogleFirestoreAdminV1beta2IndexFieldOrderEnum string

const (
    GoogleFirestoreAdminV1beta2IndexFieldOrderEnumOrderUnspecified GoogleFirestoreAdminV1beta2IndexFieldOrderEnum = "ORDER_UNSPECIFIED"
GoogleFirestoreAdminV1beta2IndexFieldOrderEnumAscending GoogleFirestoreAdminV1beta2IndexFieldOrderEnum = "ASCENDING"
GoogleFirestoreAdminV1beta2IndexFieldOrderEnumDescending GoogleFirestoreAdminV1beta2IndexFieldOrderEnum = "DESCENDING"
)


type GoogleFirestoreAdminV1beta2IndexField struct {
    ArrayConfig *GoogleFirestoreAdminV1beta2IndexFieldArrayConfigEnum `json:"arrayConfig,omitempty"`
    FieldPath *string `json:"fieldPath,omitempty"`
    Order *GoogleFirestoreAdminV1beta2IndexFieldOrderEnum `json:"order,omitempty"`
    
}

