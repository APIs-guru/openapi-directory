package shared

type OsPolicyInventoryFilter struct {
	OsShortName *string `json:"osShortName"`
	OsVersion   *string `json:"osVersion"`
}
