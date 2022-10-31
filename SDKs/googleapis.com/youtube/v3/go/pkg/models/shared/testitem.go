package shared

type TestItem struct {
	FeaturedPart *bool                  `json:"featuredPart,omitempty"`
	Gaia         *string                `json:"gaia,omitempty"`
	ID           *string                `json:"id,omitempty"`
	Snippet      map[string]interface{} `json:"snippet,omitempty"`
}
