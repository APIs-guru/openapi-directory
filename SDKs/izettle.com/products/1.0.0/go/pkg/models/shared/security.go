package shared



type SchemeZettleAPIKey struct {
    APIKey string `security:"name=Authorization"`
    
}

type SchemeZettleOauth struct {
    Authorization string `security:"name=Authorization"`
    
}

