package shared

type URL struct {
	Authority   *string                `json:"authority"`
	Content     map[string]interface{} `json:"content"`
	DefaultPort *int32                 `json:"defaultPort"`
	File        *string                `json:"file"`
	Host        *string                `json:"host"`
	Path        *string                `json:"path"`
	Port        *int32                 `json:"port"`
	Protocol    *string                `json:"protocol"`
	Query       *string                `json:"query"`
	Ref         *string                `json:"ref"`
	UserInfo    *string                `json:"userInfo"`
}
