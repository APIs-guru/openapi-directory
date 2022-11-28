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
var DnsDnsKeysGetPathParams = /** @class */ (function (_super) {
    __extends(DnsDnsKeysGetPathParams, _super);
    function DnsDnsKeysGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dnsKeyId" }),
        __metadata("design:type", String)
    ], DnsDnsKeysGetPathParams.prototype, "dnsKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=managedZone" }),
        __metadata("design:type", String)
    ], DnsDnsKeysGetPathParams.prototype, "managedZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DnsDnsKeysGetPathParams.prototype, "project", void 0);
    return DnsDnsKeysGetPathParams;
}(SpeakeasyBase));
export { DnsDnsKeysGetPathParams };
var DnsDnsKeysGetQueryParams = /** @class */ (function (_super) {
    __extends(DnsDnsKeysGetQueryParams, _super);
    function DnsDnsKeysGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DnsDnsKeysGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DnsDnsKeysGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DnsDnsKeysGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DnsDnsKeysGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientOperationId" }),
        __metadata("design:type", String)
    ], DnsDnsKeysGetQueryParams.prototype, "clientOperationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=digestType" }),
        __metadata("design:type", String)
    ], DnsDnsKeysGetQueryParams.prototype, "digestType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DnsDnsKeysGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DnsDnsKeysGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DnsDnsKeysGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DnsDnsKeysGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DnsDnsKeysGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DnsDnsKeysGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DnsDnsKeysGetQueryParams.prototype, "uploadProtocol", void 0);
    return DnsDnsKeysGetQueryParams;
}(SpeakeasyBase));
export { DnsDnsKeysGetQueryParams };
var DnsDnsKeysGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DnsDnsKeysGetSecurityOption1, _super);
    function DnsDnsKeysGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsDnsKeysGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsDnsKeysGetSecurityOption1.prototype, "oauth2c", void 0);
    return DnsDnsKeysGetSecurityOption1;
}(SpeakeasyBase));
export { DnsDnsKeysGetSecurityOption1 };
var DnsDnsKeysGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DnsDnsKeysGetSecurityOption2, _super);
    function DnsDnsKeysGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsDnsKeysGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsDnsKeysGetSecurityOption2.prototype, "oauth2c", void 0);
    return DnsDnsKeysGetSecurityOption2;
}(SpeakeasyBase));
export { DnsDnsKeysGetSecurityOption2 };
var DnsDnsKeysGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DnsDnsKeysGetSecurityOption3, _super);
    function DnsDnsKeysGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsDnsKeysGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsDnsKeysGetSecurityOption3.prototype, "oauth2c", void 0);
    return DnsDnsKeysGetSecurityOption3;
}(SpeakeasyBase));
export { DnsDnsKeysGetSecurityOption3 };
var DnsDnsKeysGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DnsDnsKeysGetSecurityOption4, _super);
    function DnsDnsKeysGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsDnsKeysGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsDnsKeysGetSecurityOption4.prototype, "oauth2c", void 0);
    return DnsDnsKeysGetSecurityOption4;
}(SpeakeasyBase));
export { DnsDnsKeysGetSecurityOption4 };
var DnsDnsKeysGetSecurity = /** @class */ (function (_super) {
    __extends(DnsDnsKeysGetSecurity, _super);
    function DnsDnsKeysGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsDnsKeysGetSecurityOption1)
    ], DnsDnsKeysGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsDnsKeysGetSecurityOption2)
    ], DnsDnsKeysGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsDnsKeysGetSecurityOption3)
    ], DnsDnsKeysGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsDnsKeysGetSecurityOption4)
    ], DnsDnsKeysGetSecurity.prototype, "option4", void 0);
    return DnsDnsKeysGetSecurity;
}(SpeakeasyBase));
export { DnsDnsKeysGetSecurity };
var DnsDnsKeysGetRequest = /** @class */ (function (_super) {
    __extends(DnsDnsKeysGetRequest, _super);
    function DnsDnsKeysGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsDnsKeysGetPathParams)
    ], DnsDnsKeysGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsDnsKeysGetQueryParams)
    ], DnsDnsKeysGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsDnsKeysGetSecurity)
    ], DnsDnsKeysGetRequest.prototype, "security", void 0);
    return DnsDnsKeysGetRequest;
}(SpeakeasyBase));
export { DnsDnsKeysGetRequest };
var DnsDnsKeysGetResponse = /** @class */ (function (_super) {
    __extends(DnsDnsKeysGetResponse, _super);
    function DnsDnsKeysGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DnsDnsKeysGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DnsKey)
    ], DnsDnsKeysGetResponse.prototype, "dnsKey", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DnsDnsKeysGetResponse.prototype, "statusCode", void 0);
    return DnsDnsKeysGetResponse;
}(SpeakeasyBase));
export { DnsDnsKeysGetResponse };
