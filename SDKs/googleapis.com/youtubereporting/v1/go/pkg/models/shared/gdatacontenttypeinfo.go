package shared

type GdataContentTypeInfo struct {
	BestGuess    *string `json:"bestGuess"`
	FromBytes    *string `json:"fromBytes"`
	FromFileName *string `json:"fromFileName"`
	FromHeader   *string `json:"fromHeader"`
	FromURLPath  *string `json:"fromUrlPath"`
}
