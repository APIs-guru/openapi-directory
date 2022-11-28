package shared

// GoogleIdentityAccesscontextmanagerV1AccessLevel
// An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied.
type GoogleIdentityAccesscontextmanagerV1AccessLevel struct {
	Basic       *GoogleIdentityAccesscontextmanagerV1BasicLevel  `json:"basic,omitempty"`
	Custom      *GoogleIdentityAccesscontextmanagerV1CustomLevel `json:"custom,omitempty"`
	Description *string                                          `json:"description,omitempty"`
	Name        *string                                          `json:"name,omitempty"`
	Title       *string                                          `json:"title,omitempty"`
}
