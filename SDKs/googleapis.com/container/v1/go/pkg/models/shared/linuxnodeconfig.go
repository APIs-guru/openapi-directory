package shared

type LinuxNodeConfig struct {
	Sysctls map[string]string `json:"sysctls,omitempty"`
}
