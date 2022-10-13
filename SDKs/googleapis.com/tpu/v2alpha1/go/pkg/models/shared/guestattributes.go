package shared

type GuestAttributes struct {
	QueryPath  *string               `json:"queryPath"`
	QueryValue *GuestAttributesValue `json:"queryValue"`
}
