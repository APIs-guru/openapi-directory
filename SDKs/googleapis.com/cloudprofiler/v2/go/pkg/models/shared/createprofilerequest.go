package shared

type CreateProfileRequestProfileTypeEnum string

const (
	CreateProfileRequestProfileTypeEnumProfileTypeUnspecified CreateProfileRequestProfileTypeEnum = "PROFILE_TYPE_UNSPECIFIED"
	CreateProfileRequestProfileTypeEnumCPU                    CreateProfileRequestProfileTypeEnum = "CPU"
	CreateProfileRequestProfileTypeEnumWall                   CreateProfileRequestProfileTypeEnum = "WALL"
	CreateProfileRequestProfileTypeEnumHeap                   CreateProfileRequestProfileTypeEnum = "HEAP"
	CreateProfileRequestProfileTypeEnumThreads                CreateProfileRequestProfileTypeEnum = "THREADS"
	CreateProfileRequestProfileTypeEnumContention             CreateProfileRequestProfileTypeEnum = "CONTENTION"
	CreateProfileRequestProfileTypeEnumPeakHeap               CreateProfileRequestProfileTypeEnum = "PEAK_HEAP"
	CreateProfileRequestProfileTypeEnumHeapAlloc              CreateProfileRequestProfileTypeEnum = "HEAP_ALLOC"
)

type CreateProfileRequest struct {
	Deployment  *Deployment                           `json:"deployment"`
	ProfileType []CreateProfileRequestProfileTypeEnum `json:"profileType"`
}
