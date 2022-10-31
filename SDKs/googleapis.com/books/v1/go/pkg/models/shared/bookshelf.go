package shared



type Bookshelf struct {
    Access *string `json:"access,omitempty"`
    Created *string `json:"created,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *int32 `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    SelfLink *string `json:"selfLink,omitempty"`
    Title *string `json:"title,omitempty"`
    Updated *string `json:"updated,omitempty"`
    VolumeCount *int32 `json:"volumeCount,omitempty"`
    VolumesLastUpdated *string `json:"volumesLastUpdated,omitempty"`
    
}

