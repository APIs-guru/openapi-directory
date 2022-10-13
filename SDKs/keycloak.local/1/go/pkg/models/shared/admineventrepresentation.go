package shared

type AdminEventRepresentation struct {
	AuthDetails    *AuthDetailsRepresentation `json:"authDetails"`
	Error          *string                    `json:"error"`
	OperationType  *string                    `json:"operationType"`
	RealmID        *string                    `json:"realmId"`
	Representation *string                    `json:"representation"`
	ResourcePath   *string                    `json:"resourcePath"`
	ResourceType   *string                    `json:"resourceType"`
	Time           *int64                     `json:"time"`
}
