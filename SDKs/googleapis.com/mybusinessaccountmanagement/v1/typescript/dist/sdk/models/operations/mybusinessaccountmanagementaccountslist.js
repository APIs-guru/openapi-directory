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
var MybusinessaccountmanagementAccountsListQueryParams = /** @class */ (function (_super) {
    __extends(MybusinessaccountmanagementAccountsListQueryParams, _super);
    function MybusinessaccountmanagementAccountsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementAccountsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementAccountsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementAccountsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementAccountsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementAccountsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementAccountsListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementAccountsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementAccountsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], MybusinessaccountmanagementAccountsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementAccountsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=parentAccount" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementAccountsListQueryParams.prototype, "parentAccount", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MybusinessaccountmanagementAccountsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementAccountsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementAccountsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementAccountsListQueryParams.prototype, "uploadProtocol", void 0);
    return MybusinessaccountmanagementAccountsListQueryParams;
}(SpeakeasyBase));
export { MybusinessaccountmanagementAccountsListQueryParams };
var MybusinessaccountmanagementAccountsListRequest = /** @class */ (function (_super) {
    __extends(MybusinessaccountmanagementAccountsListRequest, _super);
    function MybusinessaccountmanagementAccountsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", MybusinessaccountmanagementAccountsListQueryParams)
    ], MybusinessaccountmanagementAccountsListRequest.prototype, "queryParams", void 0);
    return MybusinessaccountmanagementAccountsListRequest;
}(SpeakeasyBase));
export { MybusinessaccountmanagementAccountsListRequest };
var MybusinessaccountmanagementAccountsListResponse = /** @class */ (function (_super) {
    __extends(MybusinessaccountmanagementAccountsListResponse, _super);
    function MybusinessaccountmanagementAccountsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementAccountsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListAccountsResponse)
    ], MybusinessaccountmanagementAccountsListResponse.prototype, "listAccountsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], MybusinessaccountmanagementAccountsListResponse.prototype, "statusCode", void 0);
    return MybusinessaccountmanagementAccountsListResponse;
}(SpeakeasyBase));
export { MybusinessaccountmanagementAccountsListResponse };
