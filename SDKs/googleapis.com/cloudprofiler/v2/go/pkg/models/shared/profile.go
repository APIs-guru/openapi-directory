package shared

type ProfileProfileTypeEnum string

const (
	ProfileProfileTypeEnumProfileTypeUnspecified ProfileProfileTypeEnum = "PROFILE_TYPE_UNSPECIFIED"
	ProfileProfileTypeEnumCPU                    ProfileProfileTypeEnum = "CPU"
	ProfileProfileTypeEnumWall                   ProfileProfileTypeEnum = "WALL"
	ProfileProfileTypeEnumHeap                   ProfileProfileTypeEnum = "HEAP"
	ProfileProfileTypeEnumThreads                ProfileProfileTypeEnum = "THREADS"
	ProfileProfileTypeEnumContention             ProfileProfileTypeEnum = "CONTENTION"
	ProfileProfileTypeEnumPeakHeap               ProfileProfileTypeEnum = "PEAK_HEAP"
	ProfileProfileTypeEnumHeapAlloc              ProfileProfileTypeEnum = "HEAP_ALLOC"
)

type Profile struct {
	Deployment   *Deployment             `json:"deployment"`
	Duration     *string                 `json:"duration"`
	Labels       map[string]string       `json:"labels"`
	Name         *string                 `json:"name"`
	ProfileBytes *string                 `json:"profileBytes"`
	ProfileType  *ProfileProfileTypeEnum `json:"profileType"`
}
