package shared

type RewriteResponse struct {
	Done                *bool   `json:"done"`
	Kind                *string `json:"kind"`
	ObjectSize          *string `json:"objectSize"`
	Resource            *Object `json:"resource"`
	RewriteToken        *string `json:"rewriteToken"`
	TotalBytesRewritten *string `json:"totalBytesRewritten"`
}
