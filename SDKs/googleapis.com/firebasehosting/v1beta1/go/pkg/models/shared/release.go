package shared




type ReleaseTypeEnum string

const (
    ReleaseTypeEnumTypeUnspecified ReleaseTypeEnum = "TYPE_UNSPECIFIED"
ReleaseTypeEnumDeploy ReleaseTypeEnum = "DEPLOY"
ReleaseTypeEnumRollback ReleaseTypeEnum = "ROLLBACK"
ReleaseTypeEnumSiteDisable ReleaseTypeEnum = "SITE_DISABLE"
)


type Release struct {
    Message *string `json:"message,omitempty"`
    Name *string `json:"name,omitempty"`
    ReleaseTime *string `json:"releaseTime,omitempty"`
    ReleaseUser *ActingUser `json:"releaseUser,omitempty"`
    Type *ReleaseTypeEnum `json:"type,omitempty"`
    Version *Version `json:"version,omitempty"`
    
}

