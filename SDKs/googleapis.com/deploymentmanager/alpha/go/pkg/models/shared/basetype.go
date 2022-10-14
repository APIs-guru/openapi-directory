package shared

type BaseType struct {
	CollectionOverrides []CollectionOverride `json:"collectionOverrides,omitempty"`
	Credential          *Credential          `json:"credential,omitempty"`
	DescriptorURL       *string              `json:"descriptorUrl,omitempty"`
	Options             *Options             `json:"options,omitempty"`
}
