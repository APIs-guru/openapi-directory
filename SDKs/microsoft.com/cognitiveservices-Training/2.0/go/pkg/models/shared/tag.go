package shared



type Tag struct {
    Description *string `json:"description,omitempty" form:"name=description"`
    ID *string `json:"id,omitempty" form:"name=id"`
    ImageCount *int32 `json:"imageCount,omitempty" form:"name=imageCount"`
    Name *string `json:"name,omitempty" form:"name=name"`
    
}

