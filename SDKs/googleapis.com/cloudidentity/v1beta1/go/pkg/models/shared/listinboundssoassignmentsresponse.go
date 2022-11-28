package shared

// ListInboundSsoAssignmentsResponse
// Response of the InboundSsoAssignmentsService.ListInboundSsoAssignments method.
type ListInboundSsoAssignmentsResponse struct {
	InboundSsoAssignments []InboundSsoAssignment `json:"inboundSsoAssignments,omitempty"`
	NextPageToken         *string                `json:"nextPageToken,omitempty"`
}
