package shared



type GoogleDatastoreAdminV1ListIndexesResponse struct {
    Indexes []GoogleDatastoreAdminV1Index `json:"indexes,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

