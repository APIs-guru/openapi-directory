package shared

type SystemInfoRepresentation struct {
	FileEncoding   *string `json:"fileEncoding"`
	JavaHome       *string `json:"javaHome"`
	JavaRuntime    *string `json:"javaRuntime"`
	JavaVendor     *string `json:"javaVendor"`
	JavaVersion    *string `json:"javaVersion"`
	JavaVM         *string `json:"javaVm"`
	JavaVMVersion  *string `json:"javaVmVersion"`
	OsArchitecture *string `json:"osArchitecture"`
	OsName         *string `json:"osName"`
	OsVersion      *string `json:"osVersion"`
	ServerTime     *string `json:"serverTime"`
	Uptime         *string `json:"uptime"`
	UptimeMillis   *int64  `json:"uptimeMillis"`
	UserDir        *string `json:"userDir"`
	UserLocale     *string `json:"userLocale"`
	UserName       *string `json:"userName"`
	UserTimezone   *string `json:"userTimezone"`
	Version        *string `json:"version"`
}
