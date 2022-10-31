package shared

type BaseItemPersonImageBlurHashes struct {
	Art        map[string]string `json:"Art,omitempty"`
	Backdrop   map[string]string `json:"Backdrop,omitempty"`
	Banner     map[string]string `json:"Banner,omitempty"`
	Box        map[string]string `json:"Box,omitempty"`
	BoxRear    map[string]string `json:"BoxRear,omitempty"`
	Chapter    map[string]string `json:"Chapter,omitempty"`
	Disc       map[string]string `json:"Disc,omitempty"`
	Logo       map[string]string `json:"Logo,omitempty"`
	Menu       map[string]string `json:"Menu,omitempty"`
	Primary    map[string]string `json:"Primary,omitempty"`
	Profile    map[string]string `json:"Profile,omitempty"`
	Screenshot map[string]string `json:"Screenshot,omitempty"`
	Thumb      map[string]string `json:"Thumb,omitempty"`
}

type BaseItemPerson struct {
	ID              *string                        `json:"Id,omitempty"`
	ImageBlurHashes *BaseItemPersonImageBlurHashes `json:"ImageBlurHashes,omitempty"`
	Name            *string                        `json:"Name,omitempty"`
	PrimaryImageTag *string                        `json:"PrimaryImageTag,omitempty"`
	Role            *string                        `json:"Role,omitempty"`
	Type            *string                        `json:"Type,omitempty"`
}
