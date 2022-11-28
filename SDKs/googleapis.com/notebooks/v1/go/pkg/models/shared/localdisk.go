package shared

// LocalDisk
// A Local attached disk resource.
type LocalDisk struct {
	AutoDelete       *bool                      `json:"autoDelete,omitempty"`
	Boot             *bool                      `json:"boot,omitempty"`
	DeviceName       *string                    `json:"deviceName,omitempty"`
	GuestOsFeatures  []RuntimeGuestOsFeature    `json:"guestOsFeatures,omitempty"`
	Index            *int32                     `json:"index,omitempty"`
	InitializeParams *LocalDiskInitializeParams `json:"initializeParams,omitempty"`
	Interface        *string                    `json:"interface,omitempty"`
	Kind             *string                    `json:"kind,omitempty"`
	Licenses         []string                   `json:"licenses,omitempty"`
	Mode             *string                    `json:"mode,omitempty"`
	Source           *string                    `json:"source,omitempty"`
	Type             *string                    `json:"type,omitempty"`
}

// LocalDiskInput
// A Local attached disk resource.
type LocalDiskInput struct {
	InitializeParams *LocalDiskInitializeParams `json:"initializeParams,omitempty"`
	Interface        *string                    `json:"interface,omitempty"`
	Mode             *string                    `json:"mode,omitempty"`
	Source           *string                    `json:"source,omitempty"`
	Type             *string                    `json:"type,omitempty"`
}
