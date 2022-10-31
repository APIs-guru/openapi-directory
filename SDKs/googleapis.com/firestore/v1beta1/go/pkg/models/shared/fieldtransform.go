package shared




type FieldTransformSetToServerValueEnum string

const (
    FieldTransformSetToServerValueEnumServerValueUnspecified FieldTransformSetToServerValueEnum = "SERVER_VALUE_UNSPECIFIED"
FieldTransformSetToServerValueEnumRequestTime FieldTransformSetToServerValueEnum = "REQUEST_TIME"
)


type FieldTransform struct {
    AppendMissingElements *ArrayValue `json:"appendMissingElements,omitempty"`
    FieldPath *string `json:"fieldPath,omitempty"`
    Increment *Value `json:"increment,omitempty"`
    Maximum *Value `json:"maximum,omitempty"`
    Minimum *Value `json:"minimum,omitempty"`
    RemoveAllFromArray *ArrayValue `json:"removeAllFromArray,omitempty"`
    SetToServerValue *FieldTransformSetToServerValueEnum `json:"setToServerValue,omitempty"`
    
}

