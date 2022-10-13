package shared

type BeaconInfo struct {
	AdvertisedID *AdvertisedID    `json:"advertisedId"`
	Attachments  []AttachmentInfo `json:"attachments"`
	BeaconName   *string          `json:"beaconName"`
}
