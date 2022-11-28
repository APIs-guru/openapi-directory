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
var Oauth2UserinfoGetQueryParams = /** @class */ (function (_super) {
    __extends(Oauth2UserinfoGetQueryParams, _super);
    function Oauth2UserinfoGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], Oauth2UserinfoGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], Oauth2UserinfoGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], Oauth2UserinfoGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], Oauth2UserinfoGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], Oauth2UserinfoGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], Oauth2UserinfoGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], Oauth2UserinfoGetQueryParams.prototype, "userIp", void 0);
    return Oauth2UserinfoGetQueryParams;
}(SpeakeasyBase));
export { Oauth2UserinfoGetQueryParams };
var Oauth2UserinfoGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(Oauth2UserinfoGetSecurityOption1, _super);
    function Oauth2UserinfoGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Oauth2UserinfoGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Oauth2UserinfoGetSecurityOption1.prototype, "oauth2c", void 0);
    return Oauth2UserinfoGetSecurityOption1;
}(SpeakeasyBase));
export { Oauth2UserinfoGetSecurityOption1 };
var Oauth2UserinfoGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(Oauth2UserinfoGetSecurityOption2, _super);
    function Oauth2UserinfoGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Oauth2UserinfoGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Oauth2UserinfoGetSecurityOption2.prototype, "oauth2c", void 0);
    return Oauth2UserinfoGetSecurityOption2;
}(SpeakeasyBase));
export { Oauth2UserinfoGetSecurityOption2 };
var Oauth2UserinfoGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(Oauth2UserinfoGetSecurityOption3, _super);
    function Oauth2UserinfoGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], Oauth2UserinfoGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], Oauth2UserinfoGetSecurityOption3.prototype, "oauth2c", void 0);
    return Oauth2UserinfoGetSecurityOption3;
}(SpeakeasyBase));
export { Oauth2UserinfoGetSecurityOption3 };
var Oauth2UserinfoGetSecurity = /** @class */ (function (_super) {
    __extends(Oauth2UserinfoGetSecurity, _super);
    function Oauth2UserinfoGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", Oauth2UserinfoGetSecurityOption1)
    ], Oauth2UserinfoGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", Oauth2UserinfoGetSecurityOption2)
    ], Oauth2UserinfoGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", Oauth2UserinfoGetSecurityOption3)
    ], Oauth2UserinfoGetSecurity.prototype, "option3", void 0);
    return Oauth2UserinfoGetSecurity;
}(SpeakeasyBase));
export { Oauth2UserinfoGetSecurity };
var Oauth2UserinfoGetRequest = /** @class */ (function (_super) {
    __extends(Oauth2UserinfoGetRequest, _super);
    function Oauth2UserinfoGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Oauth2UserinfoGetQueryParams)
    ], Oauth2UserinfoGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Oauth2UserinfoGetSecurity)
    ], Oauth2UserinfoGetRequest.prototype, "security", void 0);
    return Oauth2UserinfoGetRequest;
}(SpeakeasyBase));
export { Oauth2UserinfoGetRequest };
var Oauth2UserinfoGetResponse = /** @class */ (function (_super) {
    __extends(Oauth2UserinfoGetResponse, _super);
    function Oauth2UserinfoGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Oauth2UserinfoGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Oauth2UserinfoGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Userinfo)
    ], Oauth2UserinfoGetResponse.prototype, "userinfo", void 0);
    return Oauth2UserinfoGetResponse;
}(SpeakeasyBase));
export { Oauth2UserinfoGetResponse };
