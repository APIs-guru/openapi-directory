package shared

type UpdatePageElementTransformRequestApplyModeEnum string

const (
	UpdatePageElementTransformRequestApplyModeEnumApplyModeUnspecified UpdatePageElementTransformRequestApplyModeEnum = "APPLY_MODE_UNSPECIFIED"
	UpdatePageElementTransformRequestApplyModeEnumRelative             UpdatePageElementTransformRequestApplyModeEnum = "RELATIVE"
	UpdatePageElementTransformRequestApplyModeEnumAbsolute             UpdatePageElementTransformRequestApplyModeEnum = "ABSOLUTE"
)

type UpdatePageElementTransformRequest struct {
	ApplyMode *UpdatePageElementTransformRequestApplyModeEnum `json:"applyMode"`
	ObjectID  *string                                         `json:"objectId"`
	Transform *AffineTransform                                `json:"transform"`
}
