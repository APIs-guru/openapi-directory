package shared

type InstanceAndroidDetails struct {
	EnablePiracyCheck *bool   `json:"enablePiracyCheck"`
	Kind              *string `json:"kind"`
	PackageName       *string `json:"packageName"`
	Preferred         *bool   `json:"preferred"`
}
