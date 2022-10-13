package shared

type RestDescriptionAuthOauth2Scopes struct {
	Description *string `json:"description"`
}

type RestDescriptionAuthOauth2 struct {
	Scopes map[string]RestDescriptionAuthOauth2Scopes `json:"scopes"`
}

type RestDescriptionAuth struct {
	Oauth2 *RestDescriptionAuthOauth2 `json:"oauth2"`
}

type RestDescriptionIcons struct {
	X16 *string `json:"x16"`
	X32 *string `json:"x32"`
}

type RestDescription struct {
	Auth                      *RestDescriptionAuth    `json:"auth"`
	BasePath                  *string                 `json:"basePath"`
	BaseURL                   *string                 `json:"baseUrl"`
	BatchPath                 *string                 `json:"batchPath"`
	CanonicalName             *string                 `json:"canonicalName"`
	Description               *string                 `json:"description"`
	DiscoveryVersion          *string                 `json:"discoveryVersion"`
	DocumentationLink         *string                 `json:"documentationLink"`
	Etag                      *string                 `json:"etag"`
	ExponentialBackoffDefault *bool                   `json:"exponentialBackoffDefault"`
	Features                  []string                `json:"features"`
	Icons                     *RestDescriptionIcons   `json:"icons"`
	ID                        *string                 `json:"id"`
	Kind                      *string                 `json:"kind"`
	Labels                    []string                `json:"labels"`
	Methods                   map[string]RestMethod   `json:"methods"`
	Name                      *string                 `json:"name"`
	OwnerDomain               *string                 `json:"ownerDomain"`
	OwnerName                 *string                 `json:"ownerName"`
	PackagePath               *string                 `json:"packagePath"`
	Parameters                map[string]JSONSchema   `json:"parameters"`
	Protocol                  *string                 `json:"protocol"`
	Resources                 map[string]RestResource `json:"resources"`
	Revision                  *string                 `json:"revision"`
	RootURL                   *string                 `json:"rootUrl"`
	Schemas                   map[string]JSONSchema   `json:"schemas"`
	ServicePath               *string                 `json:"servicePath"`
	Title                     *string                 `json:"title"`
	Version                   *string                 `json:"version"`
	VersionModule             *bool                   `json:"version_module"`
}
