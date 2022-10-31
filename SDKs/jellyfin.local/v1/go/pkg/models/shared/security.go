package shared



type SchemeCustomAuthentication struct {
    APIKey string `security:"name=X-Emby-Authorization"`
    
}

