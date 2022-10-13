package shared

type TextContent struct {
	Lists        map[string]List `json:"lists"`
	TextElements []TextElement   `json:"textElements"`
}
