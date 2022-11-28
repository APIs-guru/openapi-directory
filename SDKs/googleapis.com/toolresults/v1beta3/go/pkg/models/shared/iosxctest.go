package shared

// IosXcTest
// A test of an iOS application that uses the XCTest framework.
type IosXcTest struct {
	BundleID     *string `json:"bundleId,omitempty"`
	XcodeVersion *string `json:"xcodeVersion,omitempty"`
}
