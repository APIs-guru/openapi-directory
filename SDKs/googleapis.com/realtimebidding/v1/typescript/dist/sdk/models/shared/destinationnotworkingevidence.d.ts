import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DestinationNotWorkingEvidenceDnsErrorEnum {
    DnsErrorUnspecified = "DNS_ERROR_UNSPECIFIED",
    ErrorDns = "ERROR_DNS",
    GoogleCrawlerDnsIssue = "GOOGLE_CRAWLER_DNS_ISSUE"
}
export declare enum DestinationNotWorkingEvidenceInvalidPageEnum {
    InvalidPageUnspecified = "INVALID_PAGE_UNSPECIFIED",
    EmptyOrErrorPage = "EMPTY_OR_ERROR_PAGE"
}
export declare enum DestinationNotWorkingEvidencePlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED",
    PersonalComputer = "PERSONAL_COMPUTER",
    Android = "ANDROID",
    Ios = "IOS"
}
export declare enum DestinationNotWorkingEvidenceRedirectionErrorEnum {
    RedirectionErrorUnspecified = "REDIRECTION_ERROR_UNSPECIFIED",
    TooManyRedirects = "TOO_MANY_REDIRECTS",
    InvalidRedirect = "INVALID_REDIRECT",
    EmptyRedirect = "EMPTY_REDIRECT",
    RedirectErrorUnknown = "REDIRECT_ERROR_UNKNOWN"
}
export declare enum DestinationNotWorkingEvidenceUrlRejectedEnum {
    UrlRejectedUnspecified = "URL_REJECTED_UNSPECIFIED",
    BadRequest = "BAD_REQUEST",
    MalformedUrl = "MALFORMED_URL",
    UrlRejectedUnknown = "URL_REJECTED_UNKNOWN"
}
/**
 * Evidence of the creative's destination URL not functioning properly or having been incorrectly set up.
**/
export declare class DestinationNotWorkingEvidence extends SpeakeasyBase {
    dnsError?: DestinationNotWorkingEvidenceDnsErrorEnum;
    expandedUrl?: string;
    httpError?: number;
    invalidPage?: DestinationNotWorkingEvidenceInvalidPageEnum;
    lastCheckTime?: string;
    platform?: DestinationNotWorkingEvidencePlatformEnum;
    redirectionError?: DestinationNotWorkingEvidenceRedirectionErrorEnum;
    urlRejected?: DestinationNotWorkingEvidenceUrlRejectedEnum;
}
