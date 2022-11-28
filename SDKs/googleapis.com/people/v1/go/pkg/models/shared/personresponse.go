package shared

// PersonResponse
// The response for a single person
type PersonResponse struct {
	HTTPStatusCode        *int32  `json:"httpStatusCode,omitempty"`
	Person                *Person `json:"person,omitempty"`
	RequestedResourceName *string `json:"requestedResourceName,omitempty"`
	Status                *Status `json:"status,omitempty"`
}
