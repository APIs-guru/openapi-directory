package shared

type GoogleIdentityAccesscontextmanagerV1AccessLevel struct {
	Basic       *GoogleIdentityAccesscontextmanagerV1BasicLevel  `json:"basic,omitempty"`
	Custom      *GoogleIdentityAccesscontextmanagerV1CustomLevel `json:"custom,omitempty"`
	Description *string                                          `json:"description,omitempty"`
	Name        *string                                          `json:"name,omitempty"`
	Title       *string                                          `json:"title,omitempty"`
}
