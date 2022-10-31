package shared




type PackageDataPackageTypeEnum string

const (
    PackageDataPackageTypeEnumPackageTypeUnspecified PackageDataPackageTypeEnum = "PACKAGE_TYPE_UNSPECIFIED"
PackageDataPackageTypeEnumOs PackageDataPackageTypeEnum = "OS"
PackageDataPackageTypeEnumMaven PackageDataPackageTypeEnum = "MAVEN"
PackageDataPackageTypeEnumGo PackageDataPackageTypeEnum = "GO"
PackageDataPackageTypeEnumGoStdlib PackageDataPackageTypeEnum = "GO_STDLIB"
)


type PackageData struct {
    CpeURI *string `json:"cpeUri,omitempty"`
    DependencyChain []LanguagePackageDependency `json:"dependencyChain,omitempty"`
    FileLocation []FileLocation `json:"fileLocation,omitempty"`
    HashDigest *string `json:"hashDigest,omitempty"`
    Os *string `json:"os,omitempty"`
    OsVersion *string `json:"osVersion,omitempty"`
    Package *string `json:"package,omitempty"`
    PackageType *PackageDataPackageTypeEnum `json:"packageType,omitempty"`
    PatchedCve []string `json:"patchedCve,omitempty"`
    Unused *string `json:"unused,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

