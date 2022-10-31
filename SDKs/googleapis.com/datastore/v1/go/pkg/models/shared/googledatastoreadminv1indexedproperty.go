package shared




type GoogleDatastoreAdminV1IndexedPropertyDirectionEnum string

const (
    GoogleDatastoreAdminV1IndexedPropertyDirectionEnumDirectionUnspecified GoogleDatastoreAdminV1IndexedPropertyDirectionEnum = "DIRECTION_UNSPECIFIED"
GoogleDatastoreAdminV1IndexedPropertyDirectionEnumAscending GoogleDatastoreAdminV1IndexedPropertyDirectionEnum = "ASCENDING"
GoogleDatastoreAdminV1IndexedPropertyDirectionEnumDescending GoogleDatastoreAdminV1IndexedPropertyDirectionEnum = "DESCENDING"
)


type GoogleDatastoreAdminV1IndexedProperty struct {
    Direction *GoogleDatastoreAdminV1IndexedPropertyDirectionEnum `json:"direction,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

