package shared

type GoogleHomeEnterpriseSdmV1ListRoomsResponse struct {
	NextPageToken *string                         `json:"nextPageToken"`
	Rooms         []GoogleHomeEnterpriseSdmV1Room `json:"rooms"`
}
