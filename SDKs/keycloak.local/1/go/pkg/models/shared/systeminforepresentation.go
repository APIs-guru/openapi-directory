package shared



type SystemInfoRepresentation struct {
    FileEncoding *string `json:"fileEncoding,omitempty"`
    JavaHome *string `json:"javaHome,omitempty"`
    JavaRuntime *string `json:"javaRuntime,omitempty"`
    JavaVendor *string `json:"javaVendor,omitempty"`
    JavaVersion *string `json:"javaVersion,omitempty"`
    JavaVM *string `json:"javaVm,omitempty"`
    JavaVMVersion *string `json:"javaVmVersion,omitempty"`
    OsArchitecture *string `json:"osArchitecture,omitempty"`
    OsName *string `json:"osName,omitempty"`
    OsVersion *string `json:"osVersion,omitempty"`
    ServerTime *string `json:"serverTime,omitempty"`
    Uptime *string `json:"uptime,omitempty"`
    UptimeMillis *int64 `json:"uptimeMillis,omitempty"`
    UserDir *string `json:"userDir,omitempty"`
    UserLocale *string `json:"userLocale,omitempty"`
    UserName *string `json:"userName,omitempty"`
    UserTimezone *string `json:"userTimezone,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

