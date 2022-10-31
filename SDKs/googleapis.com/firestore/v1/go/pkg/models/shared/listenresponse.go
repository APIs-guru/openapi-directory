package shared

type ListenResponse struct {
	DocumentChange *DocumentChange  `json:"documentChange,omitempty"`
	DocumentDelete *DocumentDelete  `json:"documentDelete,omitempty"`
	DocumentRemove *DocumentRemove  `json:"documentRemove,omitempty"`
	Filter         *ExistenceFilter `json:"filter,omitempty"`
	TargetChange   *TargetChange    `json:"targetChange,omitempty"`
}
