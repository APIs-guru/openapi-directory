package shared

type OsPolicyResource struct {
	Exec       *OsPolicyResourceExecResource       `json:"exec"`
	File       *OsPolicyResourceFileResource       `json:"file"`
	ID         *string                             `json:"id"`
	Pkg        *OsPolicyResourcePackageResource    `json:"pkg"`
	Repository *OsPolicyResourceRepositoryResource `json:"repository"`
}
