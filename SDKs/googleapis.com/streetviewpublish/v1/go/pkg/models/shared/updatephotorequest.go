package shared

type UpdatePhotoRequest struct {
	Photo      *Photo  `json:"photo"`
	UpdateMask *string `json:"updateMask"`
}
