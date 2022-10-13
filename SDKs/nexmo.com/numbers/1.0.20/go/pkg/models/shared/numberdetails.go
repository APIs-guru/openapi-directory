package shared

type NumberDetails struct {
	Country      string  `form:"name=country"`
	Msisdn       string  `form:"name=msisdn"`
	TargetAPIKey *string `form:"name=target_api_key"`
}
