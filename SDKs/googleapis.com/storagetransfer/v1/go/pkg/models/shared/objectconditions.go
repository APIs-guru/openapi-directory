package shared

// ObjectConditions
// Conditions that determine which objects are transferred. Applies only to Cloud Data Sources such as S3, Azure, and Cloud Storage. The "last modification time" refers to the time of the last change to the object's content or metadata — specifically, this is the `updated` property of Cloud Storage objects, the `LastModified` field of S3 objects, and the `Last-Modified` header of Azure blobs. Transfers with a PosixFilesystem source or destination don't support `ObjectConditions`.
type ObjectConditions struct {
	ExcludePrefixes                     []string `json:"excludePrefixes,omitempty"`
	IncludePrefixes                     []string `json:"includePrefixes,omitempty"`
	LastModifiedBefore                  *string  `json:"lastModifiedBefore,omitempty"`
	LastModifiedSince                   *string  `json:"lastModifiedSince,omitempty"`
	MaxTimeElapsedSinceLastModification *string  `json:"maxTimeElapsedSinceLastModification,omitempty"`
	MinTimeElapsedSinceLastModification *string  `json:"minTimeElapsedSinceLastModification,omitempty"`
}
