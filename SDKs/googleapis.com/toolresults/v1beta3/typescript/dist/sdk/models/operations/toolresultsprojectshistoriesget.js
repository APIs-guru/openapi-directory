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
var ToolresultsProjectsHistoriesGetPathParams = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesGetPathParams, _super);
    function ToolresultsProjectsHistoriesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=historyId" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesGetPathParams.prototype, "historyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesGetPathParams.prototype, "projectId", void 0);
    return ToolresultsProjectsHistoriesGetPathParams;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesGetPathParams };
var ToolresultsProjectsHistoriesGetQueryParams = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesGetQueryParams, _super);
    function ToolresultsProjectsHistoriesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ToolresultsProjectsHistoriesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesGetQueryParams.prototype, "uploadProtocol", void 0);
    return ToolresultsProjectsHistoriesGetQueryParams;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesGetQueryParams };
var ToolresultsProjectsHistoriesGetSecurity = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesGetSecurity, _super);
    function ToolresultsProjectsHistoriesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ToolresultsProjectsHistoriesGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ToolresultsProjectsHistoriesGetSecurity.prototype, "oauth2c", void 0);
    return ToolresultsProjectsHistoriesGetSecurity;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesGetSecurity };
var ToolresultsProjectsHistoriesGetRequest = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesGetRequest, _super);
    function ToolresultsProjectsHistoriesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ToolresultsProjectsHistoriesGetPathParams)
    ], ToolresultsProjectsHistoriesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ToolresultsProjectsHistoriesGetQueryParams)
    ], ToolresultsProjectsHistoriesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ToolresultsProjectsHistoriesGetSecurity)
    ], ToolresultsProjectsHistoriesGetRequest.prototype, "security", void 0);
    return ToolresultsProjectsHistoriesGetRequest;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesGetRequest };
var ToolresultsProjectsHistoriesGetResponse = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesGetResponse, _super);
    function ToolresultsProjectsHistoriesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.History)
    ], ToolresultsProjectsHistoriesGetResponse.prototype, "history", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ToolresultsProjectsHistoriesGetResponse.prototype, "statusCode", void 0);
    return ToolresultsProjectsHistoriesGetResponse;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesGetResponse };
