package shared

type Category struct {
	ResourceFamily     *string `json:"resourceFamily"`
	ResourceGroup      *string `json:"resourceGroup"`
	ServiceDisplayName *string `json:"serviceDisplayName"`
	UsageType          *string `json:"usageType"`
}
