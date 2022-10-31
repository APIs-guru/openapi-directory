package operations




type GetImagesSortEnum string

const (
    GetImagesSortEnumID GetImagesSortEnum = "id"
GetImagesSortEnumIDAsc GetImagesSortEnum = "id:asc"
GetImagesSortEnumIDDesc GetImagesSortEnum = "id:desc"
GetImagesSortEnumName GetImagesSortEnum = "name"
GetImagesSortEnumNameAsc GetImagesSortEnum = "name:asc"
GetImagesSortEnumNameDesc GetImagesSortEnum = "name:desc"
GetImagesSortEnumCreated GetImagesSortEnum = "created"
GetImagesSortEnumCreatedAsc GetImagesSortEnum = "created:asc"
GetImagesSortEnumCreatedDesc GetImagesSortEnum = "created:desc"
)



type GetImagesStatusEnum string

const (
    GetImagesStatusEnumAvailable GetImagesStatusEnum = "available"
GetImagesStatusEnumCreating GetImagesStatusEnum = "creating"
)



type GetImagesTypeEnum string

const (
    GetImagesTypeEnumSystem GetImagesTypeEnum = "system"
GetImagesTypeEnumSnapshot GetImagesTypeEnum = "snapshot"
GetImagesTypeEnumBackup GetImagesTypeEnum = "backup"
GetImagesTypeEnumApp GetImagesTypeEnum = "app"
)


type GetImagesQueryParams struct {
    BoundTo *string `queryParam:"style=form,explode=true,name=bound_to"`
    IncludeDeprecated *bool `queryParam:"style=form,explode=true,name=include_deprecated"`
    LabelSelector *string `queryParam:"style=form,explode=true,name=label_selector"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    Sort *GetImagesSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Status *GetImagesStatusEnum `queryParam:"style=form,explode=true,name=status"`
    Type *GetImagesTypeEnum `queryParam:"style=form,explode=true,name=type"`
    
}

type GetImagesRequest struct {
    QueryParams GetImagesQueryParams 
    
}

type GetImages200ApplicationJSONImagesCreatedFrom struct {
    ID int64 `json:"id"`
    Name string `json:"name"`
    
}


type GetImages200ApplicationJSONImagesOsFlavorEnum string

const (
    GetImages200ApplicationJSONImagesOsFlavorEnumUbuntu GetImages200ApplicationJSONImagesOsFlavorEnum = "ubuntu"
GetImages200ApplicationJSONImagesOsFlavorEnumCentos GetImages200ApplicationJSONImagesOsFlavorEnum = "centos"
GetImages200ApplicationJSONImagesOsFlavorEnumDebian GetImages200ApplicationJSONImagesOsFlavorEnum = "debian"
GetImages200ApplicationJSONImagesOsFlavorEnumFedora GetImages200ApplicationJSONImagesOsFlavorEnum = "fedora"
GetImages200ApplicationJSONImagesOsFlavorEnumUnknown GetImages200ApplicationJSONImagesOsFlavorEnum = "unknown"
)


type GetImages200ApplicationJSONImagesProtection struct {
    Delete bool `json:"delete"`
    
}


type GetImages200ApplicationJSONImagesStatusEnum string

const (
    GetImages200ApplicationJSONImagesStatusEnumAvailable GetImages200ApplicationJSONImagesStatusEnum = "available"
GetImages200ApplicationJSONImagesStatusEnumCreating GetImages200ApplicationJSONImagesStatusEnum = "creating"
GetImages200ApplicationJSONImagesStatusEnumUnavailable GetImages200ApplicationJSONImagesStatusEnum = "unavailable"
)



type GetImages200ApplicationJSONImagesTypeEnum string

const (
    GetImages200ApplicationJSONImagesTypeEnumSystem GetImages200ApplicationJSONImagesTypeEnum = "system"
GetImages200ApplicationJSONImagesTypeEnumApp GetImages200ApplicationJSONImagesTypeEnum = "app"
GetImages200ApplicationJSONImagesTypeEnumSnapshot GetImages200ApplicationJSONImagesTypeEnum = "snapshot"
GetImages200ApplicationJSONImagesTypeEnumBackup GetImages200ApplicationJSONImagesTypeEnum = "backup"
GetImages200ApplicationJSONImagesTypeEnumTemporary GetImages200ApplicationJSONImagesTypeEnum = "temporary"
)


type GetImages200ApplicationJSONImages struct {
    BoundTo int64 `json:"bound_to"`
    BuildID *string `json:"build_id,omitempty"`
    Created string `json:"created"`
    CreatedFrom GetImages200ApplicationJSONImagesCreatedFrom `json:"created_from"`
    Deleted string `json:"deleted"`
    Deprecated string `json:"deprecated"`
    Description string `json:"description"`
    DiskSize float64 `json:"disk_size"`
    ID int64 `json:"id"`
    ImageSize float64 `json:"image_size"`
    Labels map[string]string `json:"labels"`
    Name string `json:"name"`
    OsFlavor GetImages200ApplicationJSONImagesOsFlavorEnum `json:"os_flavor"`
    OsVersion string `json:"os_version"`
    Protection GetImages200ApplicationJSONImagesProtection `json:"protection"`
    RapidDeploy *bool `json:"rapid_deploy,omitempty"`
    Status GetImages200ApplicationJSONImagesStatusEnum `json:"status"`
    Type GetImages200ApplicationJSONImagesTypeEnum `json:"type"`
    
}

type GetImages200ApplicationJSONMetaPagination struct {
    LastPage float64 `json:"last_page"`
    NextPage float64 `json:"next_page"`
    Page float64 `json:"page"`
    PerPage float64 `json:"per_page"`
    PreviousPage float64 `json:"previous_page"`
    TotalEntries float64 `json:"total_entries"`
    
}

type GetImages200ApplicationJSONMeta struct {
    Pagination GetImages200ApplicationJSONMetaPagination `json:"pagination"`
    
}

type GetImages200ApplicationJSON struct {
    Images []GetImages200ApplicationJSONImages `json:"images"`
    Meta *GetImages200ApplicationJSONMeta `json:"meta,omitempty"`
    
}

type GetImagesResponse struct {
    ContentType string 
    GetImages200ApplicationJSONObject *GetImages200ApplicationJSON 
    StatusCode int64 
    
}

