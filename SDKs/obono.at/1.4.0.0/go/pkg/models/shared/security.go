package shared



type SchemeBasicAuth struct {
    Authorization string `security:"name=Authorization"`
    
}

type SchemeJwt struct {
    APIKey string `security:"name=Authorization"`
    
}

type Security struct {
    Jwt SchemeJwt `security:"scheme,type=apiKey,subtype=header"`
    
}

