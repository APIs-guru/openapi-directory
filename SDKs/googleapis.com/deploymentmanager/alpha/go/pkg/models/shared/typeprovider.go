package shared

type TypeProvider struct {
	CollectionOverrides             []CollectionOverride     `json:"collectionOverrides,omitempty"`
	Credential                      *Credential              `json:"credential,omitempty"`
	CustomCertificateAuthorityRoots []string                 `json:"customCertificateAuthorityRoots,omitempty"`
	Description                     *string                  `json:"description,omitempty"`
	DescriptorURL                   *string                  `json:"descriptorUrl,omitempty"`
	ID                              *string                  `json:"id,omitempty"`
	InsertTime                      *string                  `json:"insertTime,omitempty"`
	Labels                          []TypeProviderLabelEntry `json:"labels,omitempty"`
	Name                            *string                  `json:"name,omitempty"`
	Operation                       *Operation               `json:"operation,omitempty"`
	Options                         *Options                 `json:"options,omitempty"`
	SelfLink                        *string                  `json:"selfLink,omitempty"`
}
