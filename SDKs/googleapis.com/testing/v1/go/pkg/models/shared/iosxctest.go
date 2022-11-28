package shared

// IosXcTest
// A test of an iOS application that uses the XCTest framework. Xcode supports the option to "build for testing", which generates an .xctestrun file that contains a test specification (arguments, test methods, etc). This test type accepts a zip file containing the .xctestrun file and the corresponding contents of the Build/Products directory that contains all the binaries needed to run the tests.
type IosXcTest struct {
	AppBundleID             *string        `json:"appBundleId,omitempty"`
	TestSpecialEntitlements *bool          `json:"testSpecialEntitlements,omitempty"`
	TestsZip                *FileReference `json:"testsZip,omitempty"`
	XcodeVersion            *string        `json:"xcodeVersion,omitempty"`
	Xctestrun               *FileReference `json:"xctestrun,omitempty"`
}
