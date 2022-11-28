package shared

// EnvironmentMatrix
// The matrix of environments in which the test is to be executed.
type EnvironmentMatrix struct {
	AndroidDeviceList *AndroidDeviceList `json:"androidDeviceList,omitempty"`
	AndroidMatrix     *AndroidMatrix     `json:"androidMatrix,omitempty"`
	IosDeviceList     *IosDeviceList     `json:"iosDeviceList,omitempty"`
}
