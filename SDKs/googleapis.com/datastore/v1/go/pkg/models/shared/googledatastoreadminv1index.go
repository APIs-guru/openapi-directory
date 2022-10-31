package shared




type GoogleDatastoreAdminV1IndexAncestorEnum string

const (
    GoogleDatastoreAdminV1IndexAncestorEnumAncestorModeUnspecified GoogleDatastoreAdminV1IndexAncestorEnum = "ANCESTOR_MODE_UNSPECIFIED"
GoogleDatastoreAdminV1IndexAncestorEnumNone GoogleDatastoreAdminV1IndexAncestorEnum = "NONE"
GoogleDatastoreAdminV1IndexAncestorEnumAllAncestors GoogleDatastoreAdminV1IndexAncestorEnum = "ALL_ANCESTORS"
)



type GoogleDatastoreAdminV1IndexStateEnum string

const (
    GoogleDatastoreAdminV1IndexStateEnumStateUnspecified GoogleDatastoreAdminV1IndexStateEnum = "STATE_UNSPECIFIED"
GoogleDatastoreAdminV1IndexStateEnumCreating GoogleDatastoreAdminV1IndexStateEnum = "CREATING"
GoogleDatastoreAdminV1IndexStateEnumReady GoogleDatastoreAdminV1IndexStateEnum = "READY"
GoogleDatastoreAdminV1IndexStateEnumDeleting GoogleDatastoreAdminV1IndexStateEnum = "DELETING"
GoogleDatastoreAdminV1IndexStateEnumError GoogleDatastoreAdminV1IndexStateEnum = "ERROR"
)


type GoogleDatastoreAdminV1Index struct {
    Ancestor *GoogleDatastoreAdminV1IndexAncestorEnum `json:"ancestor,omitempty"`
    IndexID *string `json:"indexId,omitempty"`
    Kind *string `json:"kind,omitempty"`
    ProjectID *string `json:"projectId,omitempty"`
    Properties []GoogleDatastoreAdminV1IndexedProperty `json:"properties,omitempty"`
    State *GoogleDatastoreAdminV1IndexStateEnum `json:"state,omitempty"`
    
}

