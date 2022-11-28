package shared

// MemoryHashSignature
// A signature corresponding to memory page hashes.
type MemoryHashSignature struct {
	BinaryFamily *string     `json:"binaryFamily,omitempty"`
	Detections   []Detection `json:"detections,omitempty"`
}
