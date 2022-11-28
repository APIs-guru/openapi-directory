package shared

// StretchedPictureFill
// The stretched picture fill. The page or page element is filled entirely with the specified picture. The picture is stretched to fit its container.
type StretchedPictureFill struct {
	ContentURL *string `json:"contentUrl,omitempty"`
	Size       *Size   `json:"size,omitempty"`
}
