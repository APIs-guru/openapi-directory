package shared



type Platform struct {
    Description *string `json:"description,omitempty"`
    DeviceCount *int64 `json:"device_count,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Manufacturer *NestedManufacturer `json:"manufacturer,omitempty"`
    Name string `json:"name"`
    NapalmArgs *string `json:"napalm_args,omitempty"`
    NapalmDriver *string `json:"napalm_driver,omitempty"`
    Slug string `json:"slug"`
    VirtualmachineCount *int64 `json:"virtualmachine_count,omitempty"`
    
}

