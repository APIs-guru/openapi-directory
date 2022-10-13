package shared

type Repo struct {
	MirrorConfig  *MirrorConfig           `json:"mirrorConfig"`
	Name          *string                 `json:"name"`
	PubsubConfigs map[string]PubsubConfig `json:"pubsubConfigs"`
	Size          *string                 `json:"size"`
	URL           *string                 `json:"url"`
}
