package shared

type CreateContainerVersionResponse struct {
	CompilerError    *bool             `json:"compilerError"`
	ContainerVersion *ContainerVersion `json:"containerVersion"`
}
