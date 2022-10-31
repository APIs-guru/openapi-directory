package shared



type GoogleCloudChannelV1ListOffersResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Offers []GoogleCloudChannelV1Offer `json:"offers,omitempty"`
    
}

