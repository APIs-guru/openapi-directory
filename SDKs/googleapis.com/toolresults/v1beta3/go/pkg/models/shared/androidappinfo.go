package shared



type AndroidAppInfo struct {
    Name *string `json:"name,omitempty"`
    PackageName *string `json:"packageName,omitempty"`
    VersionCode *string `json:"versionCode,omitempty"`
    VersionName *string `json:"versionName,omitempty"`
    
}

