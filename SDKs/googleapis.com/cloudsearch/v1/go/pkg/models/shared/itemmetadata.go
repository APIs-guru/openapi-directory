package shared

type ItemMetadata struct {
	ContainerName         *string                `json:"containerName"`
	ContentLanguage       *string                `json:"contentLanguage"`
	ContextAttributes     []ContextAttribute     `json:"contextAttributes"`
	CreateTime            *string                `json:"createTime"`
	Hash                  *string                `json:"hash"`
	Interactions          []Interaction          `json:"interactions"`
	Keywords              []string               `json:"keywords"`
	MimeType              *string                `json:"mimeType"`
	ObjectType            *string                `json:"objectType"`
	SearchQualityMetadata *SearchQualityMetadata `json:"searchQualityMetadata"`
	SourceRepositoryURL   *string                `json:"sourceRepositoryUrl"`
	Title                 *string                `json:"title"`
	UpdateTime            *string                `json:"updateTime"`
}
