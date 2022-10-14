package shared

type KernelArchitectureEnum string

const (
	KernelArchitectureEnumX8664 KernelArchitectureEnum = "x86_64"
	KernelArchitectureEnumI386  KernelArchitectureEnum = "i386"
)

type Kernel struct {
	Architecture *KernelArchitectureEnum `json:"architecture,omitempty"`
	Deprecated   *bool                   `json:"deprecated,omitempty"`
	ID           *string                 `json:"id,omitempty"`
	Kvm          *bool                   `json:"kvm,omitempty"`
	Label        *string                 `json:"label,omitempty"`
	Pvops        *bool                   `json:"pvops,omitempty"`
	Version      *string                 `json:"version,omitempty"`
	Xen          *bool                   `json:"xen,omitempty"`
}
