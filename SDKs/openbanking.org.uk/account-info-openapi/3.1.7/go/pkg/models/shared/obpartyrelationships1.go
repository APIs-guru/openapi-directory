package shared

// ObPartyRelationships1Account
// Relationship to the Account resource.
type ObPartyRelationships1Account struct {
	ID      string `json:"Id"`
	Related string `json:"Related"`
}

// ObPartyRelationships1
// The Party's relationships with other resources.
type ObPartyRelationships1 struct {
	Account *ObPartyRelationships1Account `json:"Account,omitempty"`
}
