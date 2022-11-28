package shared

// QueryTestablePermissionsRequest
// A request to get permissions which can be tested on a resource.
type QueryTestablePermissionsRequest struct {
	FullResourceName *string `json:"fullResourceName,omitempty"`
	PageSize         *int32  `json:"pageSize,omitempty"`
	PageToken        *string `json:"pageToken,omitempty"`
}
