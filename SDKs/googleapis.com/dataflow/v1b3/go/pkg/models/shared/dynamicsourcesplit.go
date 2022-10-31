package shared

type DynamicSourceSplit struct {
	Primary  *DerivedSource `json:"primary,omitempty"`
	Residual *DerivedSource `json:"residual,omitempty"`
}
