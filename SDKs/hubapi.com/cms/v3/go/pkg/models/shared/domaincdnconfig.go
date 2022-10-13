package shared

type DomainCdnConfigMinimumTLSVersionEnum string

const (
	DomainCdnConfigMinimumTLSVersionEnumOne0 DomainCdnConfigMinimumTLSVersionEnum = "1.0"
	DomainCdnConfigMinimumTLSVersionEnumOne1 DomainCdnConfigMinimumTLSVersionEnum = "1.1"
	DomainCdnConfigMinimumTLSVersionEnumOne2 DomainCdnConfigMinimumTLSVersionEnum = "1.2"
	DomainCdnConfigMinimumTLSVersionEnumOne3 DomainCdnConfigMinimumTLSVersionEnum = "1.3"
	DomainCdnConfigMinimumTLSVersionEnumNone DomainCdnConfigMinimumTLSVersionEnum = "none"
	DomainCdnConfigMinimumTLSVersionEnumNull DomainCdnConfigMinimumTLSVersionEnum = "null"
)

type DomainCdnConfigSslStatusEnum string

const (
	DomainCdnConfigSslStatusEnumZero   DomainCdnConfigSslStatusEnum = "0"
	DomainCdnConfigSslStatusEnumOne    DomainCdnConfigSslStatusEnum = "1"
	DomainCdnConfigSslStatusEnumTwo    DomainCdnConfigSslStatusEnum = "2"
	DomainCdnConfigSslStatusEnumThree  DomainCdnConfigSslStatusEnum = "3"
	DomainCdnConfigSslStatusEnumFour   DomainCdnConfigSslStatusEnum = "4"
	DomainCdnConfigSslStatusEnumFive   DomainCdnConfigSslStatusEnum = "5"
	DomainCdnConfigSslStatusEnumSix    DomainCdnConfigSslStatusEnum = "6"
	DomainCdnConfigSslStatusEnumSeven  DomainCdnConfigSslStatusEnum = "7"
	DomainCdnConfigSslStatusEnumEight  DomainCdnConfigSslStatusEnum = "8"
	DomainCdnConfigSslStatusEnumNine   DomainCdnConfigSslStatusEnum = "9"
	DomainCdnConfigSslStatusEnumTen    DomainCdnConfigSslStatusEnum = "10"
	DomainCdnConfigSslStatusEnumEleven DomainCdnConfigSslStatusEnum = "11"
)

type DomainCdnConfigValidationMethodEnum string

const (
	DomainCdnConfigValidationMethodEnumZero DomainCdnConfigValidationMethodEnum = "0"
	DomainCdnConfigValidationMethodEnumOne  DomainCdnConfigValidationMethodEnum = "1"
	DomainCdnConfigValidationMethodEnumTwo  DomainCdnConfigValidationMethodEnum = "2"
)

type DomainCdnConfig struct {
	AlternateOriginHostname string                               `json:"alternateOriginHostname"`
	CdnGroupID              string                               `json:"cdnGroupId"`
	CdnID                   string                               `json:"cdnId"`
	CertExpirationDate      int64                                `json:"certExpirationDate"`
	CertID                  int64                                `json:"certId"`
	Cname                   string                               `json:"cname"`
	CnameTarget             string                               `json:"cnameTarget"`
	Created                 int64                                `json:"created"`
	DomainID                int64                                `json:"domainId"`
	HTTPBody                string                               `json:"httpBody"`
	HTTPURLPath             string                               `json:"httpUrlPath"`
	ID                      int64                                `json:"id"`
	MinimumTLSVersion       DomainCdnConfigMinimumTLSVersionEnum `json:"minimumTlsVersion"`
	PortalID                int32                                `json:"portalId"`
	SslStatus               DomainCdnConfigSslStatusEnum         `json:"sslStatus"`
	Updated                 int64                                `json:"updated"`
	ValidationMethod        DomainCdnConfigValidationMethodEnum  `json:"validationMethod"`
}
