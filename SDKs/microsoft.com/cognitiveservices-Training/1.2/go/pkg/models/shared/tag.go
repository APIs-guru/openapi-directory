package shared

type Tag struct {
	Description *string `json:"Description" form:"name=Description"`
	ID          *string `json:"Id" form:"name=Id"`
	ImageCount  *int32  `json:"ImageCount" form:"name=ImageCount"`
	Name        *string `json:"Name" form:"name=Name"`
}
