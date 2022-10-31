package shared



type OsPolicyResource struct {
    Exec *OsPolicyResourceExecResource `json:"exec,omitempty"`
    File *OsPolicyResourceFileResource `json:"file,omitempty"`
    ID *string `json:"id,omitempty"`
    Pkg *OsPolicyResourcePackageResource `json:"pkg,omitempty"`
    Repository *OsPolicyResourceRepositoryResource `json:"repository,omitempty"`
    
}

