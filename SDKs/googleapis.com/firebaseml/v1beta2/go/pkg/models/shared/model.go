package shared



type Model struct {
    ActiveOperations []Operation `json:"activeOperations,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Etag *string `json:"etag,omitempty"`
    ModelHash *string `json:"modelHash,omitempty"`
    Name *string `json:"name,omitempty"`
    State *ModelState `json:"state,omitempty"`
    Tags []string `json:"tags,omitempty"`
    TfliteModel *TfLiteModel `json:"tfliteModel,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

