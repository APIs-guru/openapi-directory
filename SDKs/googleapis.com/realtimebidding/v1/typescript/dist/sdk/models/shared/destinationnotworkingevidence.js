var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
export var DestinationNotWorkingEvidenceDnsErrorEnum;
(function (DestinationNotWorkingEvidenceDnsErrorEnum) {
    DestinationNotWorkingEvidenceDnsErrorEnum["DnsErrorUnspecified"] = "DNS_ERROR_UNSPECIFIED";
    DestinationNotWorkingEvidenceDnsErrorEnum["ErrorDns"] = "ERROR_DNS";
    DestinationNotWorkingEvidenceDnsErrorEnum["GoogleCrawlerDnsIssue"] = "GOOGLE_CRAWLER_DNS_ISSUE";
})(DestinationNotWorkingEvidenceDnsErrorEnum || (DestinationNotWorkingEvidenceDnsErrorEnum = {}));
export var DestinationNotWorkingEvidenceInvalidPageEnum;
(function (DestinationNotWorkingEvidenceInvalidPageEnum) {
    DestinationNotWorkingEvidenceInvalidPageEnum["InvalidPageUnspecified"] = "INVALID_PAGE_UNSPECIFIED";
    DestinationNotWorkingEvidenceInvalidPageEnum["EmptyOrErrorPage"] = "EMPTY_OR_ERROR_PAGE";
})(DestinationNotWorkingEvidenceInvalidPageEnum || (DestinationNotWorkingEvidenceInvalidPageEnum = {}));
export var DestinationNotWorkingEvidencePlatformEnum;
(function (DestinationNotWorkingEvidencePlatformEnum) {
    DestinationNotWorkingEvidencePlatformEnum["PlatformUnspecified"] = "PLATFORM_UNSPECIFIED";
    DestinationNotWorkingEvidencePlatformEnum["PersonalComputer"] = "PERSONAL_COMPUTER";
    DestinationNotWorkingEvidencePlatformEnum["Android"] = "ANDROID";
    DestinationNotWorkingEvidencePlatformEnum["Ios"] = "IOS";
})(DestinationNotWorkingEvidencePlatformEnum || (DestinationNotWorkingEvidencePlatformEnum = {}));
export var DestinationNotWorkingEvidenceRedirectionErrorEnum;
(function (DestinationNotWorkingEvidenceRedirectionErrorEnum) {
    DestinationNotWorkingEvidenceRedirectionErrorEnum["RedirectionErrorUnspecified"] = "REDIRECTION_ERROR_UNSPECIFIED";
    DestinationNotWorkingEvidenceRedirectionErrorEnum["TooManyRedirects"] = "TOO_MANY_REDIRECTS";
    DestinationNotWorkingEvidenceRedirectionErrorEnum["InvalidRedirect"] = "INVALID_REDIRECT";
    DestinationNotWorkingEvidenceRedirectionErrorEnum["EmptyRedirect"] = "EMPTY_REDIRECT";
    DestinationNotWorkingEvidenceRedirectionErrorEnum["RedirectErrorUnknown"] = "REDIRECT_ERROR_UNKNOWN";
})(DestinationNotWorkingEvidenceRedirectionErrorEnum || (DestinationNotWorkingEvidenceRedirectionErrorEnum = {}));
export var DestinationNotWorkingEvidenceUrlRejectedEnum;
(function (DestinationNotWorkingEvidenceUrlRejectedEnum) {
    DestinationNotWorkingEvidenceUrlRejectedEnum["UrlRejectedUnspecified"] = "URL_REJECTED_UNSPECIFIED";
    DestinationNotWorkingEvidenceUrlRejectedEnum["BadRequest"] = "BAD_REQUEST";
    DestinationNotWorkingEvidenceUrlRejectedEnum["MalformedUrl"] = "MALFORMED_URL";
    DestinationNotWorkingEvidenceUrlRejectedEnum["UrlRejectedUnknown"] = "URL_REJECTED_UNKNOWN";
})(DestinationNotWorkingEvidenceUrlRejectedEnum || (DestinationNotWorkingEvidenceUrlRejectedEnum = {}));
// DestinationNotWorkingEvidence
/**
 * Evidence of the creative's destination URL not functioning properly or having been incorrectly set up.
**/
var DestinationNotWorkingEvidence = /** @class */ (function (_super) {
    __extends(DestinationNotWorkingEvidence, _super);
    function DestinationNotWorkingEvidence() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dnsError" }),
        __metadata("design:type", String)
    ], DestinationNotWorkingEvidence.prototype, "dnsError", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expandedUrl" }),
        __metadata("design:type", String)
    ], DestinationNotWorkingEvidence.prototype, "expandedUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=httpError" }),
        __metadata("design:type", Number)
    ], DestinationNotWorkingEvidence.prototype, "httpError", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invalidPage" }),
        __metadata("design:type", String)
    ], DestinationNotWorkingEvidence.prototype, "invalidPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastCheckTime" }),
        __metadata("design:type", String)
    ], DestinationNotWorkingEvidence.prototype, "lastCheckTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platform" }),
        __metadata("design:type", String)
    ], DestinationNotWorkingEvidence.prototype, "platform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirectionError" }),
        __metadata("design:type", String)
    ], DestinationNotWorkingEvidence.prototype, "redirectionError", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlRejected" }),
        __metadata("design:type", String)
    ], DestinationNotWorkingEvidence.prototype, "urlRejected", void 0);
    return DestinationNotWorkingEvidence;
}(SpeakeasyBase));
export { DestinationNotWorkingEvidence };
