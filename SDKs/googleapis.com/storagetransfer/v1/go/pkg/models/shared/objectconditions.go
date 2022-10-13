package shared

type ObjectConditions struct {
	ExcludePrefixes                     []string `json:"excludePrefixes"`
	IncludePrefixes                     []string `json:"includePrefixes"`
	LastModifiedBefore                  *string  `json:"lastModifiedBefore"`
	LastModifiedSince                   *string  `json:"lastModifiedSince"`
	MaxTimeElapsedSinceLastModification *string  `json:"maxTimeElapsedSinceLastModification"`
	MinTimeElapsedSinceLastModification *string  `json:"minTimeElapsedSinceLastModification"`
}
