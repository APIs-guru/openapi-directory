package operations

import (
	"openapi/pkg/models/shared"
)

type WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnum string

const (
	WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnumCompressionTypeUnspecified WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnum = "COMPRESSION_TYPE_UNSPECIFIED"
	WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnumRaw                        WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnum = "RAW"
	WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnumRice                       WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnum = "RICE"
)

type WebriskThreatListsComputeDiffThreatTypeEnum string

const (
	WebriskThreatListsComputeDiffThreatTypeEnumThreatTypeUnspecified             WebriskThreatListsComputeDiffThreatTypeEnum = "THREAT_TYPE_UNSPECIFIED"
	WebriskThreatListsComputeDiffThreatTypeEnumMalware                           WebriskThreatListsComputeDiffThreatTypeEnum = "MALWARE"
	WebriskThreatListsComputeDiffThreatTypeEnumSocialEngineering                 WebriskThreatListsComputeDiffThreatTypeEnum = "SOCIAL_ENGINEERING"
	WebriskThreatListsComputeDiffThreatTypeEnumUnwantedSoftware                  WebriskThreatListsComputeDiffThreatTypeEnum = "UNWANTED_SOFTWARE"
	WebriskThreatListsComputeDiffThreatTypeEnumSocialEngineeringExtendedCoverage WebriskThreatListsComputeDiffThreatTypeEnum = "SOCIAL_ENGINEERING_EXTENDED_COVERAGE"
)

type WebriskThreatListsComputeDiffQueryParams struct {
	DollarXgafv                      *shared.XgafvEnum                                                   `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                      *string                                                             `queryParam:"style=form,explode=true,name=access_token"`
	Alt                              *shared.AltEnum                                                     `queryParam:"style=form,explode=true,name=alt"`
	Callback                         *string                                                             `queryParam:"style=form,explode=true,name=callback"`
	ConstraintsMaxDatabaseEntries    *int64                                                              `queryParam:"style=form,explode=true,name=constraints.maxDatabaseEntries"`
	ConstraintsMaxDiffEntries        *int64                                                              `queryParam:"style=form,explode=true,name=constraints.maxDiffEntries"`
	ConstraintsSupportedCompressions []WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnum `queryParam:"style=form,explode=true,name=constraints.supportedCompressions"`
	Fields                           *string                                                             `queryParam:"style=form,explode=true,name=fields"`
	Key                              *string                                                             `queryParam:"style=form,explode=true,name=key"`
	OauthToken                       *string                                                             `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint                      *bool                                                               `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                        *string                                                             `queryParam:"style=form,explode=true,name=quotaUser"`
	ThreatType                       *WebriskThreatListsComputeDiffThreatTypeEnum                        `queryParam:"style=form,explode=true,name=threatType"`
	UploadType                       *string                                                             `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol                   *string                                                             `queryParam:"style=form,explode=true,name=upload_protocol"`
	VersionToken                     *string                                                             `queryParam:"style=form,explode=true,name=versionToken"`
}

type WebriskThreatListsComputeDiffSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type WebriskThreatListsComputeDiffRequest struct {
	QueryParams WebriskThreatListsComputeDiffQueryParams
	Security    WebriskThreatListsComputeDiffSecurity
}

type WebriskThreatListsComputeDiffResponse struct {
	ContentType                                       string
	GoogleCloudWebriskV1ComputeThreatListDiffResponse *shared.GoogleCloudWebriskV1ComputeThreatListDiffResponse
	StatusCode                                        int64
}
