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
var ToolresultsProjectsHistoriesExecutionsEnvironmentsGetPathParams = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsEnvironmentsGetPathParams, _super);
    function ToolresultsProjectsHistoriesExecutionsEnvironmentsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentId" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsEnvironmentsGetPathParams.prototype, "environmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=executionId" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsEnvironmentsGetPathParams.prototype, "executionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=historyId" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsEnvironmentsGetPathParams.prototype, "historyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsEnvironmentsGetPathParams.prototype, "projectId", void 0);
    return ToolresultsProjectsHistoriesExecutionsEnvironmentsGetPathParams;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsEnvironmentsGetPathParams };
var ToolresultsProjectsHistoriesExecutionsEnvironmentsGetQueryParams = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsEnvironmentsGetQueryParams, _super);
    function ToolresultsProjectsHistoriesExecutionsEnvironmentsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsEnvironmentsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsEnvironmentsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsEnvironmentsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsEnvironmentsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsEnvironmentsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsEnvironmentsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsEnvironmentsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ToolresultsProjectsHistoriesExecutionsEnvironmentsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsEnvironmentsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsEnvironmentsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsEnvironmentsGetQueryParams.prototype, "uploadProtocol", void 0);
    return ToolresultsProjectsHistoriesExecutionsEnvironmentsGetQueryParams;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsEnvironmentsGetQueryParams };
var ToolresultsProjectsHistoriesExecutionsEnvironmentsGetSecurity = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsEnvironmentsGetSecurity, _super);
    function ToolresultsProjectsHistoriesExecutionsEnvironmentsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ToolresultsProjectsHistoriesExecutionsEnvironmentsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ToolresultsProjectsHistoriesExecutionsEnvironmentsGetSecurity.prototype, "oauth2c", void 0);
    return ToolresultsProjectsHistoriesExecutionsEnvironmentsGetSecurity;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsEnvironmentsGetSecurity };
var ToolresultsProjectsHistoriesExecutionsEnvironmentsGetRequest = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsEnvironmentsGetRequest, _super);
    function ToolresultsProjectsHistoriesExecutionsEnvironmentsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ToolresultsProjectsHistoriesExecutionsEnvironmentsGetPathParams)
    ], ToolresultsProjectsHistoriesExecutionsEnvironmentsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ToolresultsProjectsHistoriesExecutionsEnvironmentsGetQueryParams)
    ], ToolresultsProjectsHistoriesExecutionsEnvironmentsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ToolresultsProjectsHistoriesExecutionsEnvironmentsGetSecurity)
    ], ToolresultsProjectsHistoriesExecutionsEnvironmentsGetRequest.prototype, "security", void 0);
    return ToolresultsProjectsHistoriesExecutionsEnvironmentsGetRequest;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsEnvironmentsGetRequest };
var ToolresultsProjectsHistoriesExecutionsEnvironmentsGetResponse = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsEnvironmentsGetResponse, _super);
    function ToolresultsProjectsHistoriesExecutionsEnvironmentsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsEnvironmentsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Environment)
    ], ToolresultsProjectsHistoriesExecutionsEnvironmentsGetResponse.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ToolresultsProjectsHistoriesExecutionsEnvironmentsGetResponse.prototype, "statusCode", void 0);
    return ToolresultsProjectsHistoriesExecutionsEnvironmentsGetResponse;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsEnvironmentsGetResponse };
