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
var IamProjectsServiceAccountsKeysListPathParams = /** @class */ (function (_super) {
    __extends(IamProjectsServiceAccountsKeysListPathParams, _super);
    function IamProjectsServiceAccountsKeysListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsKeysListPathParams.prototype, "name", void 0);
    return IamProjectsServiceAccountsKeysListPathParams;
}(SpeakeasyBase));
export { IamProjectsServiceAccountsKeysListPathParams };
export var IamProjectsServiceAccountsKeysListKeyTypesEnum;
(function (IamProjectsServiceAccountsKeysListKeyTypesEnum) {
    IamProjectsServiceAccountsKeysListKeyTypesEnum["KeyTypeUnspecified"] = "KEY_TYPE_UNSPECIFIED";
    IamProjectsServiceAccountsKeysListKeyTypesEnum["UserManaged"] = "USER_MANAGED";
    IamProjectsServiceAccountsKeysListKeyTypesEnum["SystemManaged"] = "SYSTEM_MANAGED";
})(IamProjectsServiceAccountsKeysListKeyTypesEnum || (IamProjectsServiceAccountsKeysListKeyTypesEnum = {}));
var IamProjectsServiceAccountsKeysListQueryParams = /** @class */ (function (_super) {
    __extends(IamProjectsServiceAccountsKeysListQueryParams, _super);
    function IamProjectsServiceAccountsKeysListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsKeysListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsKeysListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsKeysListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsKeysListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsKeysListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsKeysListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=keyTypes" }),
        __metadata("design:type", Array)
    ], IamProjectsServiceAccountsKeysListQueryParams.prototype, "keyTypes", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsKeysListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IamProjectsServiceAccountsKeysListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsKeysListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsKeysListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsKeysListQueryParams.prototype, "uploadProtocol", void 0);
    return IamProjectsServiceAccountsKeysListQueryParams;
}(SpeakeasyBase));
export { IamProjectsServiceAccountsKeysListQueryParams };
var IamProjectsServiceAccountsKeysListSecurity = /** @class */ (function (_super) {
    __extends(IamProjectsServiceAccountsKeysListSecurity, _super);
    function IamProjectsServiceAccountsKeysListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IamProjectsServiceAccountsKeysListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IamProjectsServiceAccountsKeysListSecurity.prototype, "oauth2c", void 0);
    return IamProjectsServiceAccountsKeysListSecurity;
}(SpeakeasyBase));
export { IamProjectsServiceAccountsKeysListSecurity };
var IamProjectsServiceAccountsKeysListRequest = /** @class */ (function (_super) {
    __extends(IamProjectsServiceAccountsKeysListRequest, _super);
    function IamProjectsServiceAccountsKeysListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", IamProjectsServiceAccountsKeysListPathParams)
    ], IamProjectsServiceAccountsKeysListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IamProjectsServiceAccountsKeysListQueryParams)
    ], IamProjectsServiceAccountsKeysListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IamProjectsServiceAccountsKeysListSecurity)
    ], IamProjectsServiceAccountsKeysListRequest.prototype, "security", void 0);
    return IamProjectsServiceAccountsKeysListRequest;
}(SpeakeasyBase));
export { IamProjectsServiceAccountsKeysListRequest };
var IamProjectsServiceAccountsKeysListResponse = /** @class */ (function (_super) {
    __extends(IamProjectsServiceAccountsKeysListResponse, _super);
    function IamProjectsServiceAccountsKeysListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsKeysListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListServiceAccountKeysResponse)
    ], IamProjectsServiceAccountsKeysListResponse.prototype, "listServiceAccountKeysResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], IamProjectsServiceAccountsKeysListResponse.prototype, "statusCode", void 0);
    return IamProjectsServiceAccountsKeysListResponse;
}(SpeakeasyBase));
export { IamProjectsServiceAccountsKeysListResponse };
