package shared




type UpdatePageElementTransformRequestApplyModeEnum string

const (
    UpdatePageElementTransformRequestApplyModeEnumApplyModeUnspecified UpdatePageElementTransformRequestApplyModeEnum = "APPLY_MODE_UNSPECIFIED"
UpdatePageElementTransformRequestApplyModeEnumRelative UpdatePageElementTransformRequestApplyModeEnum = "RELATIVE"
UpdatePageElementTransformRequestApplyModeEnumAbsolute UpdatePageElementTransformRequestApplyModeEnum = "ABSOLUTE"
)


type UpdatePageElementTransformRequest struct {
    ApplyMode *UpdatePageElementTransformRequestApplyModeEnum `json:"applyMode,omitempty"`
    ObjectID *string `json:"objectId,omitempty"`
    Transform *AffineTransform `json:"transform,omitempty"`
    
}

