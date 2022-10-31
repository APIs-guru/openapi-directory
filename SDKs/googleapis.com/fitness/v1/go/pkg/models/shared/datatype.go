package shared



type DataType struct {
    Field []DataTypeField `json:"field,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

