package shared

type GraphicsStatsBucket struct {
	FrameCount   *string `json:"frameCount"`
	RenderMillis *string `json:"renderMillis"`
}
