package shared

type CreateSdfDownloadTaskRequestVersionEnum string

const (
	CreateSdfDownloadTaskRequestVersionEnumSdfVersionUnspecified CreateSdfDownloadTaskRequestVersionEnum = "SDF_VERSION_UNSPECIFIED"
	CreateSdfDownloadTaskRequestVersionEnumSdfVersion31          CreateSdfDownloadTaskRequestVersionEnum = "SDF_VERSION_3_1"
	CreateSdfDownloadTaskRequestVersionEnumSdfVersion4           CreateSdfDownloadTaskRequestVersionEnum = "SDF_VERSION_4"
	CreateSdfDownloadTaskRequestVersionEnumSdfVersion41          CreateSdfDownloadTaskRequestVersionEnum = "SDF_VERSION_4_1"
	CreateSdfDownloadTaskRequestVersionEnumSdfVersion42          CreateSdfDownloadTaskRequestVersionEnum = "SDF_VERSION_4_2"
	CreateSdfDownloadTaskRequestVersionEnumSdfVersion5           CreateSdfDownloadTaskRequestVersionEnum = "SDF_VERSION_5"
	CreateSdfDownloadTaskRequestVersionEnumSdfVersion51          CreateSdfDownloadTaskRequestVersionEnum = "SDF_VERSION_5_1"
	CreateSdfDownloadTaskRequestVersionEnumSdfVersion52          CreateSdfDownloadTaskRequestVersionEnum = "SDF_VERSION_5_2"
	CreateSdfDownloadTaskRequestVersionEnumSdfVersion53          CreateSdfDownloadTaskRequestVersionEnum = "SDF_VERSION_5_3"
	CreateSdfDownloadTaskRequestVersionEnumSdfVersion54          CreateSdfDownloadTaskRequestVersionEnum = "SDF_VERSION_5_4"
	CreateSdfDownloadTaskRequestVersionEnumSdfVersion55          CreateSdfDownloadTaskRequestVersionEnum = "SDF_VERSION_5_5"
)

// CreateSdfDownloadTaskRequest
// Request message for [SdfDownloadTaskService.CreateSdfDownloadTask].
type CreateSdfDownloadTaskRequest struct {
	AdvertiserID          *string                                  `json:"advertiserId,omitempty"`
	IDFilter              *IDFilter                                `json:"idFilter,omitempty"`
	InventorySourceFilter *InventorySourceFilter                   `json:"inventorySourceFilter,omitempty"`
	ParentEntityFilter    *ParentEntityFilter                      `json:"parentEntityFilter,omitempty"`
	PartnerID             *string                                  `json:"partnerId,omitempty"`
	Version               *CreateSdfDownloadTaskRequestVersionEnum `json:"version,omitempty"`
}
