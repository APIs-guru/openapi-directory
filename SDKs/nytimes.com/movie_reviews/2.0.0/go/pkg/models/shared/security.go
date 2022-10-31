package shared



type SchemeApikey struct {
    APIKey string `security:"name=api-key"`
    
}

type Security struct {
    Apikey SchemeApikey `security:"scheme,type=apiKey,subtype=query"`
    
}

