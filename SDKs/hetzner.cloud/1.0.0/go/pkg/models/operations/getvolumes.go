package operations




type GetVolumesSortEnum string

const (
    GetVolumesSortEnumID GetVolumesSortEnum = "id"
GetVolumesSortEnumIDAsc GetVolumesSortEnum = "id:asc"
GetVolumesSortEnumIDDesc GetVolumesSortEnum = "id:desc"
GetVolumesSortEnumName GetVolumesSortEnum = "name"
GetVolumesSortEnumNameAsc GetVolumesSortEnum = "name:asc"
GetVolumesSortEnumNameDesc GetVolumesSortEnum = "name:desc"
GetVolumesSortEnumCreated GetVolumesSortEnum = "created"
GetVolumesSortEnumCreatedAsc GetVolumesSortEnum = "created:asc"
GetVolumesSortEnumCreatedDesc GetVolumesSortEnum = "created:desc"
)



type GetVolumesStatusEnum string

const (
    GetVolumesStatusEnumAvailable GetVolumesStatusEnum = "available"
GetVolumesStatusEnumCreating GetVolumesStatusEnum = "creating"
)


type GetVolumesQueryParams struct {
    LabelSelector *string `queryParam:"style=form,explode=true,name=label_selector"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    Sort *GetVolumesSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Status *GetVolumesStatusEnum `queryParam:"style=form,explode=true,name=status"`
    
}

type GetVolumesRequest struct {
    QueryParams GetVolumesQueryParams 
    
}

type GetVolumes200ApplicationJSONMetaPagination struct {
    LastPage float64 `json:"last_page"`
    NextPage float64 `json:"next_page"`
    Page float64 `json:"page"`
    PerPage float64 `json:"per_page"`
    PreviousPage float64 `json:"previous_page"`
    TotalEntries float64 `json:"total_entries"`
    
}

type GetVolumes200ApplicationJSONMeta struct {
    Pagination GetVolumes200ApplicationJSONMetaPagination `json:"pagination"`
    
}

type GetVolumes200ApplicationJSONVolumesLocation struct {
    City string `json:"city"`
    Country string `json:"country"`
    Description string `json:"description"`
    ID float64 `json:"id"`
    Latitude float64 `json:"latitude"`
    Longitude float64 `json:"longitude"`
    Name string `json:"name"`
    NetworkZone string `json:"network_zone"`
    
}

type GetVolumes200ApplicationJSONVolumesProtection struct {
    Delete bool `json:"delete"`
    
}


type GetVolumes200ApplicationJSONVolumesStatusEnum string

const (
    GetVolumes200ApplicationJSONVolumesStatusEnumCreating GetVolumes200ApplicationJSONVolumesStatusEnum = "creating"
GetVolumes200ApplicationJSONVolumesStatusEnumAvailable GetVolumes200ApplicationJSONVolumesStatusEnum = "available"
)


type GetVolumes200ApplicationJSONVolumes struct {
    Created string `json:"created"`
    Format string `json:"format"`
    ID int64 `json:"id"`
    Labels map[string]string `json:"labels"`
    LinuxDevice string `json:"linux_device"`
    Location GetVolumes200ApplicationJSONVolumesLocation `json:"location"`
    Name string `json:"name"`
    Protection GetVolumes200ApplicationJSONVolumesProtection `json:"protection"`
    Server int64 `json:"server"`
    Size float64 `json:"size"`
    Status GetVolumes200ApplicationJSONVolumesStatusEnum `json:"status"`
    
}

type GetVolumes200ApplicationJSON struct {
    Meta *GetVolumes200ApplicationJSONMeta `json:"meta,omitempty"`
    Volumes []GetVolumes200ApplicationJSONVolumes `json:"volumes"`
    
}

type GetVolumesResponse struct {
    ContentType string 
    GetVolumes200ApplicationJSONObject *GetVolumes200ApplicationJSON 
    StatusCode int64 
    
}

