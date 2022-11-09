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
var MybusinessaccountmanagementAccountsGetPathParams = /** @class */ (function (_super) {
    __extends(MybusinessaccountmanagementAccountsGetPathParams, _super);
    function MybusinessaccountmanagementAccountsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementAccountsGetPathParams.prototype, "name", void 0);
    return MybusinessaccountmanagementAccountsGetPathParams;
}(SpeakeasyBase));
export { MybusinessaccountmanagementAccountsGetPathParams };
var MybusinessaccountmanagementAccountsGetQueryParams = /** @class */ (function (_super) {
    __extends(MybusinessaccountmanagementAccountsGetQueryParams, _super);
    function MybusinessaccountmanagementAccountsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementAccountsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementAccountsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementAccountsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementAccountsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementAccountsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementAccountsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementAccountsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MybusinessaccountmanagementAccountsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementAccountsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementAccountsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementAccountsGetQueryParams.prototype, "uploadProtocol", void 0);
    return MybusinessaccountmanagementAccountsGetQueryParams;
}(SpeakeasyBase));
export { MybusinessaccountmanagementAccountsGetQueryParams };
var MybusinessaccountmanagementAccountsGetRequest = /** @class */ (function (_super) {
    __extends(MybusinessaccountmanagementAccountsGetRequest, _super);
    function MybusinessaccountmanagementAccountsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", MybusinessaccountmanagementAccountsGetPathParams)
    ], MybusinessaccountmanagementAccountsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", MybusinessaccountmanagementAccountsGetQueryParams)
    ], MybusinessaccountmanagementAccountsGetRequest.prototype, "queryParams", void 0);
    return MybusinessaccountmanagementAccountsGetRequest;
}(SpeakeasyBase));
export { MybusinessaccountmanagementAccountsGetRequest };
var MybusinessaccountmanagementAccountsGetResponse = /** @class */ (function (_super) {
    __extends(MybusinessaccountmanagementAccountsGetResponse, _super);
    function MybusinessaccountmanagementAccountsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Account)
    ], MybusinessaccountmanagementAccountsGetResponse.prototype, "account", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementAccountsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], MybusinessaccountmanagementAccountsGetResponse.prototype, "statusCode", void 0);
    return MybusinessaccountmanagementAccountsGetResponse;
}(SpeakeasyBase));
export { MybusinessaccountmanagementAccountsGetResponse };
