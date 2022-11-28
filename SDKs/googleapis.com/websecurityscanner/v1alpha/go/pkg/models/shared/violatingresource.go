package shared

// ViolatingResource
// Information regarding any resource causing the vulnerability such as JavaScript sources, image, audio files, etc.
type ViolatingResource struct {
	ContentType *string `json:"contentType,omitempty"`
	ResourceURL *string `json:"resourceUrl,omitempty"`
}
