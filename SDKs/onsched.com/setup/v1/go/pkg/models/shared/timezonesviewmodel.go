package shared

type TimezonesViewModel struct {
	Name          *string `json:"name"`
	Region        *string `json:"region"`
	TimezoneIanna *string `json:"timezoneIanna"`
	TzOffset      *int32  `json:"tzOffset"`
}
