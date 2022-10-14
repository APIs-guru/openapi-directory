package shared

type URL struct {
	Authority   *string                `json:"authority,omitempty"`
	Content     map[string]interface{} `json:"content,omitempty"`
	DefaultPort *int32                 `json:"defaultPort,omitempty"`
	File        *string                `json:"file,omitempty"`
	Host        *string                `json:"host,omitempty"`
	Path        *string                `json:"path,omitempty"`
	Port        *int32                 `json:"port,omitempty"`
	Protocol    *string                `json:"protocol,omitempty"`
	Query       *string                `json:"query,omitempty"`
	Ref         *string                `json:"ref,omitempty"`
	UserInfo    *string                `json:"userInfo,omitempty"`
}
