package shared



type ACL struct {
    Etag *string `json:"etag,omitempty"`
    Items []ACLRule `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    NextSyncToken *string `json:"nextSyncToken,omitempty"`
    
}

