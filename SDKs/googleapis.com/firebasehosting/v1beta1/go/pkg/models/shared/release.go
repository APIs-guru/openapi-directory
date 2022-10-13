package shared

type ReleaseTypeEnum string

const (
	ReleaseTypeEnumTypeUnspecified ReleaseTypeEnum = "TYPE_UNSPECIFIED"
	ReleaseTypeEnumDeploy          ReleaseTypeEnum = "DEPLOY"
	ReleaseTypeEnumRollback        ReleaseTypeEnum = "ROLLBACK"
	ReleaseTypeEnumSiteDisable     ReleaseTypeEnum = "SITE_DISABLE"
)

type Release struct {
	Message     *string          `json:"message"`
	Name        *string          `json:"name"`
	ReleaseTime *string          `json:"releaseTime"`
	ReleaseUser *ActingUser      `json:"releaseUser"`
	Type        *ReleaseTypeEnum `json:"type"`
	Version     *Version         `json:"version"`
}
