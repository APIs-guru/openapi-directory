package shared

// IosDeviceList
// A list of iOS device configurations in which the test is to be executed.
type IosDeviceList struct {
	IosDevices []IosDevice `json:"iosDevices,omitempty"`
}
