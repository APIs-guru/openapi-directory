package shared

type Repo struct {
	MirrorConfig  *MirrorConfig           `json:"mirrorConfig,omitempty"`
	Name          *string                 `json:"name,omitempty"`
	PubsubConfigs map[string]PubsubConfig `json:"pubsubConfigs,omitempty"`
	Size          *string                 `json:"size,omitempty"`
	URL           *string                 `json:"url,omitempty"`
}
