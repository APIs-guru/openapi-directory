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
var Oauth2UserinfoV2MeGetQueryParams = /** @class */ (function (_super) {
    __extends(Oauth2UserinfoV2MeGetQueryParams, _super);
    function Oauth2UserinfoV2MeGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Oauth2UserinfoV2MeGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Oauth2UserinfoV2MeGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Oauth2UserinfoV2MeGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Oauth2UserinfoV2MeGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Oauth2UserinfoV2MeGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Oauth2UserinfoV2MeGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], Oauth2UserinfoV2MeGetQueryParams.prototype, "userIp", void 0);
    return Oauth2UserinfoV2MeGetQueryParams;
}(SpeakeasyBase));
export { Oauth2UserinfoV2MeGetQueryParams };
var Oauth2UserinfoV2MeGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(Oauth2UserinfoV2MeGetSecurityOption1, _super);
    function Oauth2UserinfoV2MeGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Oauth2UserinfoV2MeGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Oauth2UserinfoV2MeGetSecurityOption1.prototype, "oauth2c", void 0);
    return Oauth2UserinfoV2MeGetSecurityOption1;
}(SpeakeasyBase));
export { Oauth2UserinfoV2MeGetSecurityOption1 };
var Oauth2UserinfoV2MeGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(Oauth2UserinfoV2MeGetSecurityOption2, _super);
    function Oauth2UserinfoV2MeGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Oauth2UserinfoV2MeGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Oauth2UserinfoV2MeGetSecurityOption2.prototype, "oauth2c", void 0);
    return Oauth2UserinfoV2MeGetSecurityOption2;
}(SpeakeasyBase));
export { Oauth2UserinfoV2MeGetSecurityOption2 };
var Oauth2UserinfoV2MeGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(Oauth2UserinfoV2MeGetSecurityOption3, _super);
    function Oauth2UserinfoV2MeGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Oauth2UserinfoV2MeGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Oauth2UserinfoV2MeGetSecurityOption3.prototype, "oauth2c", void 0);
    return Oauth2UserinfoV2MeGetSecurityOption3;
}(SpeakeasyBase));
export { Oauth2UserinfoV2MeGetSecurityOption3 };
var Oauth2UserinfoV2MeGetSecurity = /** @class */ (function (_super) {
    __extends(Oauth2UserinfoV2MeGetSecurity, _super);
    function Oauth2UserinfoV2MeGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", Oauth2UserinfoV2MeGetSecurityOption1)
    ], Oauth2UserinfoV2MeGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", Oauth2UserinfoV2MeGetSecurityOption2)
    ], Oauth2UserinfoV2MeGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", Oauth2UserinfoV2MeGetSecurityOption3)
    ], Oauth2UserinfoV2MeGetSecurity.prototype, "option3", void 0);
    return Oauth2UserinfoV2MeGetSecurity;
}(SpeakeasyBase));
export { Oauth2UserinfoV2MeGetSecurity };
var Oauth2UserinfoV2MeGetRequest = /** @class */ (function (_super) {
    __extends(Oauth2UserinfoV2MeGetRequest, _super);
    function Oauth2UserinfoV2MeGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Oauth2UserinfoV2MeGetQueryParams)
    ], Oauth2UserinfoV2MeGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Oauth2UserinfoV2MeGetSecurity)
    ], Oauth2UserinfoV2MeGetRequest.prototype, "security", void 0);
    return Oauth2UserinfoV2MeGetRequest;
}(SpeakeasyBase));
export { Oauth2UserinfoV2MeGetRequest };
var Oauth2UserinfoV2MeGetResponse = /** @class */ (function (_super) {
    __extends(Oauth2UserinfoV2MeGetResponse, _super);
    function Oauth2UserinfoV2MeGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Oauth2UserinfoV2MeGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Oauth2UserinfoV2MeGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Userinfo)
    ], Oauth2UserinfoV2MeGetResponse.prototype, "userinfo", void 0);
    return Oauth2UserinfoV2MeGetResponse;
}(SpeakeasyBase));
export { Oauth2UserinfoV2MeGetResponse };
