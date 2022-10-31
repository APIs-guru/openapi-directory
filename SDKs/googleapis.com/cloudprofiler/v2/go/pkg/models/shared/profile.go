package shared




type ProfileProfileTypeEnum string

const (
    ProfileProfileTypeEnumProfileTypeUnspecified ProfileProfileTypeEnum = "PROFILE_TYPE_UNSPECIFIED"
ProfileProfileTypeEnumCPU ProfileProfileTypeEnum = "CPU"
ProfileProfileTypeEnumWall ProfileProfileTypeEnum = "WALL"
ProfileProfileTypeEnumHeap ProfileProfileTypeEnum = "HEAP"
ProfileProfileTypeEnumThreads ProfileProfileTypeEnum = "THREADS"
ProfileProfileTypeEnumContention ProfileProfileTypeEnum = "CONTENTION"
ProfileProfileTypeEnumPeakHeap ProfileProfileTypeEnum = "PEAK_HEAP"
ProfileProfileTypeEnumHeapAlloc ProfileProfileTypeEnum = "HEAP_ALLOC"
)


type Profile struct {
    Deployment *Deployment `json:"deployment,omitempty"`
    Duration *string `json:"duration,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    ProfileBytes *string `json:"profileBytes,omitempty"`
    ProfileType *ProfileProfileTypeEnum `json:"profileType,omitempty"`
    
}

