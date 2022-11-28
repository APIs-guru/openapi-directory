package shared

// CardFetchBodyPatch
// Variant of CardFetchBody with fields as optional for patches
type CardFetchBodyPatch struct {
	ObjectTypes []CardObjectTypeBody `json:"objectTypes"`
	TargetURL   *string              `json:"targetUrl,omitempty"`
}
