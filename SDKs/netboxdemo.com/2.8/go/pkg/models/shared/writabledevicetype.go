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
	Comments      *string                                               `json:"comments,omitempty"`
	Created       *time.Time                                            `json:"created,omitempty"`
	CustomFields  map[string]interface{}                                `json:"custom_fields,omitempty"`
	DeviceCount   *int64                                                `json:"device_count,omitempty"`
	DisplayName   *string                                               `json:"display_name,omitempty"`
	FrontImage    *string                                               `json:"front_image,omitempty"`
	ID            *int64                                                `json:"id,omitempty"`
	IsFullDepth   *bool                                                 `json:"is_full_depth,omitempty"`
	LastUpdated   *time.Time                                            `json:"last_updated,omitempty"`
	Manufacturer  int64                                                 `json:"manufacturer"`
	Model         string                                                `json:"model"`
	PartNumber    *string                                               `json:"part_number,omitempty"`
	RearImage     *string                                               `json:"rear_image,omitempty"`
	Slug          string                                                `json:"slug"`
	SubdeviceRole *WritableDeviceTypeSubdeviceRoleParentChildStatusEnum `json:"subdevice_role,omitempty"`
	Tags          []string                                              `json:"tags,omitempty"`
	UHeight       *int64                                                `json:"u_height,omitempty"`
}
