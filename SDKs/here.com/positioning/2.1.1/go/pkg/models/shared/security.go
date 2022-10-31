package shared



type SchemeAPIKey struct {
    APIKey string `security:"name=apiKey"`
    
}

type SchemeAccessToken struct {
    Authorization string `security:"name=Authorization"`
    
}

type SecurityOption1 struct {
    APIKey SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
    
}

type SecurityOption2 struct {
    AccessToken SchemeAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type Security struct {
    Option1 *SecurityOption1 `security:"option"`
    Option2 *SecurityOption2 `security:"option"`
    
}

