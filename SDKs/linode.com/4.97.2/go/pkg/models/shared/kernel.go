package shared

type KernelArchitectureEnum string

const (
	KernelArchitectureEnumX8664 KernelArchitectureEnum = "x86_64"
	KernelArchitectureEnumI386  KernelArchitectureEnum = "i386"
)

type Kernel struct {
	Architecture *KernelArchitectureEnum `json:"architecture"`
	Deprecated   *bool                   `json:"deprecated"`
	ID           *string                 `json:"id"`
	Kvm          *bool                   `json:"kvm"`
	Label        *string                 `json:"label"`
	Pvops        *bool                   `json:"pvops"`
	Version      *string                 `json:"version"`
	Xen          *bool                   `json:"xen"`
}
