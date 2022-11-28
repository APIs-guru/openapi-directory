package shared

// CreateCustomClassRequest
// Message sent by the client for the `CreateCustomClass` method.
type CreateCustomClassRequest struct {
	CustomClass   *CustomClass `json:"customClass,omitempty"`
	CustomClassID *string      `json:"customClassId,omitempty"`
}
