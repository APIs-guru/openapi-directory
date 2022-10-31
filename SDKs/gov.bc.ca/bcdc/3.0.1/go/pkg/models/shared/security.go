package shared



type SchemeGithubAccessCode struct {
    Authorization string `security:"name=Authorization"`
    
}

type SchemeInternalAPIKey struct {
    APIKey string `security:"name=ckan_api_key"`
    
}

type SecurityOption1 struct {
    GithubAccessCode SchemeGithubAccessCode `security:"scheme,type=oauth2"`
    
}

type SecurityOption2 struct {
    InternalAPIKey SchemeInternalAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type Security struct {
    Option1 *SecurityOption1 `security:"option"`
    Option2 *SecurityOption2 `security:"option"`
    
}

