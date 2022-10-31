package shared

type VideoAbuseReport struct {
	Comments          *string `json:"comments,omitempty"`
	Language          *string `json:"language,omitempty"`
	ReasonID          *string `json:"reasonId,omitempty"`
	SecondaryReasonID *string `json:"secondaryReasonId,omitempty"`
	VideoID           *string `json:"videoId,omitempty"`
}
