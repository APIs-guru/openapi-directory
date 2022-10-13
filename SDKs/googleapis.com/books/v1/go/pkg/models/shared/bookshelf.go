package shared

type Bookshelf struct {
	Access             *string `json:"access"`
	Created            *string `json:"created"`
	Description        *string `json:"description"`
	ID                 *int32  `json:"id"`
	Kind               *string `json:"kind"`
	SelfLink           *string `json:"selfLink"`
	Title              *string `json:"title"`
	Updated            *string `json:"updated"`
	VolumeCount        *int32  `json:"volumeCount"`
	VolumesLastUpdated *string `json:"volumesLastUpdated"`
}
