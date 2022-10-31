package shared



type SchemeOauth struct {
    Authorization string `security:"name=Authorization"`
    
}

type SchemePersonalAccessToken struct {
    Authorization string `security:"name=Authorization"`
    
}

