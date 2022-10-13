package shared

type MemoryHashSignature struct {
	BinaryFamily *string     `json:"binaryFamily"`
	Detections   []Detection `json:"detections"`
}
