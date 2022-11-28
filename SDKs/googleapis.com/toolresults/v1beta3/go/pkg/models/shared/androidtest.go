package shared

// AndroidTest
// An Android mobile test specification.
type AndroidTest struct {
	AndroidAppInfo             *AndroidAppInfo             `json:"androidAppInfo,omitempty"`
	AndroidInstrumentationTest *AndroidInstrumentationTest `json:"androidInstrumentationTest,omitempty"`
	AndroidRoboTest            *AndroidRoboTest            `json:"androidRoboTest,omitempty"`
	AndroidTestLoop            map[string]interface{}      `json:"androidTestLoop,omitempty"`
	TestTimeout                *Duration                   `json:"testTimeout,omitempty"`
}
