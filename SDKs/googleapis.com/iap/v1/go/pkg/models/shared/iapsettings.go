package shared

type IapSettings struct {
	AccessSettings      *AccessSettings      `json:"accessSettings"`
	ApplicationSettings *ApplicationSettings `json:"applicationSettings"`
	Name                *string              `json:"name"`
}
