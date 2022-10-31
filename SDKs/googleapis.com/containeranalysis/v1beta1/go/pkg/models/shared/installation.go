package shared




type InstallationArchitectureEnum string

const (
    InstallationArchitectureEnumArchitectureUnspecified InstallationArchitectureEnum = "ARCHITECTURE_UNSPECIFIED"
InstallationArchitectureEnumX86 InstallationArchitectureEnum = "X86"
InstallationArchitectureEnumX64 InstallationArchitectureEnum = "X64"
)


type Installation struct {
    Architecture *InstallationArchitectureEnum `json:"architecture,omitempty"`
    CpeURI *string `json:"cpeUri,omitempty"`
    License *License `json:"license,omitempty"`
    Location []Location `json:"location,omitempty"`
    Name *string `json:"name,omitempty"`
    PackageType *string `json:"packageType,omitempty"`
    Version *Version `json:"version,omitempty"`
    
}

