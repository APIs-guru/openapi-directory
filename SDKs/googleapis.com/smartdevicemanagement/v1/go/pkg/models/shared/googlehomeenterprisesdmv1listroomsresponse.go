package shared

// GoogleHomeEnterpriseSdmV1ListRoomsResponse
// Response message for SmartDeviceManagementService.ListRooms
type GoogleHomeEnterpriseSdmV1ListRoomsResponse struct {
	NextPageToken *string                         `json:"nextPageToken,omitempty"`
	Rooms         []GoogleHomeEnterpriseSdmV1Room `json:"rooms,omitempty"`
}
