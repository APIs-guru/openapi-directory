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
var ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListPathParams = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListPathParams, _super);
    function ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=executionId" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListPathParams.prototype, "executionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=historyId" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListPathParams.prototype, "historyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sampleSeriesId" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListPathParams.prototype, "sampleSeriesId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stepId" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListPathParams.prototype, "stepId", void 0);
    return ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListPathParams;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListPathParams };
var ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListQueryParams = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListQueryParams, _super);
    function ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListQueryParams.prototype, "uploadProtocol", void 0);
    return ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListQueryParams;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListQueryParams };
var ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListSecurity = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListSecurity, _super);
    function ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListSecurity.prototype, "oauth2c", void 0);
    return ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListSecurity;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListSecurity };
var ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListRequest = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListRequest, _super);
    function ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListPathParams)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListQueryParams)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListSecurity)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListRequest.prototype, "security", void 0);
    return ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListRequest;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListRequest };
var ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListResponse = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListResponse, _super);
    function ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListPerfSamplesResponse)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListResponse.prototype, "listPerfSamplesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListResponse.prototype, "statusCode", void 0);
    return ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListResponse;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListResponse };
