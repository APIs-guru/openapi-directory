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
var VaultMattersExportsGetPathParams = /** @class */ (function (_super) {
    __extends(VaultMattersExportsGetPathParams, _super);
    function VaultMattersExportsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=exportId" }),
        __metadata("design:type", String)
    ], VaultMattersExportsGetPathParams.prototype, "exportId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=matterId" }),
        __metadata("design:type", String)
    ], VaultMattersExportsGetPathParams.prototype, "matterId", void 0);
    return VaultMattersExportsGetPathParams;
}(SpeakeasyBase));
export { VaultMattersExportsGetPathParams };
var VaultMattersExportsGetQueryParams = /** @class */ (function (_super) {
    __extends(VaultMattersExportsGetQueryParams, _super);
    function VaultMattersExportsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VaultMattersExportsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VaultMattersExportsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VaultMattersExportsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VaultMattersExportsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VaultMattersExportsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VaultMattersExportsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VaultMattersExportsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VaultMattersExportsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VaultMattersExportsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VaultMattersExportsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VaultMattersExportsGetQueryParams.prototype, "uploadProtocol", void 0);
    return VaultMattersExportsGetQueryParams;
}(SpeakeasyBase));
export { VaultMattersExportsGetQueryParams };
var VaultMattersExportsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(VaultMattersExportsGetSecurityOption1, _super);
    function VaultMattersExportsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VaultMattersExportsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VaultMattersExportsGetSecurityOption1.prototype, "oauth2c", void 0);
    return VaultMattersExportsGetSecurityOption1;
}(SpeakeasyBase));
export { VaultMattersExportsGetSecurityOption1 };
var VaultMattersExportsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(VaultMattersExportsGetSecurityOption2, _super);
    function VaultMattersExportsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VaultMattersExportsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VaultMattersExportsGetSecurityOption2.prototype, "oauth2c", void 0);
    return VaultMattersExportsGetSecurityOption2;
}(SpeakeasyBase));
export { VaultMattersExportsGetSecurityOption2 };
var VaultMattersExportsGetSecurity = /** @class */ (function (_super) {
    __extends(VaultMattersExportsGetSecurity, _super);
    function VaultMattersExportsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VaultMattersExportsGetSecurityOption1)
    ], VaultMattersExportsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VaultMattersExportsGetSecurityOption2)
    ], VaultMattersExportsGetSecurity.prototype, "option2", void 0);
    return VaultMattersExportsGetSecurity;
}(SpeakeasyBase));
export { VaultMattersExportsGetSecurity };
var VaultMattersExportsGetRequest = /** @class */ (function (_super) {
    __extends(VaultMattersExportsGetRequest, _super);
    function VaultMattersExportsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VaultMattersExportsGetPathParams)
    ], VaultMattersExportsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VaultMattersExportsGetQueryParams)
    ], VaultMattersExportsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VaultMattersExportsGetSecurity)
    ], VaultMattersExportsGetRequest.prototype, "security", void 0);
    return VaultMattersExportsGetRequest;
}(SpeakeasyBase));
export { VaultMattersExportsGetRequest };
var VaultMattersExportsGetResponse = /** @class */ (function (_super) {
    __extends(VaultMattersExportsGetResponse, _super);
    function VaultMattersExportsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VaultMattersExportsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Export)
    ], VaultMattersExportsGetResponse.prototype, "export", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VaultMattersExportsGetResponse.prototype, "statusCode", void 0);
    return VaultMattersExportsGetResponse;
}(SpeakeasyBase));
export { VaultMattersExportsGetResponse };
