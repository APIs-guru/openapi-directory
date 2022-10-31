package shared



type SchemeAccessToken struct {
    Authorization string `security:"name=Authorization"`
    
}

type Security struct {
    AccessToken SchemeAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

