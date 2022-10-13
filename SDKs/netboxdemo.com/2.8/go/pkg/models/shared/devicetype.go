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

type DeviceTypeSubdeviceRoleSubdeviceRole struct {
	Label DeviceTypeSubdeviceRoleLabelEnum `json:"label"`
	Value DeviceTypeSubdeviceRoleValueEnum `json:"value"`
}

type DeviceType struct {
	Comments      *string                               `json:"comments"`
	Created       *time.Time                            `json:"created"`
	CustomFields  map[string]interface{}                `json:"custom_fields"`
	DeviceCount   *int64                                `json:"device_count"`
	DisplayName   *string                               `json:"display_name"`
	FrontImage    *string                               `json:"front_image"`
	ID            *int64                                `json:"id"`
	IsFullDepth   *bool                                 `json:"is_full_depth"`
	LastUpdated   *time.Time                            `json:"last_updated"`
	Manufacturer  NestedManufacturer                    `json:"manufacturer"`
	Model         string                                `json:"model"`
	PartNumber    *string                               `json:"part_number"`
	RearImage     *string                               `json:"rear_image"`
	Slug          string                                `json:"slug"`
	SubdeviceRole *DeviceTypeSubdeviceRoleSubdeviceRole `json:"subdevice_role"`
	Tags          []string                              `json:"tags"`
	UHeight       *int64                                `json:"u_height"`
}
