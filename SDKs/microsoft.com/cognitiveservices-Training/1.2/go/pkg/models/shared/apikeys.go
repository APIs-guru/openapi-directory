package shared

type APIKeys struct {
	PredictionKeys *KeyPair `json:"PredictionKeys,omitempty"`
	TrainingKeys   *KeyPair `json:"TrainingKeys,omitempty"`
}
