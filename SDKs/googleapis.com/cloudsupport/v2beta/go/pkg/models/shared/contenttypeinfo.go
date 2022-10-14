package shared

type ContentTypeInfo struct {
	BestGuess    *string `json:"bestGuess,omitempty"`
	FromBytes    *string `json:"fromBytes,omitempty"`
	FromFileName *string `json:"fromFileName,omitempty"`
	FromHeader   *string `json:"fromHeader,omitempty"`
	FromURLPath  *string `json:"fromUrlPath,omitempty"`
}
