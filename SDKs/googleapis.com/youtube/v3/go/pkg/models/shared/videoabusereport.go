package shared

type VideoAbuseReport struct {
	Comments          *string `json:"comments"`
	Language          *string `json:"language"`
	ReasonID          *string `json:"reasonId"`
	SecondaryReasonID *string `json:"secondaryReasonId"`
	VideoID           *string `json:"videoId"`
}
