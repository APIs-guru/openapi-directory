package shared



type SchemeBearer struct {
    Authorization string `security:"name=Authorization"`
    
}

type SchemeCookie struct {
    APIKey string `security:"name=mercureAuthorization"`
    
}

type SecurityOption1 struct {
    Bearer SchemeBearer `security:"scheme,type=http,subtype=bearer"`
    
}

type SecurityOption2 struct {
    Cookie SchemeCookie `security:"scheme,type=apiKey,subtype=cookie"`
    
}

type Security struct {
    Option1 *SecurityOption1 `security:"option"`
    Option2 *SecurityOption2 `security:"option"`
    
}

