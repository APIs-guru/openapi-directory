package shared

// BaseType
// BaseType that describes a service-backed Type.
type BaseType struct {
	CollectionOverrides []CollectionOverride `json:"collectionOverrides,omitempty"`
	Credential          *Credential          `json:"credential,omitempty"`
	DescriptorURL       *string              `json:"descriptorUrl,omitempty"`
	Options             *Options             `json:"options,omitempty"`
}
