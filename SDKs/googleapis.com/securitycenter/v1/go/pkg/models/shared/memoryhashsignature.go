package shared



type MemoryHashSignature struct {
    BinaryFamily *string `json:"binaryFamily,omitempty"`
    Detections []Detection `json:"detections,omitempty"`
    
}

