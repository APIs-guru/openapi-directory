package shared

type Tag struct {
	Description *string `json:"Description,omitempty" form:"name=Description"`
	ID          *string `json:"Id,omitempty" form:"name=Id"`
	ImageCount  *int32  `json:"ImageCount,omitempty" form:"name=ImageCount"`
	Name        *string `json:"Name,omitempty" form:"name=Name"`
}
