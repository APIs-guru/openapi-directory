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
var CloudshellUsersEnvironmentsGetPathParams = /** @class */ (function (_super) {
    __extends(CloudshellUsersEnvironmentsGetPathParams, _super);
    function CloudshellUsersEnvironmentsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsGetPathParams.prototype, "name", void 0);
    return CloudshellUsersEnvironmentsGetPathParams;
}(SpeakeasyBase));
export { CloudshellUsersEnvironmentsGetPathParams };
var CloudshellUsersEnvironmentsGetQueryParams = /** @class */ (function (_super) {
    __extends(CloudshellUsersEnvironmentsGetQueryParams, _super);
    function CloudshellUsersEnvironmentsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsGetQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudshellUsersEnvironmentsGetQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsGetQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudshellUsersEnvironmentsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsGetQueryParams.prototype, "uploadProtocol", void 0);
    return CloudshellUsersEnvironmentsGetQueryParams;
}(SpeakeasyBase));
export { CloudshellUsersEnvironmentsGetQueryParams };
var CloudshellUsersEnvironmentsGetSecurity = /** @class */ (function (_super) {
    __extends(CloudshellUsersEnvironmentsGetSecurity, _super);
    function CloudshellUsersEnvironmentsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudshellUsersEnvironmentsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudshellUsersEnvironmentsGetSecurity.prototype, "oauth2c", void 0);
    return CloudshellUsersEnvironmentsGetSecurity;
}(SpeakeasyBase));
export { CloudshellUsersEnvironmentsGetSecurity };
var CloudshellUsersEnvironmentsGetRequest = /** @class */ (function (_super) {
    __extends(CloudshellUsersEnvironmentsGetRequest, _super);
    function CloudshellUsersEnvironmentsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudshellUsersEnvironmentsGetPathParams)
    ], CloudshellUsersEnvironmentsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudshellUsersEnvironmentsGetQueryParams)
    ], CloudshellUsersEnvironmentsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudshellUsersEnvironmentsGetSecurity)
    ], CloudshellUsersEnvironmentsGetRequest.prototype, "security", void 0);
    return CloudshellUsersEnvironmentsGetRequest;
}(SpeakeasyBase));
export { CloudshellUsersEnvironmentsGetRequest };
var CloudshellUsersEnvironmentsGetResponse = /** @class */ (function (_super) {
    __extends(CloudshellUsersEnvironmentsGetResponse, _super);
    function CloudshellUsersEnvironmentsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudshellUsersEnvironmentsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Environment)
    ], CloudshellUsersEnvironmentsGetResponse.prototype, "environment", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudshellUsersEnvironmentsGetResponse.prototype, "statusCode", void 0);
    return CloudshellUsersEnvironmentsGetResponse;
}(SpeakeasyBase));
export { CloudshellUsersEnvironmentsGetResponse };
