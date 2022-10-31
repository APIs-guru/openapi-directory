package shared



type IosTest struct {
    IosAppInfo *IosAppInfo `json:"iosAppInfo,omitempty"`
    IosRoboTest map[string]interface{} `json:"iosRoboTest,omitempty"`
    IosTestLoop *IosTestLoop `json:"iosTestLoop,omitempty"`
    IosXcTest *IosXcTest `json:"iosXcTest,omitempty"`
    TestTimeout *Duration `json:"testTimeout,omitempty"`
    
}

