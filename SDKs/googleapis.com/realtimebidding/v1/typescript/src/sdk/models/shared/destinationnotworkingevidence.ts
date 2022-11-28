import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DestinationNotWorkingEvidenceDnsErrorEnum {
    DnsErrorUnspecified = "DNS_ERROR_UNSPECIFIED",
    ErrorDns = "ERROR_DNS",
    GoogleCrawlerDnsIssue = "GOOGLE_CRAWLER_DNS_ISSUE"
}

export enum DestinationNotWorkingEvidenceInvalidPageEnum {
    InvalidPageUnspecified = "INVALID_PAGE_UNSPECIFIED",
    EmptyOrErrorPage = "EMPTY_OR_ERROR_PAGE"
}

export enum DestinationNotWorkingEvidencePlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED",
    PersonalComputer = "PERSONAL_COMPUTER",
    Android = "ANDROID",
    Ios = "IOS"
}

export enum DestinationNotWorkingEvidenceRedirectionErrorEnum {
    RedirectionErrorUnspecified = "REDIRECTION_ERROR_UNSPECIFIED",
    TooManyRedirects = "TOO_MANY_REDIRECTS",
    InvalidRedirect = "INVALID_REDIRECT",
    EmptyRedirect = "EMPTY_REDIRECT",
    RedirectErrorUnknown = "REDIRECT_ERROR_UNKNOWN"
}

export enum DestinationNotWorkingEvidenceUrlRejectedEnum {
    UrlRejectedUnspecified = "URL_REJECTED_UNSPECIFIED",
    BadRequest = "BAD_REQUEST",
    MalformedUrl = "MALFORMED_URL",
    UrlRejectedUnknown = "URL_REJECTED_UNKNOWN"
}


// DestinationNotWorkingEvidence
/** 
 * Evidence of the creative's destination URL not functioning properly or having been incorrectly set up.
**/
export class DestinationNotWorkingEvidence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dnsError" })
  dnsError?: DestinationNotWorkingEvidenceDnsErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=expandedUrl" })
  expandedUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=httpError" })
  httpError?: number;

  @SpeakeasyMetadata({ data: "json, name=invalidPage" })
  invalidPage?: DestinationNotWorkingEvidenceInvalidPageEnum;

  @SpeakeasyMetadata({ data: "json, name=lastCheckTime" })
  lastCheckTime?: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: DestinationNotWorkingEvidencePlatformEnum;

  @SpeakeasyMetadata({ data: "json, name=redirectionError" })
  redirectionError?: DestinationNotWorkingEvidenceRedirectionErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=urlRejected" })
  urlRejected?: DestinationNotWorkingEvidenceUrlRejectedEnum;
}
