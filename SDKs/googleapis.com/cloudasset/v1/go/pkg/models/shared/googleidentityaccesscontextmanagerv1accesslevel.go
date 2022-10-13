package shared

type GoogleIdentityAccesscontextmanagerV1AccessLevel struct {
	Basic       *GoogleIdentityAccesscontextmanagerV1BasicLevel  `json:"basic"`
	Custom      *GoogleIdentityAccesscontextmanagerV1CustomLevel `json:"custom"`
	Description *string                                          `json:"description"`
	Name        *string                                          `json:"name"`
	Title       *string                                          `json:"title"`
}
