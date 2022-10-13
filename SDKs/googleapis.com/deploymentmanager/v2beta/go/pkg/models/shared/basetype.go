package shared

type BaseType struct {
	CollectionOverrides []CollectionOverride `json:"collectionOverrides"`
	Credential          *Credential          `json:"credential"`
	DescriptorURL       *string              `json:"descriptorUrl"`
	Options             *Options             `json:"options"`
}
