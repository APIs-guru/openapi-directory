package shared



type CreateCustomClassRequest struct {
    CustomClass *CustomClass `json:"customClass,omitempty"`
    CustomClassID *string `json:"customClassId,omitempty"`
    
}

