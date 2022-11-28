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

// CreateProfileRequest
// CreateProfileRequest describes a profile resource online creation request. The deployment field must be populated. The profile_type specifies the list of profile types supported by the agent. The creation call will hang until a profile of one of these types needs to be collected.
type CreateProfileRequest struct {
	Deployment  *Deployment                           `json:"deployment,omitempty"`
	ProfileType []CreateProfileRequestProfileTypeEnum `json:"profileType,omitempty"`
}
