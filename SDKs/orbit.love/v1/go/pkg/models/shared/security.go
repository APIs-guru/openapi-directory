package shared



type SchemeAPIKey struct {
    APIKey string `security:"name=api_key"`
    
}

type SchemeBearer struct {
    APIKey string `security:"name=Authorization"`
    
}

