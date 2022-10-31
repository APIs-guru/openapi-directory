package shared



type SchemeBearer struct {
    APIKey string `security:"name=JWT"`
    
}

type Security struct {
    Bearer SchemeBearer `security:"scheme,type=apiKey,subtype=header"`
    
}

