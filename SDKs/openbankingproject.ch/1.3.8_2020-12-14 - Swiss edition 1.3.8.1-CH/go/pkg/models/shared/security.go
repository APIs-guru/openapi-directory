package shared



type SchemeBearerAuthOAuth struct {
    Authorization string `security:"name=Authorization"`
    
}

type Security struct {
    BearerAuthOAuth *SchemeBearerAuthOAuth `security:"scheme,type=http,subtype=bearer"`
    
}

