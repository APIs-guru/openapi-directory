package shared

// GoogleCloudDiscoveryengineV1betaDocument
// Document captures all raw metadata information of items to be recommended or searched.
type GoogleCloudDiscoveryengineV1betaDocument struct {
	ID               *string                `json:"id,omitempty"`
	JSONData         *string                `json:"jsonData,omitempty"`
	Name             *string                `json:"name,omitempty"`
	ParentDocumentID *string                `json:"parentDocumentId,omitempty"`
	SchemaID         *string                `json:"schemaId,omitempty"`
	StructData       map[string]interface{} `json:"structData,omitempty"`
}
