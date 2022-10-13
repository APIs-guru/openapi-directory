package operations

import (
	"openapi/pkg/models/shared"
)

type SpannerProjectsInstancesBackupsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type SpannerProjectsInstancesBackupsCreateEncryptionConfigEncryptionTypeEnum string

const (
	SpannerProjectsInstancesBackupsCreateEncryptionConfigEncryptionTypeEnumEncryptionTypeUnspecified SpannerProjectsInstancesBackupsCreateEncryptionConfigEncryptionTypeEnum = "ENCRYPTION_TYPE_UNSPECIFIED"
	SpannerProjectsInstancesBackupsCreateEncryptionConfigEncryptionTypeEnumUseDatabaseEncryption     SpannerProjectsInstancesBackupsCreateEncryptionConfigEncryptionTypeEnum = "USE_DATABASE_ENCRYPTION"
	SpannerProjectsInstancesBackupsCreateEncryptionConfigEncryptionTypeEnumGoogleDefaultEncryption   SpannerProjectsInstancesBackupsCreateEncryptionConfigEncryptionTypeEnum = "GOOGLE_DEFAULT_ENCRYPTION"
	SpannerProjectsInstancesBackupsCreateEncryptionConfigEncryptionTypeEnumCustomerManagedEncryption SpannerProjectsInstancesBackupsCreateEncryptionConfigEncryptionTypeEnum = "CUSTOMER_MANAGED_ENCRYPTION"
)

type SpannerProjectsInstancesBackupsCreateQueryParams struct {
	DollarXgafv                    *shared.XgafvEnum                                                        `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                    *string                                                                  `queryParam:"style=form,explode=true,name=access_token"`
	Alt                            *shared.AltEnum                                                          `queryParam:"style=form,explode=true,name=alt"`
	BackupID                       *string                                                                  `queryParam:"style=form,explode=true,name=backupId"`
	Callback                       *string                                                                  `queryParam:"style=form,explode=true,name=callback"`
	EncryptionConfigEncryptionType *SpannerProjectsInstancesBackupsCreateEncryptionConfigEncryptionTypeEnum `queryParam:"style=form,explode=true,name=encryptionConfig.encryptionType"`
	EncryptionConfigKmsKeyName     *string                                                                  `queryParam:"style=form,explode=true,name=encryptionConfig.kmsKeyName"`
	Fields                         *string                                                                  `queryParam:"style=form,explode=true,name=fields"`
	Key                            *string                                                                  `queryParam:"style=form,explode=true,name=key"`
	OauthToken                     *string                                                                  `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint                    *bool                                                                    `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                      *string                                                                  `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType                     *string                                                                  `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol                 *string                                                                  `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type SpannerProjectsInstancesBackupsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SpannerProjectsInstancesBackupsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SpannerProjectsInstancesBackupsCreateSecurity struct {
	Option1 *SpannerProjectsInstancesBackupsCreateSecurityOption1 `security:"option"`
	Option2 *SpannerProjectsInstancesBackupsCreateSecurityOption2 `security:"option"`
}

type SpannerProjectsInstancesBackupsCreateRequest struct {
	PathParams  SpannerProjectsInstancesBackupsCreatePathParams
	QueryParams SpannerProjectsInstancesBackupsCreateQueryParams
	Request     *shared.Backup `request:"mediaType=application/json"`
	Security    SpannerProjectsInstancesBackupsCreateSecurity
}

type SpannerProjectsInstancesBackupsCreateResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
