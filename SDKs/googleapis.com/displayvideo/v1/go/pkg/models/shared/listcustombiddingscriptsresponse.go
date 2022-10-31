package shared



type ListCustomBiddingScriptsResponse struct {
    CustomBiddingScripts []CustomBiddingScript `json:"customBiddingScripts,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

