package shared

type Categories struct {
	Accessibility *LighthouseCategoryV5 `json:"accessibility"`
	BestPractices *LighthouseCategoryV5 `json:"best-practices"`
	Performance   *LighthouseCategoryV5 `json:"performance"`
	Pwa           *LighthouseCategoryV5 `json:"pwa"`
	Seo           *LighthouseCategoryV5 `json:"seo"`
}
