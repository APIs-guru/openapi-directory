package shared

type ProfileInfoRepresentation struct {
	DisabledFeatures     []string `json:"disabledFeatures"`
	ExperimentalFeatures []string `json:"experimentalFeatures"`
	Name                 *string  `json:"name"`
	PreviewFeatures      []string `json:"previewFeatures"`
}
