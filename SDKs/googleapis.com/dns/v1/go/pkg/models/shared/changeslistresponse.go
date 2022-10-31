package shared



type ChangesListResponse struct {
    Changes []Change `json:"changes,omitempty"`
    Header *ResponseHeader `json:"header,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

