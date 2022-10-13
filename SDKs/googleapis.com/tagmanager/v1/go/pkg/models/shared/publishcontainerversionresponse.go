package shared

type PublishContainerVersionResponse struct {
	CompilerError    *bool             `json:"compilerError"`
	ContainerVersion *ContainerVersion `json:"containerVersion"`
}
