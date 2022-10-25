package shared

import (
	"time"
)

type DeviceTypeSubdeviceRoleLabelEnum string

const (
	DeviceTypeSubdeviceRoleLabelEnumParent DeviceTypeSubdeviceRoleLabelEnum = "Parent"
	DeviceTypeSubdeviceRoleLabelEnumChild  DeviceTypeSubdeviceRoleLabelEnum = "Child"
)

type DeviceTypeSubdeviceRoleValueEnum string

const (
	DeviceTypeSubdeviceRoleValueEnumParent DeviceTypeSubdeviceRoleValueEnum = "parent"
	DeviceTypeSubdeviceRoleValueEnumChild  DeviceTypeSubdeviceRoleValueEnum = "child"
)

type DeviceTypeSubdeviceRole struct {
	Label DeviceTypeSubdeviceRoleLabelEnum `json:"label"`
	Value DeviceTypeSubdeviceRoleValueEnum `json:"value"`
}

type DeviceType struct {
	Comments      *string                  `json:"comments,omitempty"`
	Created       *time.Time               `json:"created,omitempty"`
	CustomFields  map[string]interface{}   `json:"custom_fields,omitempty"`
	DeviceCount   *int64                   `json:"device_count,omitempty"`
	DisplayName   *string                  `json:"display_name,omitempty"`
	FrontImage    *string                  `json:"front_image,omitempty"`
	ID            *int64                   `json:"id,omitempty"`
	IsFullDepth   *bool                    `json:"is_full_depth,omitempty"`
	LastUpdated   *time.Time               `json:"last_updated,omitempty"`
	Manufacturer  NestedManufacturer       `json:"manufacturer"`
	Model         string                   `json:"model"`
	PartNumber    *string                  `json:"part_number,omitempty"`
	RearImage     *string                  `json:"rear_image,omitempty"`
	Slug          string                   `json:"slug"`
	SubdeviceRole *DeviceTypeSubdeviceRole `json:"subdevice_role,omitempty"`
	Tags          []string                 `json:"tags,omitempty"`
	UHeight       *int64                   `json:"u_height,omitempty"`
}
