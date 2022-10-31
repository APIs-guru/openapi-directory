package shared



type GoogleCloudRetailV2betaRemoveFulfillmentPlacesRequest struct {
    AllowMissing *bool `json:"allowMissing,omitempty"`
    PlaceIds []string `json:"placeIds,omitempty"`
    RemoveTime *string `json:"removeTime,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

