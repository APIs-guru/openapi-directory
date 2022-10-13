package shared

type SourceFork struct {
	Primary        *SourceSplitShard `json:"primary"`
	PrimarySource  *DerivedSource    `json:"primarySource"`
	Residual       *SourceSplitShard `json:"residual"`
	ResidualSource *DerivedSource    `json:"residualSource"`
}
