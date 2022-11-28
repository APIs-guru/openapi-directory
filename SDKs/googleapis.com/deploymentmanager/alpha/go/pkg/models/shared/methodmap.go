package shared

// MethodMap
// Deployment Manager will call these methods during the events of creation/deletion/update/get/setIamPolicy
type MethodMap struct {
	Create       *string `json:"create,omitempty"`
	Delete       *string `json:"delete,omitempty"`
	Get          *string `json:"get,omitempty"`
	SetIamPolicy *string `json:"setIamPolicy,omitempty"`
	Update       *string `json:"update,omitempty"`
}
