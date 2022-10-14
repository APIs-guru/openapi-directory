package shared

type Categories struct {
	Accessibility *LighthouseCategoryV5 `json:"accessibility,omitempty"`
	BestPractices *LighthouseCategoryV5 `json:"best-practices,omitempty"`
	Performance   *LighthouseCategoryV5 `json:"performance,omitempty"`
	Pwa           *LighthouseCategoryV5 `json:"pwa,omitempty"`
	Seo           *LighthouseCategoryV5 `json:"seo,omitempty"`
}
