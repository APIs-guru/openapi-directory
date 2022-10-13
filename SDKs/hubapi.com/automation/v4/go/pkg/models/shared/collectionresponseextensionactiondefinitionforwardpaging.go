package shared

type CollectionResponseExtensionActionDefinitionForwardPaging struct {
	Paging  *ForwardPaging              `json:"paging"`
	Results []ExtensionActionDefinition `json:"results"`
}
