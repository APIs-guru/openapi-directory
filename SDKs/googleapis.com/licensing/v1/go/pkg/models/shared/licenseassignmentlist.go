package shared

type LicenseAssignmentList struct {
	Etag          *string             `json:"etag"`
	Items         []LicenseAssignment `json:"items"`
	Kind          *string             `json:"kind"`
	NextPageToken *string             `json:"nextPageToken"`
}
