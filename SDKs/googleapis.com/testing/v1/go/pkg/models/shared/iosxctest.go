package shared

type IosXcTest struct {
	AppBundleID             *string        `json:"appBundleId"`
	TestSpecialEntitlements *bool          `json:"testSpecialEntitlements"`
	TestsZip                *FileReference `json:"testsZip"`
	XcodeVersion            *string        `json:"xcodeVersion"`
	Xctestrun               *FileReference `json:"xctestrun"`
}
