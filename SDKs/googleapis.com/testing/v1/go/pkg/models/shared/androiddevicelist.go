package shared

// AndroidDeviceList
// A list of Android device configurations in which the test is to be executed.
type AndroidDeviceList struct {
	AndroidDevices []AndroidDevice `json:"androidDevices,omitempty"`
}
