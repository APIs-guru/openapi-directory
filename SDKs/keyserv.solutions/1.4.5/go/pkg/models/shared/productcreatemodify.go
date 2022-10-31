package shared



type ProductCreateModify struct {
    Custom *interface{} `json:"custom,omitempty"`
    Key *string `json:"key,omitempty"`
    Name *string `json:"name,omitempty"`
    Serial *string `json:"serial,omitempty"`
    
}

