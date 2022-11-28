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
var DlpProjectsLocationsDlpJobsListPathParams = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsDlpJobsListPathParams, _super);
    function DlpProjectsLocationsDlpJobsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsDlpJobsListPathParams.prototype, "parent", void 0);
    return DlpProjectsLocationsDlpJobsListPathParams;
}(SpeakeasyBase));
export { DlpProjectsLocationsDlpJobsListPathParams };
export var DlpProjectsLocationsDlpJobsListTypeEnum;
(function (DlpProjectsLocationsDlpJobsListTypeEnum) {
    DlpProjectsLocationsDlpJobsListTypeEnum["DlpJobTypeUnspecified"] = "DLP_JOB_TYPE_UNSPECIFIED";
    DlpProjectsLocationsDlpJobsListTypeEnum["InspectJob"] = "INSPECT_JOB";
    DlpProjectsLocationsDlpJobsListTypeEnum["RiskAnalysisJob"] = "RISK_ANALYSIS_JOB";
})(DlpProjectsLocationsDlpJobsListTypeEnum || (DlpProjectsLocationsDlpJobsListTypeEnum = {}));
var DlpProjectsLocationsDlpJobsListQueryParams = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsDlpJobsListQueryParams, _super);
    function DlpProjectsLocationsDlpJobsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsDlpJobsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsDlpJobsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsDlpJobsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsDlpJobsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsDlpJobsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsDlpJobsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsDlpJobsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationId" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsDlpJobsListQueryParams.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsDlpJobsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsDlpJobsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DlpProjectsLocationsDlpJobsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsDlpJobsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DlpProjectsLocationsDlpJobsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsDlpJobsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsDlpJobsListQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsDlpJobsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DlpProjectsLocationsDlpJobsListQueryParams.prototype, "uploadProtocol", void 0);
    return DlpProjectsLocationsDlpJobsListQueryParams;
}(SpeakeasyBase));
export { DlpProjectsLocationsDlpJobsListQueryParams };
var DlpProjectsLocationsDlpJobsListSecurity = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsDlpJobsListSecurity, _super);
    function DlpProjectsLocationsDlpJobsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DlpProjectsLocationsDlpJobsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DlpProjectsLocationsDlpJobsListSecurity.prototype, "oauth2c", void 0);
    return DlpProjectsLocationsDlpJobsListSecurity;
}(SpeakeasyBase));
export { DlpProjectsLocationsDlpJobsListSecurity };
var DlpProjectsLocationsDlpJobsListRequest = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsDlpJobsListRequest, _super);
    function DlpProjectsLocationsDlpJobsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DlpProjectsLocationsDlpJobsListPathParams)
    ], DlpProjectsLocationsDlpJobsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DlpProjectsLocationsDlpJobsListQueryParams)
    ], DlpProjectsLocationsDlpJobsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DlpProjectsLocationsDlpJobsListSecurity)
    ], DlpProjectsLocationsDlpJobsListRequest.prototype, "security", void 0);
    return DlpProjectsLocationsDlpJobsListRequest;
}(SpeakeasyBase));
export { DlpProjectsLocationsDlpJobsListRequest };
var DlpProjectsLocationsDlpJobsListResponse = /** @class */ (function (_super) {
    __extends(DlpProjectsLocationsDlpJobsListResponse, _super);
    function DlpProjectsLocationsDlpJobsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DlpProjectsLocationsDlpJobsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GooglePrivacyDlpV2ListDlpJobsResponse)
    ], DlpProjectsLocationsDlpJobsListResponse.prototype, "googlePrivacyDlpV2ListDlpJobsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DlpProjectsLocationsDlpJobsListResponse.prototype, "statusCode", void 0);
    return DlpProjectsLocationsDlpJobsListResponse;
}(SpeakeasyBase));
export { DlpProjectsLocationsDlpJobsListResponse };
