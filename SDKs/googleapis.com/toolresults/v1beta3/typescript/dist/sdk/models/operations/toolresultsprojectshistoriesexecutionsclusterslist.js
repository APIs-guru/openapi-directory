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
var ToolresultsProjectsHistoriesExecutionsClustersListPathParams = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsClustersListPathParams, _super);
    function ToolresultsProjectsHistoriesExecutionsClustersListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=executionId" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsClustersListPathParams.prototype, "executionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=historyId" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsClustersListPathParams.prototype, "historyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsClustersListPathParams.prototype, "projectId", void 0);
    return ToolresultsProjectsHistoriesExecutionsClustersListPathParams;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsClustersListPathParams };
var ToolresultsProjectsHistoriesExecutionsClustersListQueryParams = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsClustersListQueryParams, _super);
    function ToolresultsProjectsHistoriesExecutionsClustersListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsClustersListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsClustersListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsClustersListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsClustersListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsClustersListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsClustersListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsClustersListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ToolresultsProjectsHistoriesExecutionsClustersListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsClustersListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsClustersListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsClustersListQueryParams.prototype, "uploadProtocol", void 0);
    return ToolresultsProjectsHistoriesExecutionsClustersListQueryParams;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsClustersListQueryParams };
var ToolresultsProjectsHistoriesExecutionsClustersListSecurity = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsClustersListSecurity, _super);
    function ToolresultsProjectsHistoriesExecutionsClustersListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ToolresultsProjectsHistoriesExecutionsClustersListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ToolresultsProjectsHistoriesExecutionsClustersListSecurity.prototype, "oauth2c", void 0);
    return ToolresultsProjectsHistoriesExecutionsClustersListSecurity;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsClustersListSecurity };
var ToolresultsProjectsHistoriesExecutionsClustersListRequest = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsClustersListRequest, _super);
    function ToolresultsProjectsHistoriesExecutionsClustersListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ToolresultsProjectsHistoriesExecutionsClustersListPathParams)
    ], ToolresultsProjectsHistoriesExecutionsClustersListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ToolresultsProjectsHistoriesExecutionsClustersListQueryParams)
    ], ToolresultsProjectsHistoriesExecutionsClustersListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ToolresultsProjectsHistoriesExecutionsClustersListSecurity)
    ], ToolresultsProjectsHistoriesExecutionsClustersListRequest.prototype, "security", void 0);
    return ToolresultsProjectsHistoriesExecutionsClustersListRequest;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsClustersListRequest };
var ToolresultsProjectsHistoriesExecutionsClustersListResponse = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsClustersListResponse, _super);
    function ToolresultsProjectsHistoriesExecutionsClustersListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsClustersListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListScreenshotClustersResponse)
    ], ToolresultsProjectsHistoriesExecutionsClustersListResponse.prototype, "listScreenshotClustersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ToolresultsProjectsHistoriesExecutionsClustersListResponse.prototype, "statusCode", void 0);
    return ToolresultsProjectsHistoriesExecutionsClustersListResponse;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsClustersListResponse };
