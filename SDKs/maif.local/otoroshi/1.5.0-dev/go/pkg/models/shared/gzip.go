package shared



type Gzip struct {
    BlackList []string `json:"blackList"`
    BufferSize int64 `json:"bufferSize"`
    ChunkedThreshold int64 `json:"chunkedThreshold"`
    CompressionLevel int32 `json:"compressionLevel"`
    Enabled bool `json:"enabled"`
    ExcludedPatterns []string `json:"excludedPatterns"`
    WhiteList []string `json:"whiteList"`
    
}

