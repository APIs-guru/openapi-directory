package shared

type ItemMetadata struct {
	ContainerName         *string                `json:"containerName,omitempty"`
	ContentLanguage       *string                `json:"contentLanguage,omitempty"`
	ContextAttributes     []ContextAttribute     `json:"contextAttributes,omitempty"`
	CreateTime            *string                `json:"createTime,omitempty"`
	Hash                  *string                `json:"hash,omitempty"`
	Interactions          []Interaction          `json:"interactions,omitempty"`
	Keywords              []string               `json:"keywords,omitempty"`
	MimeType              *string                `json:"mimeType,omitempty"`
	ObjectType            *string                `json:"objectType,omitempty"`
	SearchQualityMetadata *SearchQualityMetadata `json:"searchQualityMetadata,omitempty"`
	SourceRepositoryURL   *string                `json:"sourceRepositoryUrl,omitempty"`
	Title                 *string                `json:"title,omitempty"`
	UpdateTime            *string                `json:"updateTime,omitempty"`
}
