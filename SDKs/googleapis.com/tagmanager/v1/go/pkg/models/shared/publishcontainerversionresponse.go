package shared

// PublishContainerVersionResponse
// Publish container version response.
type PublishContainerVersionResponse struct {
	CompilerError    *bool             `json:"compilerError,omitempty"`
	ContainerVersion *ContainerVersion `json:"containerVersion,omitempty"`
}
