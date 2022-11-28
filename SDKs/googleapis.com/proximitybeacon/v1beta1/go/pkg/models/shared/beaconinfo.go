package shared

// BeaconInfo
// A subset of beacon information served via the `beaconinfo.getforobserved` method, which you call when users of your app encounter your beacons.
type BeaconInfo struct {
	AdvertisedID *AdvertisedID    `json:"advertisedId,omitempty"`
	Attachments  []AttachmentInfo `json:"attachments,omitempty"`
	BeaconName   *string          `json:"beaconName,omitempty"`
}
