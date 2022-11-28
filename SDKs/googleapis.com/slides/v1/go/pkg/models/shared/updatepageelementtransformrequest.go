package shared

type UpdatePageElementTransformRequestApplyModeEnum string

const (
	UpdatePageElementTransformRequestApplyModeEnumApplyModeUnspecified UpdatePageElementTransformRequestApplyModeEnum = "APPLY_MODE_UNSPECIFIED"
	UpdatePageElementTransformRequestApplyModeEnumRelative             UpdatePageElementTransformRequestApplyModeEnum = "RELATIVE"
	UpdatePageElementTransformRequestApplyModeEnumAbsolute             UpdatePageElementTransformRequestApplyModeEnum = "ABSOLUTE"
)

// UpdatePageElementTransformRequest
// Updates the transform of a page element. Updating the transform of a group will change the absolute transform of the page elements in that group, which can change their visual appearance. See the documentation for PageElement.transform for more details.
type UpdatePageElementTransformRequest struct {
	ApplyMode *UpdatePageElementTransformRequestApplyModeEnum `json:"applyMode,omitempty"`
	ObjectID  *string                                         `json:"objectId,omitempty"`
	Transform *AffineTransform                                `json:"transform,omitempty"`
}
