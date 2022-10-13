package shared

type IosTest struct {
	IosAppInfo  *IosAppInfo            `json:"iosAppInfo"`
	IosRoboTest map[string]interface{} `json:"iosRoboTest"`
	IosTestLoop *IosTestLoop           `json:"iosTestLoop"`
	IosXcTest   *IosXcTest             `json:"iosXcTest"`
	TestTimeout *Duration              `json:"testTimeout"`
}
