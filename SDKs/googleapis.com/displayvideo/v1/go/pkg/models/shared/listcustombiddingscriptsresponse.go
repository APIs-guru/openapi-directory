package shared

type ListCustomBiddingScriptsResponse struct {
	CustomBiddingScripts []CustomBiddingScript `json:"customBiddingScripts"`
	NextPageToken        *string               `json:"nextPageToken"`
}
