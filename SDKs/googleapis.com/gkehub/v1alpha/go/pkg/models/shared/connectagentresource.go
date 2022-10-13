package shared

type ConnectAgentResource struct {
	Manifest *string   `json:"manifest"`
	Type     *TypeMeta `json:"type"`
}
