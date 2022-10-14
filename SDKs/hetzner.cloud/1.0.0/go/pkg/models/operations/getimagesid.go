package operations

type GetImagesIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetImagesIDRequest struct {
	PathParams GetImagesIDPathParams
}

type GetImagesID200ApplicationJSONImageCreatedFrom struct {
	ID   int64  `json:"id"`
	Name string `json:"name"`
}

type GetImagesID200ApplicationJSONImageOsFlavorEnum string

const (
	GetImagesID200ApplicationJSONImageOsFlavorEnumUbuntu  GetImagesID200ApplicationJSONImageOsFlavorEnum = "ubuntu"
	GetImagesID200ApplicationJSONImageOsFlavorEnumCentos  GetImagesID200ApplicationJSONImageOsFlavorEnum = "centos"
	GetImagesID200ApplicationJSONImageOsFlavorEnumDebian  GetImagesID200ApplicationJSONImageOsFlavorEnum = "debian"
	GetImagesID200ApplicationJSONImageOsFlavorEnumFedora  GetImagesID200ApplicationJSONImageOsFlavorEnum = "fedora"
	GetImagesID200ApplicationJSONImageOsFlavorEnumUnknown GetImagesID200ApplicationJSONImageOsFlavorEnum = "unknown"
)

type GetImagesID200ApplicationJSONImageProtection struct {
	Delete bool `json:"delete"`
}

type GetImagesID200ApplicationJSONImageStatusEnum string

const (
	GetImagesID200ApplicationJSONImageStatusEnumAvailable   GetImagesID200ApplicationJSONImageStatusEnum = "available"
	GetImagesID200ApplicationJSONImageStatusEnumCreating    GetImagesID200ApplicationJSONImageStatusEnum = "creating"
	GetImagesID200ApplicationJSONImageStatusEnumUnavailable GetImagesID200ApplicationJSONImageStatusEnum = "unavailable"
)

type GetImagesID200ApplicationJSONImageTypeEnum string

const (
	GetImagesID200ApplicationJSONImageTypeEnumSystem    GetImagesID200ApplicationJSONImageTypeEnum = "system"
	GetImagesID200ApplicationJSONImageTypeEnumApp       GetImagesID200ApplicationJSONImageTypeEnum = "app"
	GetImagesID200ApplicationJSONImageTypeEnumSnapshot  GetImagesID200ApplicationJSONImageTypeEnum = "snapshot"
	GetImagesID200ApplicationJSONImageTypeEnumBackup    GetImagesID200ApplicationJSONImageTypeEnum = "backup"
	GetImagesID200ApplicationJSONImageTypeEnumTemporary GetImagesID200ApplicationJSONImageTypeEnum = "temporary"
)

type GetImagesID200ApplicationJSONImage struct {
	BoundTo     int64                                          `json:"bound_to"`
	BuildID     *string                                        `json:"build_id,omitempty"`
	Created     string                                         `json:"created"`
	CreatedFrom GetImagesID200ApplicationJSONImageCreatedFrom  `json:"created_from"`
	Deleted     string                                         `json:"deleted"`
	Deprecated  string                                         `json:"deprecated"`
	Description string                                         `json:"description"`
	DiskSize    float64                                        `json:"disk_size"`
	ID          int64                                          `json:"id"`
	ImageSize   float64                                        `json:"image_size"`
	Labels      map[string]string                              `json:"labels"`
	Name        string                                         `json:"name"`
	OsFlavor    GetImagesID200ApplicationJSONImageOsFlavorEnum `json:"os_flavor"`
	OsVersion   string                                         `json:"os_version"`
	Protection  GetImagesID200ApplicationJSONImageProtection   `json:"protection"`
	RapidDeploy *bool                                          `json:"rapid_deploy,omitempty"`
	Status      GetImagesID200ApplicationJSONImageStatusEnum   `json:"status"`
	Type        GetImagesID200ApplicationJSONImageTypeEnum     `json:"type"`
}

type GetImagesID200ApplicationJSON struct {
	Image *GetImagesID200ApplicationJSONImage `json:"image,omitempty"`
}

type GetImagesIDResponse struct {
	ContentType                         string
	GetImagesID200ApplicationJSONObject *GetImagesID200ApplicationJSON
	StatusCode                          int64
}
