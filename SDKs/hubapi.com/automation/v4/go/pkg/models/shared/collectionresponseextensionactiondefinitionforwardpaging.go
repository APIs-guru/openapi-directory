package shared

type CollectionResponseExtensionActionDefinitionForwardPaging struct {
	Paging  *ForwardPaging              `json:"paging,omitempty"`
	Results []ExtensionActionDefinition `json:"results"`
}
