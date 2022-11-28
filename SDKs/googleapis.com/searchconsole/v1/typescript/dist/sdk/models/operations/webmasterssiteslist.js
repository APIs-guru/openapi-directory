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
var WebmastersSitesListQueryParams = /** @class */ (function (_super) {
    __extends(WebmastersSitesListQueryParams, _super);
    function WebmastersSitesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], WebmastersSitesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], WebmastersSitesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], WebmastersSitesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], WebmastersSitesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], WebmastersSitesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], WebmastersSitesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], WebmastersSitesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], WebmastersSitesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], WebmastersSitesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], WebmastersSitesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], WebmastersSitesListQueryParams.prototype, "uploadProtocol", void 0);
    return WebmastersSitesListQueryParams;
}(SpeakeasyBase));
export { WebmastersSitesListQueryParams };
var WebmastersSitesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(WebmastersSitesListSecurityOption1, _super);
    function WebmastersSitesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], WebmastersSitesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], WebmastersSitesListSecurityOption1.prototype, "oauth2c", void 0);
    return WebmastersSitesListSecurityOption1;
}(SpeakeasyBase));
export { WebmastersSitesListSecurityOption1 };
var WebmastersSitesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(WebmastersSitesListSecurityOption2, _super);
    function WebmastersSitesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], WebmastersSitesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], WebmastersSitesListSecurityOption2.prototype, "oauth2c", void 0);
    return WebmastersSitesListSecurityOption2;
}(SpeakeasyBase));
export { WebmastersSitesListSecurityOption2 };
var WebmastersSitesListSecurity = /** @class */ (function (_super) {
    __extends(WebmastersSitesListSecurity, _super);
    function WebmastersSitesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", WebmastersSitesListSecurityOption1)
    ], WebmastersSitesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", WebmastersSitesListSecurityOption2)
    ], WebmastersSitesListSecurity.prototype, "option2", void 0);
    return WebmastersSitesListSecurity;
}(SpeakeasyBase));
export { WebmastersSitesListSecurity };
var WebmastersSitesListRequest = /** @class */ (function (_super) {
    __extends(WebmastersSitesListRequest, _super);
    function WebmastersSitesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebmastersSitesListQueryParams)
    ], WebmastersSitesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebmastersSitesListSecurity)
    ], WebmastersSitesListRequest.prototype, "security", void 0);
    return WebmastersSitesListRequest;
}(SpeakeasyBase));
export { WebmastersSitesListRequest };
var WebmastersSitesListResponse = /** @class */ (function (_super) {
    __extends(WebmastersSitesListResponse, _super);
    function WebmastersSitesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], WebmastersSitesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SitesListResponse)
    ], WebmastersSitesListResponse.prototype, "sitesListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], WebmastersSitesListResponse.prototype, "statusCode", void 0);
    return WebmastersSitesListResponse;
}(SpeakeasyBase));
export { WebmastersSitesListResponse };
