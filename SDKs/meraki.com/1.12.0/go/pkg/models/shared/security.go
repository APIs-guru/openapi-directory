package shared



type SchemeMerakiAPIKey struct {
    APIKey string `security:"name=X-Cisco-Meraki-API-Key"`
    
}

type Security struct {
    MerakiAPIKey SchemeMerakiAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

