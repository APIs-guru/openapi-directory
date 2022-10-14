package shared

type LicenseAssignmentList struct {
	Etag          *string             `json:"etag,omitempty"`
	Items         []LicenseAssignment `json:"items,omitempty"`
	Kind          *string             `json:"kind,omitempty"`
	NextPageToken *string             `json:"nextPageToken,omitempty"`
}
