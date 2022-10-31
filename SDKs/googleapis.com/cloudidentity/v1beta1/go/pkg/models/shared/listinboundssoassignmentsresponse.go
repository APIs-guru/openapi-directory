package shared

type ListInboundSsoAssignmentsResponse struct {
	InboundSsoAssignments []InboundSsoAssignment `json:"inboundSsoAssignments,omitempty"`
	NextPageToken         *string                `json:"nextPageToken,omitempty"`
}
