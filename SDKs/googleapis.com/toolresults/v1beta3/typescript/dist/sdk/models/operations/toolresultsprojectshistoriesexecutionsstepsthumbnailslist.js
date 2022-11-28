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
var ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListPathParams = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListPathParams, _super);
    function ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=executionId" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListPathParams.prototype, "executionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=historyId" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListPathParams.prototype, "historyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stepId" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListPathParams.prototype, "stepId", void 0);
    return ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListPathParams;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListPathParams };
var ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListQueryParams = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListQueryParams, _super);
    function ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListQueryParams.prototype, "uploadProtocol", void 0);
    return ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListQueryParams;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListQueryParams };
var ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListSecurity = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListSecurity, _super);
    function ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListSecurity.prototype, "oauth2c", void 0);
    return ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListSecurity;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListSecurity };
var ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListRequest = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListRequest, _super);
    function ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListPathParams)
    ], ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListQueryParams)
    ], ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListSecurity)
    ], ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListRequest.prototype, "security", void 0);
    return ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListRequest;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListRequest };
var ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListResponse = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListResponse, _super);
    function ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListStepThumbnailsResponse)
    ], ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListResponse.prototype, "listStepThumbnailsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListResponse.prototype, "statusCode", void 0);
    return ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListResponse;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsStepsThumbnailsListResponse };
