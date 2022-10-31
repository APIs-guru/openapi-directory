package operations

type PutImagesIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PutImagesIDUpdateImageRequestTypeEnum string

const (
	PutImagesIDUpdateImageRequestTypeEnumSnapshot PutImagesIDUpdateImageRequestTypeEnum = "snapshot"
)

type PutImagesIDUpdateImageRequest struct {
	Description *string                                `json:"description,omitempty"`
	Labels      map[string]interface{}                 `json:"labels,omitempty"`
	Type        *PutImagesIDUpdateImageRequestTypeEnum `json:"type,omitempty"`
}

type PutImagesIDRequest struct {
	PathParams PutImagesIDPathParams
	Request    *PutImagesIDUpdateImageRequest `request:"mediaType=application/json"`
}

type PutImagesID200ApplicationJSONImageCreatedFrom struct {
	ID   int64  `json:"id"`
	Name string `json:"name"`
}

type PutImagesID200ApplicationJSONImageOsFlavorEnum string

const (
	PutImagesID200ApplicationJSONImageOsFlavorEnumUbuntu  PutImagesID200ApplicationJSONImageOsFlavorEnum = "ubuntu"
	PutImagesID200ApplicationJSONImageOsFlavorEnumCentos  PutImagesID200ApplicationJSONImageOsFlavorEnum = "centos"
	PutImagesID200ApplicationJSONImageOsFlavorEnumDebian  PutImagesID200ApplicationJSONImageOsFlavorEnum = "debian"
	PutImagesID200ApplicationJSONImageOsFlavorEnumFedora  PutImagesID200ApplicationJSONImageOsFlavorEnum = "fedora"
	PutImagesID200ApplicationJSONImageOsFlavorEnumUnknown PutImagesID200ApplicationJSONImageOsFlavorEnum = "unknown"
)

type PutImagesID200ApplicationJSONImageProtection struct {
	Delete bool `json:"delete"`
}

type PutImagesID200ApplicationJSONImageStatusEnum string

const (
	PutImagesID200ApplicationJSONImageStatusEnumAvailable   PutImagesID200ApplicationJSONImageStatusEnum = "available"
	PutImagesID200ApplicationJSONImageStatusEnumCreating    PutImagesID200ApplicationJSONImageStatusEnum = "creating"
	PutImagesID200ApplicationJSONImageStatusEnumUnavailable PutImagesID200ApplicationJSONImageStatusEnum = "unavailable"
)

type PutImagesID200ApplicationJSONImageTypeEnum string

const (
	PutImagesID200ApplicationJSONImageTypeEnumSystem    PutImagesID200ApplicationJSONImageTypeEnum = "system"
	PutImagesID200ApplicationJSONImageTypeEnumApp       PutImagesID200ApplicationJSONImageTypeEnum = "app"
	PutImagesID200ApplicationJSONImageTypeEnumSnapshot  PutImagesID200ApplicationJSONImageTypeEnum = "snapshot"
	PutImagesID200ApplicationJSONImageTypeEnumBackup    PutImagesID200ApplicationJSONImageTypeEnum = "backup"
	PutImagesID200ApplicationJSONImageTypeEnumTemporary PutImagesID200ApplicationJSONImageTypeEnum = "temporary"
)

type PutImagesID200ApplicationJSONImage struct {
	BoundTo     int64                                          `json:"bound_to"`
	BuildID     *string                                        `json:"build_id,omitempty"`
	Created     string                                         `json:"created"`
	CreatedFrom PutImagesID200ApplicationJSONImageCreatedFrom  `json:"created_from"`
	Deleted     string                                         `json:"deleted"`
	Deprecated  string                                         `json:"deprecated"`
	Description string                                         `json:"description"`
	DiskSize    float64                                        `json:"disk_size"`
	ID          int64                                          `json:"id"`
	ImageSize   float64                                        `json:"image_size"`
	Labels      map[string]string                              `json:"labels"`
	Name        string                                         `json:"name"`
	OsFlavor    PutImagesID200ApplicationJSONImageOsFlavorEnum `json:"os_flavor"`
	OsVersion   string                                         `json:"os_version"`
	Protection  PutImagesID200ApplicationJSONImageProtection   `json:"protection"`
	RapidDeploy *bool                                          `json:"rapid_deploy,omitempty"`
	Status      PutImagesID200ApplicationJSONImageStatusEnum   `json:"status"`
	Type        PutImagesID200ApplicationJSONImageTypeEnum     `json:"type"`
}

type PutImagesID200ApplicationJSON struct {
	Image *PutImagesID200ApplicationJSONImage `json:"image,omitempty"`
}

type PutImagesIDResponse struct {
	ContentType                         string
	PutImagesID200ApplicationJSONObject *PutImagesID200ApplicationJSON
	StatusCode                          int64
}
