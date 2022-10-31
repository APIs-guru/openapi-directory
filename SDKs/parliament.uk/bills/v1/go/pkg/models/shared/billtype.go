package shared



type BillType struct {
    Category *BillTypeCategoryEnum `json:"category,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *int32 `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

