package shared

type APIKeys struct {
	PredictionKeys *KeyPair `json:"PredictionKeys"`
	TrainingKeys   *KeyPair `json:"TrainingKeys"`
}
