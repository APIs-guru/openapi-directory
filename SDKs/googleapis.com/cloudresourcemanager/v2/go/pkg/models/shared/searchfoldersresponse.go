package shared



type SearchFoldersResponse struct {
    Folders []Folder `json:"folders,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

