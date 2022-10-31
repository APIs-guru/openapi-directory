package shared



type SchemeDeveloperHapikey struct {
    APIKey string `security:"name=hapikey"`
    
}

type SchemeHapikey struct {
    APIKey string `security:"name=hapikey"`
    
}

type SchemeOauth2Legacy struct {
    Authorization string `security:"name=Authorization"`
    
}

