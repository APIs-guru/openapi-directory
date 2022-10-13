package shared

type VersionedPackage struct {
	Architecture *string `json:"architecture"`
	PackageName  *string `json:"packageName"`
	Version      *string `json:"version"`
}
