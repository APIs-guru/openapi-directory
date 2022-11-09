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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var GoogleCloudWebriskV1SubmissionThreatTypesEnum;
(function (GoogleCloudWebriskV1SubmissionThreatTypesEnum) {
    GoogleCloudWebriskV1SubmissionThreatTypesEnum["ThreatTypeUnspecified"] = "THREAT_TYPE_UNSPECIFIED";
    GoogleCloudWebriskV1SubmissionThreatTypesEnum["Malware"] = "MALWARE";
    GoogleCloudWebriskV1SubmissionThreatTypesEnum["SocialEngineering"] = "SOCIAL_ENGINEERING";
    GoogleCloudWebriskV1SubmissionThreatTypesEnum["UnwantedSoftware"] = "UNWANTED_SOFTWARE";
    GoogleCloudWebriskV1SubmissionThreatTypesEnum["SocialEngineeringExtendedCoverage"] = "SOCIAL_ENGINEERING_EXTENDED_COVERAGE";
})(GoogleCloudWebriskV1SubmissionThreatTypesEnum || (GoogleCloudWebriskV1SubmissionThreatTypesEnum = {}));
// GoogleCloudWebriskV1Submission
/**
 * Wraps a URI that might be displaying malicious content.
**/
var GoogleCloudWebriskV1Submission = /** @class */ (function (_super) {
    __extends(GoogleCloudWebriskV1Submission, _super);
    function GoogleCloudWebriskV1Submission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=threatTypes" }),
        __metadata("design:type", Array)
    ], GoogleCloudWebriskV1Submission.prototype, "threatTypes", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GoogleCloudWebriskV1Submission.prototype, "uri", void 0);
    return GoogleCloudWebriskV1Submission;
}(SpeakeasyBase));
export { GoogleCloudWebriskV1Submission };
