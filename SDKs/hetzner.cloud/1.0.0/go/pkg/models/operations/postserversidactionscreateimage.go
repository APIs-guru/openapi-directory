package operations



type PostServersIDActionsCreateImagePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostServersIDActionsCreateImageCreateImageRequestLabels struct {
    Labelkey *string `json:"labelkey,omitempty"`
    
}


type PostServersIDActionsCreateImageCreateImageRequestTypeEnum string

const (
    PostServersIDActionsCreateImageCreateImageRequestTypeEnumSnapshot PostServersIDActionsCreateImageCreateImageRequestTypeEnum = "snapshot"
PostServersIDActionsCreateImageCreateImageRequestTypeEnumBackup PostServersIDActionsCreateImageCreateImageRequestTypeEnum = "backup"
)


type PostServersIDActionsCreateImageCreateImageRequest struct {
    Description *string `json:"description,omitempty"`
    Labels *PostServersIDActionsCreateImageCreateImageRequestLabels `json:"labels,omitempty"`
    Type *PostServersIDActionsCreateImageCreateImageRequestTypeEnum `json:"type,omitempty"`
    
}

type PostServersIDActionsCreateImageRequest struct {
    PathParams PostServersIDActionsCreateImagePathParams 
    Request *PostServersIDActionsCreateImageCreateImageRequest `request:"mediaType=application/json"`
    
}

type PostServersIDActionsCreateImage201ApplicationJSONActionError struct {
    Code string `json:"code"`
    Message string `json:"message"`
    
}

type PostServersIDActionsCreateImage201ApplicationJSONActionResources struct {
    ID int64 `json:"id"`
    Type string `json:"type"`
    
}


type PostServersIDActionsCreateImage201ApplicationJSONActionStatusEnum string

const (
    PostServersIDActionsCreateImage201ApplicationJSONActionStatusEnumSuccess PostServersIDActionsCreateImage201ApplicationJSONActionStatusEnum = "success"
PostServersIDActionsCreateImage201ApplicationJSONActionStatusEnumRunning PostServersIDActionsCreateImage201ApplicationJSONActionStatusEnum = "running"
PostServersIDActionsCreateImage201ApplicationJSONActionStatusEnumError PostServersIDActionsCreateImage201ApplicationJSONActionStatusEnum = "error"
)


type PostServersIDActionsCreateImage201ApplicationJSONAction struct {
    Command string `json:"command"`
    Error PostServersIDActionsCreateImage201ApplicationJSONActionError `json:"error"`
    Finished string `json:"finished"`
    ID int64 `json:"id"`
    Progress float64 `json:"progress"`
    Resources []PostServersIDActionsCreateImage201ApplicationJSONActionResources `json:"resources"`
    Started string `json:"started"`
    Status PostServersIDActionsCreateImage201ApplicationJSONActionStatusEnum `json:"status"`
    
}

type PostServersIDActionsCreateImage201ApplicationJSONImageCreatedFrom struct {
    ID int64 `json:"id"`
    Name string `json:"name"`
    
}


type PostServersIDActionsCreateImage201ApplicationJSONImageOsFlavorEnum string

const (
    PostServersIDActionsCreateImage201ApplicationJSONImageOsFlavorEnumUbuntu PostServersIDActionsCreateImage201ApplicationJSONImageOsFlavorEnum = "ubuntu"
PostServersIDActionsCreateImage201ApplicationJSONImageOsFlavorEnumCentos PostServersIDActionsCreateImage201ApplicationJSONImageOsFlavorEnum = "centos"
PostServersIDActionsCreateImage201ApplicationJSONImageOsFlavorEnumDebian PostServersIDActionsCreateImage201ApplicationJSONImageOsFlavorEnum = "debian"
PostServersIDActionsCreateImage201ApplicationJSONImageOsFlavorEnumFedora PostServersIDActionsCreateImage201ApplicationJSONImageOsFlavorEnum = "fedora"
PostServersIDActionsCreateImage201ApplicationJSONImageOsFlavorEnumUnknown PostServersIDActionsCreateImage201ApplicationJSONImageOsFlavorEnum = "unknown"
)


type PostServersIDActionsCreateImage201ApplicationJSONImageProtection struct {
    Delete bool `json:"delete"`
    
}


type PostServersIDActionsCreateImage201ApplicationJSONImageStatusEnum string

const (
    PostServersIDActionsCreateImage201ApplicationJSONImageStatusEnumAvailable PostServersIDActionsCreateImage201ApplicationJSONImageStatusEnum = "available"
PostServersIDActionsCreateImage201ApplicationJSONImageStatusEnumCreating PostServersIDActionsCreateImage201ApplicationJSONImageStatusEnum = "creating"
PostServersIDActionsCreateImage201ApplicationJSONImageStatusEnumUnavailable PostServersIDActionsCreateImage201ApplicationJSONImageStatusEnum = "unavailable"
)



type PostServersIDActionsCreateImage201ApplicationJSONImageTypeEnum string

const (
    PostServersIDActionsCreateImage201ApplicationJSONImageTypeEnumSystem PostServersIDActionsCreateImage201ApplicationJSONImageTypeEnum = "system"
PostServersIDActionsCreateImage201ApplicationJSONImageTypeEnumApp PostServersIDActionsCreateImage201ApplicationJSONImageTypeEnum = "app"
PostServersIDActionsCreateImage201ApplicationJSONImageTypeEnumSnapshot PostServersIDActionsCreateImage201ApplicationJSONImageTypeEnum = "snapshot"
PostServersIDActionsCreateImage201ApplicationJSONImageTypeEnumBackup PostServersIDActionsCreateImage201ApplicationJSONImageTypeEnum = "backup"
PostServersIDActionsCreateImage201ApplicationJSONImageTypeEnumTemporary PostServersIDActionsCreateImage201ApplicationJSONImageTypeEnum = "temporary"
)


type PostServersIDActionsCreateImage201ApplicationJSONImage struct {
    BoundTo int64 `json:"bound_to"`
    BuildID *string `json:"build_id,omitempty"`
    Created string `json:"created"`
    CreatedFrom PostServersIDActionsCreateImage201ApplicationJSONImageCreatedFrom `json:"created_from"`
    Deleted string `json:"deleted"`
    Deprecated string `json:"deprecated"`
    Description string `json:"description"`
    DiskSize float64 `json:"disk_size"`
    ID int64 `json:"id"`
    ImageSize float64 `json:"image_size"`
    Labels map[string]string `json:"labels"`
    Name string `json:"name"`
    OsFlavor PostServersIDActionsCreateImage201ApplicationJSONImageOsFlavorEnum `json:"os_flavor"`
    OsVersion string `json:"os_version"`
    Protection PostServersIDActionsCreateImage201ApplicationJSONImageProtection `json:"protection"`
    RapidDeploy *bool `json:"rapid_deploy,omitempty"`
    Status PostServersIDActionsCreateImage201ApplicationJSONImageStatusEnum `json:"status"`
    Type PostServersIDActionsCreateImage201ApplicationJSONImageTypeEnum `json:"type"`
    
}

type PostServersIDActionsCreateImage201ApplicationJSON struct {
    Action *PostServersIDActionsCreateImage201ApplicationJSONAction `json:"action,omitempty"`
    Image *PostServersIDActionsCreateImage201ApplicationJSONImage `json:"image,omitempty"`
    
}

type PostServersIDActionsCreateImageResponse struct {
    ContentType string 
    PostServersIDActionsCreateImage201ApplicationJSONObject *PostServersIDActionsCreateImage201ApplicationJSON 
    StatusCode int64 
    
}

