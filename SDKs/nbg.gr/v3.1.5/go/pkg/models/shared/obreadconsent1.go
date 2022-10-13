package shared

type ObReadConsent1 struct {
	Data ObReadData1            `json:"Data"`
	Risk map[string]interface{} `json:"Risk"`
}
