package shared

type FieldTransformSetToServerValueEnum string

const (
	FieldTransformSetToServerValueEnumServerValueUnspecified FieldTransformSetToServerValueEnum = "SERVER_VALUE_UNSPECIFIED"
	FieldTransformSetToServerValueEnumRequestTime            FieldTransformSetToServerValueEnum = "REQUEST_TIME"
)

type FieldTransform struct {
	AppendMissingElements *ArrayValue                         `json:"appendMissingElements"`
	FieldPath             *string                             `json:"fieldPath"`
	Increment             *Value                              `json:"increment"`
	Maximum               *Value                              `json:"maximum"`
	Minimum               *Value                              `json:"minimum"`
	RemoveAllFromArray    *ArrayValue                         `json:"removeAllFromArray"`
	SetToServerValue      *FieldTransformSetToServerValueEnum `json:"setToServerValue"`
}
