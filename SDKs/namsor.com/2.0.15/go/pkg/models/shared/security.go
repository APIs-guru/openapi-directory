package shared



type SchemeAPIKey struct {
    APIKey string `security:"name=X-API-KEY"`
    
}

type Security struct {
    APIKey SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

