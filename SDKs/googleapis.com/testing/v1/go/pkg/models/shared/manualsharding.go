package shared

// ManualSharding
// Shards test cases into the specified groups of packages, classes, and/or methods. With manual sharding enabled, specifying test targets via environment_variables or in InstrumentationTest is invalid.
type ManualSharding struct {
	TestTargetsForShard []TestTargetsForShard `json:"testTargetsForShard,omitempty"`
}
