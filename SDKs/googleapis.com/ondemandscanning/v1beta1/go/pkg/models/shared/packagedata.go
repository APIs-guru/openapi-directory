package shared

type PackageDataPackageTypeEnum string

const (
	PackageDataPackageTypeEnumPackageTypeUnspecified PackageDataPackageTypeEnum = "PACKAGE_TYPE_UNSPECIFIED"
	PackageDataPackageTypeEnumOs                     PackageDataPackageTypeEnum = "OS"
	PackageDataPackageTypeEnumMaven                  PackageDataPackageTypeEnum = "MAVEN"
	PackageDataPackageTypeEnumGo                     PackageDataPackageTypeEnum = "GO"
	PackageDataPackageTypeEnumGoStdlib               PackageDataPackageTypeEnum = "GO_STDLIB"
)

type PackageData struct {
	CpeURI          *string                     `json:"cpeUri"`
	DependencyChain []LanguagePackageDependency `json:"dependencyChain"`
	FileLocation    []FileLocation              `json:"fileLocation"`
	HashDigest      *string                     `json:"hashDigest"`
	Os              *string                     `json:"os"`
	OsVersion       *string                     `json:"osVersion"`
	Package         *string                     `json:"package"`
	PackageType     *PackageDataPackageTypeEnum `json:"packageType"`
	PatchedCve      []string                    `json:"patchedCve"`
	Unused          *string                     `json:"unused"`
	Version         *string                     `json:"version"`
}
