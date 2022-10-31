package shared



type GoogleHomeEnterpriseSdmV1ListRoomsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Rooms []GoogleHomeEnterpriseSdmV1Room `json:"rooms,omitempty"`
    
}

