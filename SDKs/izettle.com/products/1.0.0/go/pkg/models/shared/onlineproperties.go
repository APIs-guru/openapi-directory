package shared

type OnlinePropertiesStatusEnum string

const (
	OnlinePropertiesStatusEnumActive OnlinePropertiesStatusEnum = "ACTIVE"
	OnlinePropertiesStatusEnumHidden OnlinePropertiesStatusEnum = "HIDDEN"
)

type OnlineProperties struct {
	Description  *string                    `json:"description,omitempty"`
	Presentation *Presentation              `json:"presentation,omitempty"`
	Seo          *SearchEngineOptimization  `json:"seo,omitempty"`
	Shipping     *Shipping                  `json:"shipping,omitempty"`
	Status       OnlinePropertiesStatusEnum `json:"status"`
	Title        *string                    `json:"title,omitempty"`
}
