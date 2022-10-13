package shared

type ListInboundSsoAssignmentsResponse struct {
	InboundSsoAssignments []InboundSsoAssignment `json:"inboundSsoAssignments"`
	NextPageToken         *string                `json:"nextPageToken"`
}
