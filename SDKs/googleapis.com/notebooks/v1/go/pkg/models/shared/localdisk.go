package shared

type LocalDisk struct {
	AutoDelete       *bool                      `json:"autoDelete"`
	Boot             *bool                      `json:"boot"`
	DeviceName       *string                    `json:"deviceName"`
	GuestOsFeatures  []RuntimeGuestOsFeature    `json:"guestOsFeatures"`
	Index            *int32                     `json:"index"`
	InitializeParams *LocalDiskInitializeParams `json:"initializeParams"`
	Interface        *string                    `json:"interface"`
	Kind             *string                    `json:"kind"`
	Licenses         []string                   `json:"licenses"`
	Mode             *string                    `json:"mode"`
	Source           *string                    `json:"source"`
	Type             *string                    `json:"type"`
}
