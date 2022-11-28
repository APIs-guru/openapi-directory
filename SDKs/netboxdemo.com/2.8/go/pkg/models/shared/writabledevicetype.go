package shared

type WritableDeviceTypeParentChildStatusEnum string

const (
	WritableDeviceTypeParentChildStatusEnumParent WritableDeviceTypeParentChildStatusEnum = "parent"
	WritableDeviceTypeParentChildStatusEnumChild  WritableDeviceTypeParentChildStatusEnum = "child"
)

type WritableDeviceTypeInput struct {
	Comments      *string                                  `json:"comments,omitempty"`
	CustomFields  map[string]interface{}                   `json:"custom_fields,omitempty"`
	IsFullDepth   *bool                                    `json:"is_full_depth,omitempty"`
	Manufacturer  int64                                    `json:"manufacturer"`
	Model         string                                   `json:"model"`
	PartNumber    *string                                  `json:"part_number,omitempty"`
	Slug          string                                   `json:"slug"`
	SubdeviceRole *WritableDeviceTypeParentChildStatusEnum `json:"subdevice_role,omitempty"`
	Tags          []string                                 `json:"tags,omitempty"`
	UHeight       *int64                                   `json:"u_height,omitempty"`
}
