package shared

import (
	"time"
)

type WritableDeviceTypeSubdeviceRoleParentChildStatusEnum string

const (
	WritableDeviceTypeSubdeviceRoleParentChildStatusEnumParent WritableDeviceTypeSubdeviceRoleParentChildStatusEnum = "parent"
	WritableDeviceTypeSubdeviceRoleParentChildStatusEnumChild  WritableDeviceTypeSubdeviceRoleParentChildStatusEnum = "child"
)

type WritableDeviceType struct {
	Comments      *string                                               `json:"comments"`
	Created       *time.Time                                            `json:"created"`
	CustomFields  map[string]interface{}                                `json:"custom_fields"`
	DeviceCount   *int64                                                `json:"device_count"`
	DisplayName   *string                                               `json:"display_name"`
	FrontImage    *string                                               `json:"front_image"`
	ID            *int64                                                `json:"id"`
	IsFullDepth   *bool                                                 `json:"is_full_depth"`
	LastUpdated   *time.Time                                            `json:"last_updated"`
	Manufacturer  int64                                                 `json:"manufacturer"`
	Model         string                                                `json:"model"`
	PartNumber    *string                                               `json:"part_number"`
	RearImage     *string                                               `json:"rear_image"`
	Slug          string                                                `json:"slug"`
	SubdeviceRole *WritableDeviceTypeSubdeviceRoleParentChildStatusEnum `json:"subdevice_role"`
	Tags          []string                                              `json:"tags"`
	UHeight       *int64                                                `json:"u_height"`
}
