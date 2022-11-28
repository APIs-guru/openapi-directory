package shared

// ComponentSource
// Description of an interstitial value between transforms in an execution stage.
type ComponentSource struct {
	Name                          *string `json:"name,omitempty"`
	OriginalTransformOrCollection *string `json:"originalTransformOrCollection,omitempty"`
	UserName                      *string `json:"userName,omitempty"`
}
