package shared

type AndroidTest struct {
	AndroidAppInfo             *AndroidAppInfo             `json:"androidAppInfo"`
	AndroidInstrumentationTest *AndroidInstrumentationTest `json:"androidInstrumentationTest"`
	AndroidRoboTest            *AndroidRoboTest            `json:"androidRoboTest"`
	AndroidTestLoop            map[string]interface{}      `json:"androidTestLoop"`
	TestTimeout                *Duration                   `json:"testTimeout"`
}
