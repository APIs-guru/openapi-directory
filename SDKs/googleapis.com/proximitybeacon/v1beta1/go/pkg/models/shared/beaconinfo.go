package shared



type BeaconInfo struct {
    AdvertisedID *AdvertisedID `json:"advertisedId,omitempty"`
    Attachments []AttachmentInfo `json:"attachments,omitempty"`
    BeaconName *string `json:"beaconName,omitempty"`
    
}

