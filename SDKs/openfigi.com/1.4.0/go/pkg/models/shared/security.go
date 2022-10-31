package shared



type SchemeAPIKeyAuth struct {
    APIKey string `security:"name=X-OPENFIGI-APIKEY"`
    
}

type Security struct {
    APIKeyAuth *SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

