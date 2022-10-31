package shared



type SchemeAuthorizationCodeToken struct {
    Authorization string `security:"name=Authorization"`
    
}

type SchemeClientCredentialsToken struct {
    Authorization string `security:"name=Authorization"`
    
}

type SchemeClientID struct {
    APIKey string `security:"name=Client-Id"`
    
}

