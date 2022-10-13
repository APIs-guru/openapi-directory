package shared

type DynamicSourceSplit struct {
	Primary  *DerivedSource `json:"primary"`
	Residual *DerivedSource `json:"residual"`
}
