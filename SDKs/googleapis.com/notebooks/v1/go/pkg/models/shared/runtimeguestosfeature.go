package shared

// RuntimeGuestOsFeature
// Optional. A list of features to enable on the guest operating system. Applicable only for bootable images. Read [Enabling guest operating system features](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images#guest-os-features) to see a list of available options. Guest OS features for boot disk.
type RuntimeGuestOsFeature struct {
	Type *string `json:"type,omitempty"`
}
