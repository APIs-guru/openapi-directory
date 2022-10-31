package shared



type SchemeAPIKey struct {
    APIKey string `security:"name=ApiKey"`
    
}

type SchemeBasic struct {
    Authorization string `security:"name=Authorization"`
    
}

