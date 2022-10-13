package shared

type StandardResourceMetadata struct {
	AdditionalAttributes []string          `json:"additionalAttributes"`
	AssetType            *string           `json:"assetType"`
	Description          *string           `json:"description"`
	DisplayName          *string           `json:"displayName"`
	Labels               map[string]string `json:"labels"`
	Location             *string           `json:"location"`
	Name                 *string           `json:"name"`
	NetworkTags          []string          `json:"networkTags"`
	Project              *string           `json:"project"`
}
