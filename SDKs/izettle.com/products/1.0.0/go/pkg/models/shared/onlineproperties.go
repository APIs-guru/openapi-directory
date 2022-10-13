package shared

type OnlinePropertiesStatusEnum string

const (
	OnlinePropertiesStatusEnumActive OnlinePropertiesStatusEnum = "ACTIVE"
	OnlinePropertiesStatusEnumHidden OnlinePropertiesStatusEnum = "HIDDEN"
)

type OnlineProperties struct {
	Description  *string                    `json:"description"`
	Presentation *Presentation              `json:"presentation"`
	Seo          *SearchEngineOptimization  `json:"seo"`
	Shipping     *Shipping                  `json:"shipping"`
	Status       OnlinePropertiesStatusEnum `json:"status"`
	Title        *string                    `json:"title"`
}
