package shared

type WritablePlatformInput struct {
	Description  *string `json:"description,omitempty"`
	Manufacturer *int64  `json:"manufacturer,omitempty"`
	Name         string  `json:"name"`
	NapalmArgs   *string `json:"napalm_args,omitempty"`
	NapalmDriver *string `json:"napalm_driver,omitempty"`
	Slug         string  `json:"slug"`
}
