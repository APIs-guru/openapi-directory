package shared

type IosXcTest struct {
	AppBundleID             *string        `json:"appBundleId,omitempty"`
	TestSpecialEntitlements *bool          `json:"testSpecialEntitlements,omitempty"`
	TestsZip                *FileReference `json:"testsZip,omitempty"`
	XcodeVersion            *string        `json:"xcodeVersion,omitempty"`
	Xctestrun               *FileReference `json:"xctestrun,omitempty"`
}
