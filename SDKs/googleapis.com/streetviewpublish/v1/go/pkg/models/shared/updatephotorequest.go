package shared

type UpdatePhotoRequest struct {
	Photo      *Photo  `json:"photo,omitempty"`
	UpdateMask *string `json:"updateMask,omitempty"`
}
