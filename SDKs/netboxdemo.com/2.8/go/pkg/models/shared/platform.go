package shared

type Platform struct {
	Description         *string             `json:"description"`
	DeviceCount         *int64              `json:"device_count"`
	ID                  *int64              `json:"id"`
	Manufacturer        *NestedManufacturer `json:"manufacturer"`
	Name                string              `json:"name"`
	NapalmArgs          *string             `json:"napalm_args"`
	NapalmDriver        *string             `json:"napalm_driver"`
	Slug                string              `json:"slug"`
	VirtualmachineCount *int64              `json:"virtualmachine_count"`
}
