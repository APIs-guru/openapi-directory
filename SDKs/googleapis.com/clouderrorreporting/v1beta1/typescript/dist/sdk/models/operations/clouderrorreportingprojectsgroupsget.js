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
import * as shared from "../shared";
var ClouderrorreportingProjectsGroupsGetPathParams = /** @class */ (function (_super) {
    __extends(ClouderrorreportingProjectsGroupsGetPathParams, _super);
    function ClouderrorreportingProjectsGroupsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=groupName" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupsGetPathParams.prototype, "groupName", void 0);
    return ClouderrorreportingProjectsGroupsGetPathParams;
}(SpeakeasyBase));
export { ClouderrorreportingProjectsGroupsGetPathParams };
var ClouderrorreportingProjectsGroupsGetQueryParams = /** @class */ (function (_super) {
    __extends(ClouderrorreportingProjectsGroupsGetQueryParams, _super);
    function ClouderrorreportingProjectsGroupsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClouderrorreportingProjectsGroupsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupsGetQueryParams.prototype, "uploadProtocol", void 0);
    return ClouderrorreportingProjectsGroupsGetQueryParams;
}(SpeakeasyBase));
export { ClouderrorreportingProjectsGroupsGetQueryParams };
var ClouderrorreportingProjectsGroupsGetSecurity = /** @class */ (function (_super) {
    __extends(ClouderrorreportingProjectsGroupsGetSecurity, _super);
    function ClouderrorreportingProjectsGroupsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClouderrorreportingProjectsGroupsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClouderrorreportingProjectsGroupsGetSecurity.prototype, "oauth2c", void 0);
    return ClouderrorreportingProjectsGroupsGetSecurity;
}(SpeakeasyBase));
export { ClouderrorreportingProjectsGroupsGetSecurity };
var ClouderrorreportingProjectsGroupsGetRequest = /** @class */ (function (_super) {
    __extends(ClouderrorreportingProjectsGroupsGetRequest, _super);
    function ClouderrorreportingProjectsGroupsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ClouderrorreportingProjectsGroupsGetPathParams)
    ], ClouderrorreportingProjectsGroupsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClouderrorreportingProjectsGroupsGetQueryParams)
    ], ClouderrorreportingProjectsGroupsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClouderrorreportingProjectsGroupsGetSecurity)
    ], ClouderrorreportingProjectsGroupsGetRequest.prototype, "security", void 0);
    return ClouderrorreportingProjectsGroupsGetRequest;
}(SpeakeasyBase));
export { ClouderrorreportingProjectsGroupsGetRequest };
var ClouderrorreportingProjectsGroupsGetResponse = /** @class */ (function (_super) {
    __extends(ClouderrorreportingProjectsGroupsGetResponse, _super);
    function ClouderrorreportingProjectsGroupsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ErrorGroup)
    ], ClouderrorreportingProjectsGroupsGetResponse.prototype, "errorGroup", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ClouderrorreportingProjectsGroupsGetResponse.prototype, "statusCode", void 0);
    return ClouderrorreportingProjectsGroupsGetResponse;
}(SpeakeasyBase));
export { ClouderrorreportingProjectsGroupsGetResponse };
