package shared



type SchemeCookieAuth struct {
    APIKey string `security:"name=portal"`
    
}

type Security struct {
    CookieAuth SchemeCookieAuth `security:"scheme,type=apiKey,subtype=header"`
    
}

