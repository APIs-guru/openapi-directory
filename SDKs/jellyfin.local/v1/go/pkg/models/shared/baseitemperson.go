package shared

type BaseItemPersonImageBlurHashes struct {
	Art        map[string]string `json:"Art"`
	Backdrop   map[string]string `json:"Backdrop"`
	Banner     map[string]string `json:"Banner"`
	Box        map[string]string `json:"Box"`
	BoxRear    map[string]string `json:"BoxRear"`
	Chapter    map[string]string `json:"Chapter"`
	Disc       map[string]string `json:"Disc"`
	Logo       map[string]string `json:"Logo"`
	Menu       map[string]string `json:"Menu"`
	Primary    map[string]string `json:"Primary"`
	Profile    map[string]string `json:"Profile"`
	Screenshot map[string]string `json:"Screenshot"`
	Thumb      map[string]string `json:"Thumb"`
}

type BaseItemPerson struct {
	ID              *string                        `json:"Id"`
	ImageBlurHashes *BaseItemPersonImageBlurHashes `json:"ImageBlurHashes"`
	Name            *string                        `json:"Name"`
	PrimaryImageTag *string                        `json:"PrimaryImageTag"`
	Role            *string                        `json:"Role"`
	Type            *string                        `json:"Type"`
}
