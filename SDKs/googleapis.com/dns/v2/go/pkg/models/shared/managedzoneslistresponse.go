package shared

type ManagedZonesListResponse struct {
	Header        *ResponseHeader `json:"header"`
	Kind          *string         `json:"kind"`
	ManagedZones  []ManagedZone   `json:"managedZones"`
	NextPageToken *string         `json:"nextPageToken"`
}
