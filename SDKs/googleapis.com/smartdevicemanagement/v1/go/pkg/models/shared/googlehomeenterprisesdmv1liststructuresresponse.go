package shared

// GoogleHomeEnterpriseSdmV1ListStructuresResponse
// Response message for SmartDeviceManagementService.ListStructures
type GoogleHomeEnterpriseSdmV1ListStructuresResponse struct {
	NextPageToken *string                              `json:"nextPageToken,omitempty"`
	Structures    []GoogleHomeEnterpriseSdmV1Structure `json:"structures,omitempty"`
}
