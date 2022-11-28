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
var VaultMattersSavedQueriesGetPathParams = /** @class */ (function (_super) {
    __extends(VaultMattersSavedQueriesGetPathParams, _super);
    function VaultMattersSavedQueriesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=matterId" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesGetPathParams.prototype, "matterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=savedQueryId" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesGetPathParams.prototype, "savedQueryId", void 0);
    return VaultMattersSavedQueriesGetPathParams;
}(SpeakeasyBase));
export { VaultMattersSavedQueriesGetPathParams };
var VaultMattersSavedQueriesGetQueryParams = /** @class */ (function (_super) {
    __extends(VaultMattersSavedQueriesGetQueryParams, _super);
    function VaultMattersSavedQueriesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VaultMattersSavedQueriesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesGetQueryParams.prototype, "uploadProtocol", void 0);
    return VaultMattersSavedQueriesGetQueryParams;
}(SpeakeasyBase));
export { VaultMattersSavedQueriesGetQueryParams };
var VaultMattersSavedQueriesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(VaultMattersSavedQueriesGetSecurityOption1, _super);
    function VaultMattersSavedQueriesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VaultMattersSavedQueriesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VaultMattersSavedQueriesGetSecurityOption1.prototype, "oauth2c", void 0);
    return VaultMattersSavedQueriesGetSecurityOption1;
}(SpeakeasyBase));
export { VaultMattersSavedQueriesGetSecurityOption1 };
var VaultMattersSavedQueriesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(VaultMattersSavedQueriesGetSecurityOption2, _super);
    function VaultMattersSavedQueriesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VaultMattersSavedQueriesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VaultMattersSavedQueriesGetSecurityOption2.prototype, "oauth2c", void 0);
    return VaultMattersSavedQueriesGetSecurityOption2;
}(SpeakeasyBase));
export { VaultMattersSavedQueriesGetSecurityOption2 };
var VaultMattersSavedQueriesGetSecurity = /** @class */ (function (_super) {
    __extends(VaultMattersSavedQueriesGetSecurity, _super);
    function VaultMattersSavedQueriesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VaultMattersSavedQueriesGetSecurityOption1)
    ], VaultMattersSavedQueriesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VaultMattersSavedQueriesGetSecurityOption2)
    ], VaultMattersSavedQueriesGetSecurity.prototype, "option2", void 0);
    return VaultMattersSavedQueriesGetSecurity;
}(SpeakeasyBase));
export { VaultMattersSavedQueriesGetSecurity };
var VaultMattersSavedQueriesGetRequest = /** @class */ (function (_super) {
    __extends(VaultMattersSavedQueriesGetRequest, _super);
    function VaultMattersSavedQueriesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VaultMattersSavedQueriesGetPathParams)
    ], VaultMattersSavedQueriesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VaultMattersSavedQueriesGetQueryParams)
    ], VaultMattersSavedQueriesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VaultMattersSavedQueriesGetSecurity)
    ], VaultMattersSavedQueriesGetRequest.prototype, "security", void 0);
    return VaultMattersSavedQueriesGetRequest;
}(SpeakeasyBase));
export { VaultMattersSavedQueriesGetRequest };
var VaultMattersSavedQueriesGetResponse = /** @class */ (function (_super) {
    __extends(VaultMattersSavedQueriesGetResponse, _super);
    function VaultMattersSavedQueriesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VaultMattersSavedQueriesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SavedQuery)
    ], VaultMattersSavedQueriesGetResponse.prototype, "savedQuery", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VaultMattersSavedQueriesGetResponse.prototype, "statusCode", void 0);
    return VaultMattersSavedQueriesGetResponse;
}(SpeakeasyBase));
export { VaultMattersSavedQueriesGetResponse };
