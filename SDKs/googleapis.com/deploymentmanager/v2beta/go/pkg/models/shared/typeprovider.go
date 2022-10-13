package shared

type TypeProvider struct {
	CollectionOverrides             []CollectionOverride     `json:"collectionOverrides"`
	Credential                      *Credential              `json:"credential"`
	CustomCertificateAuthorityRoots []string                 `json:"customCertificateAuthorityRoots"`
	Description                     *string                  `json:"description"`
	DescriptorURL                   *string                  `json:"descriptorUrl"`
	ID                              *string                  `json:"id"`
	InsertTime                      *string                  `json:"insertTime"`
	Labels                          []TypeProviderLabelEntry `json:"labels"`
	Name                            *string                  `json:"name"`
	Operation                       *Operation               `json:"operation"`
	Options                         *Options                 `json:"options"`
	SelfLink                        *string                  `json:"selfLink"`
}
