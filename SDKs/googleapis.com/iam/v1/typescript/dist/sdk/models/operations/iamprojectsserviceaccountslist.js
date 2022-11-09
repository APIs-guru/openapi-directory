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
var IamProjectsServiceAccountsListPathParams = /** @class */ (function (_super) {
    __extends(IamProjectsServiceAccountsListPathParams, _super);
    function IamProjectsServiceAccountsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsListPathParams.prototype, "name", void 0);
    return IamProjectsServiceAccountsListPathParams;
}(SpeakeasyBase));
export { IamProjectsServiceAccountsListPathParams };
var IamProjectsServiceAccountsListQueryParams = /** @class */ (function (_super) {
    __extends(IamProjectsServiceAccountsListQueryParams, _super);
    function IamProjectsServiceAccountsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], IamProjectsServiceAccountsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IamProjectsServiceAccountsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsListQueryParams.prototype, "uploadProtocol", void 0);
    return IamProjectsServiceAccountsListQueryParams;
}(SpeakeasyBase));
export { IamProjectsServiceAccountsListQueryParams };
var IamProjectsServiceAccountsListSecurity = /** @class */ (function (_super) {
    __extends(IamProjectsServiceAccountsListSecurity, _super);
    function IamProjectsServiceAccountsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IamProjectsServiceAccountsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IamProjectsServiceAccountsListSecurity.prototype, "oauth2c", void 0);
    return IamProjectsServiceAccountsListSecurity;
}(SpeakeasyBase));
export { IamProjectsServiceAccountsListSecurity };
var IamProjectsServiceAccountsListRequest = /** @class */ (function (_super) {
    __extends(IamProjectsServiceAccountsListRequest, _super);
    function IamProjectsServiceAccountsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", IamProjectsServiceAccountsListPathParams)
    ], IamProjectsServiceAccountsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IamProjectsServiceAccountsListQueryParams)
    ], IamProjectsServiceAccountsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IamProjectsServiceAccountsListSecurity)
    ], IamProjectsServiceAccountsListRequest.prototype, "security", void 0);
    return IamProjectsServiceAccountsListRequest;
}(SpeakeasyBase));
export { IamProjectsServiceAccountsListRequest };
var IamProjectsServiceAccountsListResponse = /** @class */ (function (_super) {
    __extends(IamProjectsServiceAccountsListResponse, _super);
    function IamProjectsServiceAccountsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListServiceAccountsResponse)
    ], IamProjectsServiceAccountsListResponse.prototype, "listServiceAccountsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], IamProjectsServiceAccountsListResponse.prototype, "statusCode", void 0);
    return IamProjectsServiceAccountsListResponse;
}(SpeakeasyBase));
export { IamProjectsServiceAccountsListResponse };
