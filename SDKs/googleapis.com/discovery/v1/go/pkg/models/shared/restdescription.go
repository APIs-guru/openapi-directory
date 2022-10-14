package shared

type RestDescriptionAuthOauth2Scopes struct {
	Description *string `json:"description,omitempty"`
}

type RestDescriptionAuthOauth2 struct {
	Scopes map[string]RestDescriptionAuthOauth2Scopes `json:"scopes,omitempty"`
}

type RestDescriptionAuth struct {
	Oauth2 *RestDescriptionAuthOauth2 `json:"oauth2,omitempty"`
}

type RestDescriptionIcons struct {
	X16 *string `json:"x16,omitempty"`
	X32 *string `json:"x32,omitempty"`
}

type RestDescription struct {
	Auth                      *RestDescriptionAuth    `json:"auth,omitempty"`
	BasePath                  *string                 `json:"basePath,omitempty"`
	BaseURL                   *string                 `json:"baseUrl,omitempty"`
	BatchPath                 *string                 `json:"batchPath,omitempty"`
	CanonicalName             *string                 `json:"canonicalName,omitempty"`
	Description               *string                 `json:"description,omitempty"`
	DiscoveryVersion          *string                 `json:"discoveryVersion,omitempty"`
	DocumentationLink         *string                 `json:"documentationLink,omitempty"`
	Etag                      *string                 `json:"etag,omitempty"`
	ExponentialBackoffDefault *bool                   `json:"exponentialBackoffDefault,omitempty"`
	Features                  []string                `json:"features,omitempty"`
	Icons                     *RestDescriptionIcons   `json:"icons,omitempty"`
	ID                        *string                 `json:"id,omitempty"`
	Kind                      *string                 `json:"kind,omitempty"`
	Labels                    []string                `json:"labels,omitempty"`
	Methods                   map[string]RestMethod   `json:"methods,omitempty"`
	Name                      *string                 `json:"name,omitempty"`
	OwnerDomain               *string                 `json:"ownerDomain,omitempty"`
	OwnerName                 *string                 `json:"ownerName,omitempty"`
	PackagePath               *string                 `json:"packagePath,omitempty"`
	Parameters                map[string]JSONSchema   `json:"parameters,omitempty"`
	Protocol                  *string                 `json:"protocol,omitempty"`
	Resources                 map[string]RestResource `json:"resources,omitempty"`
	Revision                  *string                 `json:"revision,omitempty"`
	RootURL                   *string                 `json:"rootUrl,omitempty"`
	Schemas                   map[string]JSONSchema   `json:"schemas,omitempty"`
	ServicePath               *string                 `json:"servicePath,omitempty"`
	Title                     *string                 `json:"title,omitempty"`
	Version                   *string                 `json:"version,omitempty"`
	VersionModule             *bool                   `json:"version_module,omitempty"`
}
