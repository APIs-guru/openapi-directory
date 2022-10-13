package shared

type ListenResponse struct {
	DocumentChange *DocumentChange  `json:"documentChange"`
	DocumentDelete *DocumentDelete  `json:"documentDelete"`
	DocumentRemove *DocumentRemove  `json:"documentRemove"`
	Filter         *ExistenceFilter `json:"filter"`
	TargetChange   *TargetChange    `json:"targetChange"`
}
