package shared

type GoogleCloudDialogflowV2IntentParameter struct {
	DefaultValue          *string  `json:"defaultValue"`
	DisplayName           *string  `json:"displayName"`
	EntityTypeDisplayName *string  `json:"entityTypeDisplayName"`
	IsList                *bool    `json:"isList"`
	Mandatory             *bool    `json:"mandatory"`
	Name                  *string  `json:"name"`
	Prompts               []string `json:"prompts"`
	Value                 *string  `json:"value"`
}
