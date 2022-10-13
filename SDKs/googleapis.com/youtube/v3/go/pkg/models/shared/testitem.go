package shared

type TestItem struct {
	FeaturedPart *bool                  `json:"featuredPart"`
	Gaia         *string                `json:"gaia"`
	ID           *string                `json:"id"`
	Snippet      map[string]interface{} `json:"snippet"`
}
