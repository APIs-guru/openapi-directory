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
var IamProjectsServiceAccountsKeysDisablePathParams = /** @class */ (function (_super) {
    __extends(IamProjectsServiceAccountsKeysDisablePathParams, _super);
    function IamProjectsServiceAccountsKeysDisablePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsKeysDisablePathParams.prototype, "name", void 0);
    return IamProjectsServiceAccountsKeysDisablePathParams;
}(SpeakeasyBase));
export { IamProjectsServiceAccountsKeysDisablePathParams };
var IamProjectsServiceAccountsKeysDisableQueryParams = /** @class */ (function (_super) {
    __extends(IamProjectsServiceAccountsKeysDisableQueryParams, _super);
    function IamProjectsServiceAccountsKeysDisableQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsKeysDisableQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsKeysDisableQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsKeysDisableQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsKeysDisableQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsKeysDisableQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsKeysDisableQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsKeysDisableQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IamProjectsServiceAccountsKeysDisableQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsKeysDisableQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsKeysDisableQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsKeysDisableQueryParams.prototype, "uploadProtocol", void 0);
    return IamProjectsServiceAccountsKeysDisableQueryParams;
}(SpeakeasyBase));
export { IamProjectsServiceAccountsKeysDisableQueryParams };
var IamProjectsServiceAccountsKeysDisableSecurity = /** @class */ (function (_super) {
    __extends(IamProjectsServiceAccountsKeysDisableSecurity, _super);
    function IamProjectsServiceAccountsKeysDisableSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IamProjectsServiceAccountsKeysDisableSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IamProjectsServiceAccountsKeysDisableSecurity.prototype, "oauth2c", void 0);
    return IamProjectsServiceAccountsKeysDisableSecurity;
}(SpeakeasyBase));
export { IamProjectsServiceAccountsKeysDisableSecurity };
var IamProjectsServiceAccountsKeysDisableRequest = /** @class */ (function (_super) {
    __extends(IamProjectsServiceAccountsKeysDisableRequest, _super);
    function IamProjectsServiceAccountsKeysDisableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", IamProjectsServiceAccountsKeysDisablePathParams)
    ], IamProjectsServiceAccountsKeysDisableRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IamProjectsServiceAccountsKeysDisableQueryParams)
    ], IamProjectsServiceAccountsKeysDisableRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], IamProjectsServiceAccountsKeysDisableRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IamProjectsServiceAccountsKeysDisableSecurity)
    ], IamProjectsServiceAccountsKeysDisableRequest.prototype, "security", void 0);
    return IamProjectsServiceAccountsKeysDisableRequest;
}(SpeakeasyBase));
export { IamProjectsServiceAccountsKeysDisableRequest };
var IamProjectsServiceAccountsKeysDisableResponse = /** @class */ (function (_super) {
    __extends(IamProjectsServiceAccountsKeysDisableResponse, _super);
    function IamProjectsServiceAccountsKeysDisableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], IamProjectsServiceAccountsKeysDisableResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], IamProjectsServiceAccountsKeysDisableResponse.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], IamProjectsServiceAccountsKeysDisableResponse.prototype, "statusCode", void 0);
    return IamProjectsServiceAccountsKeysDisableResponse;
}(SpeakeasyBase));
export { IamProjectsServiceAccountsKeysDisableResponse };
