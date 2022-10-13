package shared

type OwnerReference struct {
	APIVersion         *string `json:"apiVersion"`
	BlockOwnerDeletion *bool   `json:"blockOwnerDeletion"`
	Controller         *bool   `json:"controller"`
	Kind               *string `json:"kind"`
	Name               *string `json:"name"`
	UID                *string `json:"uid"`
}
