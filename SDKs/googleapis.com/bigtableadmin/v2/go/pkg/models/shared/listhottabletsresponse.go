package shared



type ListHotTabletsResponse struct {
    HotTablets []HotTablet `json:"hotTablets,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

