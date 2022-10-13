package shared

type GcsObject struct {
	Bucket           *string `json:"bucket"`
	GenerationNumber *string `json:"generationNumber"`
	Object           *string `json:"object"`
}
