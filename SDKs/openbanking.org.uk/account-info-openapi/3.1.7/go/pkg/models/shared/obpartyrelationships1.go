package shared



type ObPartyRelationships1Account struct {
    ID string `json:"Id"`
    Related string `json:"Related"`
    
}

type ObPartyRelationships1 struct {
    Account *ObPartyRelationships1Account `json:"Account,omitempty"`
    
}

