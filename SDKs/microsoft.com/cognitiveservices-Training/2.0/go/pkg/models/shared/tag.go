package shared

type Tag struct {
	Description *string `json:"description" form:"name=description"`
	ID          *string `json:"id" form:"name=id"`
	ImageCount  *int32  `json:"imageCount" form:"name=imageCount"`
	Name        *string `json:"name" form:"name=name"`
}
