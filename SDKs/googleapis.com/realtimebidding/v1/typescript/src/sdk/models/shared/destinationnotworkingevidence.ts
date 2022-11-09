import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DestinationNotWorkingEvidenceDnsErrorEnum {
    DnsErrorUnspecified = "DNS_ERROR_UNSPECIFIED"
,    ErrorDns = "ERROR_DNS"
,    GoogleCrawlerDnsIssue = "GOOGLE_CRAWLER_DNS_ISSUE"
}

export enum DestinationNotWorkingEvidenceInvalidPageEnum {
    InvalidPageUnspecified = "INVALID_PAGE_UNSPECIFIED"
,    EmptyOrErrorPage = "EMPTY_OR_ERROR_PAGE"
}

export enum DestinationNotWorkingEvidencePlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED"
,    PersonalComputer = "PERSONAL_COMPUTER"
,    Android = "ANDROID"
,    Ios = "IOS"
}

export enum DestinationNotWorkingEvidenceRedirectionErrorEnum {
    RedirectionErrorUnspecified = "REDIRECTION_ERROR_UNSPECIFIED"
,    TooManyRedirects = "TOO_MANY_REDIRECTS"
,    InvalidRedirect = "INVALID_REDIRECT"
,    EmptyRedirect = "EMPTY_REDIRECT"
,    RedirectErrorUnknown = "REDIRECT_ERROR_UNKNOWN"
}

export enum DestinationNotWorkingEvidenceUrlRejectedEnum {
    UrlRejectedUnspecified = "URL_REJECTED_UNSPECIFIED"
,    BadRequest = "BAD_REQUEST"
,    MalformedUrl = "MALFORMED_URL"
,    UrlRejectedUnknown = "URL_REJECTED_UNKNOWN"
}


// DestinationNotWorkingEvidence
/** 
 * Evidence of the creative's destination URL not functioning properly or having been incorrectly set up.
**/
export class DestinationNotWorkingEvidence extends SpeakeasyBase {
  @Metadata({ data: "json, name=dnsError" })
  dnsError?: DestinationNotWorkingEvidenceDnsErrorEnum;

  @Metadata({ data: "json, name=expandedUrl" })
  expandedUrl?: string;

  @Metadata({ data: "json, name=httpError" })
  httpError?: number;

  @Metadata({ data: "json, name=invalidPage" })
  invalidPage?: DestinationNotWorkingEvidenceInvalidPageEnum;

  @Metadata({ data: "json, name=lastCheckTime" })
  lastCheckTime?: string;

  @Metadata({ data: "json, name=platform" })
  platform?: DestinationNotWorkingEvidencePlatformEnum;

  @Metadata({ data: "json, name=redirectionError" })
  redirectionError?: DestinationNotWorkingEvidenceRedirectionErrorEnum;

  @Metadata({ data: "json, name=urlRejected" })
  urlRejected?: DestinationNotWorkingEvidenceUrlRejectedEnum;
}
