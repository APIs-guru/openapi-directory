package shared

// OsPolicyResource
// An OS policy resource is used to define the desired state configuration and provides a specific functionality like installing/removing packages, executing a script etc. The system ensures that resources are always in their desired state by taking necessary actions if they have drifted from their desired state.
type OsPolicyResource struct {
	Exec       *OsPolicyResourceExecResource       `json:"exec,omitempty"`
	File       *OsPolicyResourceFileResource       `json:"file,omitempty"`
	ID         *string                             `json:"id,omitempty"`
	Pkg        *OsPolicyResourcePackageResource    `json:"pkg,omitempty"`
	Repository *OsPolicyResourceRepositoryResource `json:"repository,omitempty"`
}
