package shared

// LinodeTypeAddonsBackupsPrice
// Cost of enabling Backups for this Linode Type.
type LinodeTypeAddonsBackupsPrice struct {
	Hourly  *int64 `json:"hourly,omitempty"`
	Monthly *int64 `json:"monthly,omitempty"`
}

// LinodeTypeAddonsBackups
// Information about the optional Backup service offered for Linodes.
type LinodeTypeAddonsBackups struct {
	Price *LinodeTypeAddonsBackupsPrice `json:"price,omitempty"`
}

// LinodeTypeAddons
// A list of optional add-on services for Linodes and their associated costs.
type LinodeTypeAddons struct {
	Backups *LinodeTypeAddonsBackups `json:"backups,omitempty"`
}

type LinodeTypeClassEnum string

const (
	LinodeTypeClassEnumNanode    LinodeTypeClassEnum = "nanode"
	LinodeTypeClassEnumStandard  LinodeTypeClassEnum = "standard"
	LinodeTypeClassEnumDedicated LinodeTypeClassEnum = "dedicated"
	LinodeTypeClassEnumGpu       LinodeTypeClassEnum = "gpu"
	LinodeTypeClassEnumHighmem   LinodeTypeClassEnum = "highmem"
)

// LinodeTypePrice
// Cost in US dollars, broken down into hourly and monthly charges.
type LinodeTypePrice struct {
	Hourly  *int64 `json:"hourly,omitempty"`
	Monthly *int64 `json:"monthly,omitempty"`
}

// LinodeType
// Returns collection of Linode types, including pricing and specifications for each type. These are used when [creating](/docs/api/linode-instances/#linode-create) or [resizing](/docs/api/linode-instances/#linode-resize) Linodes.
type LinodeType struct {
	Addons     *LinodeTypeAddons    `json:"addons,omitempty"`
	Class      *LinodeTypeClassEnum `json:"class,omitempty"`
	Disk       *int64               `json:"disk,omitempty"`
	Gpus       *int64               `json:"gpus,omitempty"`
	ID         *string              `json:"id,omitempty"`
	Label      *string              `json:"label,omitempty"`
	Memory     *int64               `json:"memory,omitempty"`
	NetworkOut *int64               `json:"network_out,omitempty"`
	Price      *LinodeTypePrice     `json:"price,omitempty"`
	Successor  *string              `json:"successor,omitempty"`
	Transfer   *int64               `json:"transfer,omitempty"`
	Vcpus      *int64               `json:"vcpus,omitempty"`
}
