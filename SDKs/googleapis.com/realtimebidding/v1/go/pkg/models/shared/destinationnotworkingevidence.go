package shared

type DestinationNotWorkingEvidenceDNSErrorEnum string

const (
	DestinationNotWorkingEvidenceDNSErrorEnumDNSErrorUnspecified   DestinationNotWorkingEvidenceDNSErrorEnum = "DNS_ERROR_UNSPECIFIED"
	DestinationNotWorkingEvidenceDNSErrorEnumErrorDNS              DestinationNotWorkingEvidenceDNSErrorEnum = "ERROR_DNS"
	DestinationNotWorkingEvidenceDNSErrorEnumGoogleCrawlerDNSIssue DestinationNotWorkingEvidenceDNSErrorEnum = "GOOGLE_CRAWLER_DNS_ISSUE"
)

type DestinationNotWorkingEvidenceInvalidPageEnum string

const (
	DestinationNotWorkingEvidenceInvalidPageEnumInvalidPageUnspecified DestinationNotWorkingEvidenceInvalidPageEnum = "INVALID_PAGE_UNSPECIFIED"
	DestinationNotWorkingEvidenceInvalidPageEnumEmptyOrErrorPage       DestinationNotWorkingEvidenceInvalidPageEnum = "EMPTY_OR_ERROR_PAGE"
)

type DestinationNotWorkingEvidencePlatformEnum string

const (
	DestinationNotWorkingEvidencePlatformEnumPlatformUnspecified DestinationNotWorkingEvidencePlatformEnum = "PLATFORM_UNSPECIFIED"
	DestinationNotWorkingEvidencePlatformEnumPersonalComputer    DestinationNotWorkingEvidencePlatformEnum = "PERSONAL_COMPUTER"
	DestinationNotWorkingEvidencePlatformEnumAndroid             DestinationNotWorkingEvidencePlatformEnum = "ANDROID"
	DestinationNotWorkingEvidencePlatformEnumIos                 DestinationNotWorkingEvidencePlatformEnum = "IOS"
)

type DestinationNotWorkingEvidenceRedirectionErrorEnum string

const (
	DestinationNotWorkingEvidenceRedirectionErrorEnumRedirectionErrorUnspecified DestinationNotWorkingEvidenceRedirectionErrorEnum = "REDIRECTION_ERROR_UNSPECIFIED"
	DestinationNotWorkingEvidenceRedirectionErrorEnumTooManyRedirects            DestinationNotWorkingEvidenceRedirectionErrorEnum = "TOO_MANY_REDIRECTS"
	DestinationNotWorkingEvidenceRedirectionErrorEnumInvalidRedirect             DestinationNotWorkingEvidenceRedirectionErrorEnum = "INVALID_REDIRECT"
	DestinationNotWorkingEvidenceRedirectionErrorEnumEmptyRedirect               DestinationNotWorkingEvidenceRedirectionErrorEnum = "EMPTY_REDIRECT"
	DestinationNotWorkingEvidenceRedirectionErrorEnumRedirectErrorUnknown        DestinationNotWorkingEvidenceRedirectionErrorEnum = "REDIRECT_ERROR_UNKNOWN"
)

type DestinationNotWorkingEvidenceURLRejectedEnum string

const (
	DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnspecified DestinationNotWorkingEvidenceURLRejectedEnum = "URL_REJECTED_UNSPECIFIED"
	DestinationNotWorkingEvidenceURLRejectedEnumBadRequest             DestinationNotWorkingEvidenceURLRejectedEnum = "BAD_REQUEST"
	DestinationNotWorkingEvidenceURLRejectedEnumMalformedURL           DestinationNotWorkingEvidenceURLRejectedEnum = "MALFORMED_URL"
	DestinationNotWorkingEvidenceURLRejectedEnumURLRejectedUnknown     DestinationNotWorkingEvidenceURLRejectedEnum = "URL_REJECTED_UNKNOWN"
)

type DestinationNotWorkingEvidence struct {
	DNSError         *DestinationNotWorkingEvidenceDNSErrorEnum         `json:"dnsError"`
	ExpandedURL      *string                                            `json:"expandedUrl"`
	HTTPError        *int32                                             `json:"httpError"`
	InvalidPage      *DestinationNotWorkingEvidenceInvalidPageEnum      `json:"invalidPage"`
	LastCheckTime    *string                                            `json:"lastCheckTime"`
	Platform         *DestinationNotWorkingEvidencePlatformEnum         `json:"platform"`
	RedirectionError *DestinationNotWorkingEvidenceRedirectionErrorEnum `json:"redirectionError"`
	URLRejected      *DestinationNotWorkingEvidenceURLRejectedEnum      `json:"urlRejected"`
}
