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
import * as shared from "../shared";
export var WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnum;
(function (WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnum) {
    WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnum["CompressionTypeUnspecified"] = "COMPRESSION_TYPE_UNSPECIFIED";
    WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnum["Raw"] = "RAW";
    WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnum["Rice"] = "RICE";
})(WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnum || (WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnum = {}));
export var WebriskThreatListsComputeDiffThreatTypeEnum;
(function (WebriskThreatListsComputeDiffThreatTypeEnum) {
    WebriskThreatListsComputeDiffThreatTypeEnum["ThreatTypeUnspecified"] = "THREAT_TYPE_UNSPECIFIED";
    WebriskThreatListsComputeDiffThreatTypeEnum["Malware"] = "MALWARE";
    WebriskThreatListsComputeDiffThreatTypeEnum["SocialEngineering"] = "SOCIAL_ENGINEERING";
    WebriskThreatListsComputeDiffThreatTypeEnum["UnwantedSoftware"] = "UNWANTED_SOFTWARE";
    WebriskThreatListsComputeDiffThreatTypeEnum["SocialEngineeringExtendedCoverage"] = "SOCIAL_ENGINEERING_EXTENDED_COVERAGE";
})(WebriskThreatListsComputeDiffThreatTypeEnum || (WebriskThreatListsComputeDiffThreatTypeEnum = {}));
var WebriskThreatListsComputeDiffQueryParams = /** @class */ (function (_super) {
    __extends(WebriskThreatListsComputeDiffQueryParams, _super);
    function WebriskThreatListsComputeDiffQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], WebriskThreatListsComputeDiffQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], WebriskThreatListsComputeDiffQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], WebriskThreatListsComputeDiffQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], WebriskThreatListsComputeDiffQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=constraints.maxDatabaseEntries" }),
        __metadata("design:type", Number)
    ], WebriskThreatListsComputeDiffQueryParams.prototype, "constraintsMaxDatabaseEntries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=constraints.maxDiffEntries" }),
        __metadata("design:type", Number)
    ], WebriskThreatListsComputeDiffQueryParams.prototype, "constraintsMaxDiffEntries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=constraints.supportedCompressions" }),
        __metadata("design:type", Array)
    ], WebriskThreatListsComputeDiffQueryParams.prototype, "constraintsSupportedCompressions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], WebriskThreatListsComputeDiffQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], WebriskThreatListsComputeDiffQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], WebriskThreatListsComputeDiffQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], WebriskThreatListsComputeDiffQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], WebriskThreatListsComputeDiffQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=threatType" }),
        __metadata("design:type", String)
    ], WebriskThreatListsComputeDiffQueryParams.prototype, "threatType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], WebriskThreatListsComputeDiffQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], WebriskThreatListsComputeDiffQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=versionToken" }),
        __metadata("design:type", String)
    ], WebriskThreatListsComputeDiffQueryParams.prototype, "versionToken", void 0);
    return WebriskThreatListsComputeDiffQueryParams;
}(SpeakeasyBase));
export { WebriskThreatListsComputeDiffQueryParams };
var WebriskThreatListsComputeDiffSecurity = /** @class */ (function (_super) {
    __extends(WebriskThreatListsComputeDiffSecurity, _super);
    function WebriskThreatListsComputeDiffSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], WebriskThreatListsComputeDiffSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], WebriskThreatListsComputeDiffSecurity.prototype, "oauth2c", void 0);
    return WebriskThreatListsComputeDiffSecurity;
}(SpeakeasyBase));
export { WebriskThreatListsComputeDiffSecurity };
var WebriskThreatListsComputeDiffRequest = /** @class */ (function (_super) {
    __extends(WebriskThreatListsComputeDiffRequest, _super);
    function WebriskThreatListsComputeDiffRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebriskThreatListsComputeDiffQueryParams)
    ], WebriskThreatListsComputeDiffRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebriskThreatListsComputeDiffSecurity)
    ], WebriskThreatListsComputeDiffRequest.prototype, "security", void 0);
    return WebriskThreatListsComputeDiffRequest;
}(SpeakeasyBase));
export { WebriskThreatListsComputeDiffRequest };
var WebriskThreatListsComputeDiffResponse = /** @class */ (function (_super) {
    __extends(WebriskThreatListsComputeDiffResponse, _super);
    function WebriskThreatListsComputeDiffResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], WebriskThreatListsComputeDiffResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudWebriskV1ComputeThreatListDiffResponse)
    ], WebriskThreatListsComputeDiffResponse.prototype, "googleCloudWebriskV1ComputeThreatListDiffResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], WebriskThreatListsComputeDiffResponse.prototype, "statusCode", void 0);
    return WebriskThreatListsComputeDiffResponse;
}(SpeakeasyBase));
export { WebriskThreatListsComputeDiffResponse };
