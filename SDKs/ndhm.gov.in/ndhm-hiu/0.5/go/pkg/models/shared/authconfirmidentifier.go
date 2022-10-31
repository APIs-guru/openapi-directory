package shared

type AuthConfirmIdentifier struct {
	Type  AuthConfirmIdentifierTypeEnum `json:"type"`
	Value string                        `json:"value"`
}
