package shared



type GuestAttributes struct {
    QueryPath *string `json:"queryPath,omitempty"`
    QueryValue *GuestAttributesValue `json:"queryValue,omitempty"`
    
}

