package shared

type LinodeTypeAddonsBackupsPrice struct {
	Hourly  *int64 `json:"hourly"`
	Monthly *int64 `json:"monthly"`
}

type LinodeTypeAddonsBackups struct {
	Price *LinodeTypeAddonsBackupsPrice `json:"price"`
}

type LinodeTypeAddons struct {
	Backups *LinodeTypeAddonsBackups `json:"backups"`
}

type LinodeTypeClassEnum string

const (
	LinodeTypeClassEnumNanode    LinodeTypeClassEnum = "nanode"
	LinodeTypeClassEnumStandard  LinodeTypeClassEnum = "standard"
	LinodeTypeClassEnumDedicated LinodeTypeClassEnum = "dedicated"
	LinodeTypeClassEnumGpu       LinodeTypeClassEnum = "gpu"
	LinodeTypeClassEnumHighmem   LinodeTypeClassEnum = "highmem"
)

type LinodeTypePrice struct {
	Hourly  *int64 `json:"hourly"`
	Monthly *int64 `json:"monthly"`
}

type LinodeType struct {
	Addons     *LinodeTypeAddons    `json:"addons"`
	Class      *LinodeTypeClassEnum `json:"class"`
	Disk       *int64               `json:"disk"`
	Gpus       *int64               `json:"gpus"`
	ID         *string              `json:"id"`
	Label      *string              `json:"label"`
	Memory     *int64               `json:"memory"`
	NetworkOut *int64               `json:"network_out"`
	Price      *LinodeTypePrice     `json:"price"`
	Successor  *string              `json:"successor"`
	Transfer   *int64               `json:"transfer"`
	Vcpus      *int64               `json:"vcpus"`
}
