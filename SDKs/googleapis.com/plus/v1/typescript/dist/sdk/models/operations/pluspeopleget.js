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
var PlusPeopleGetPathParams = /** @class */ (function (_super) {
    __extends(PlusPeopleGetPathParams, _super);
    function PlusPeopleGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], PlusPeopleGetPathParams.prototype, "userId", void 0);
    return PlusPeopleGetPathParams;
}(SpeakeasyBase));
export { PlusPeopleGetPathParams };
var PlusPeopleGetQueryParams = /** @class */ (function (_super) {
    __extends(PlusPeopleGetQueryParams, _super);
    function PlusPeopleGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PlusPeopleGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PlusPeopleGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PlusPeopleGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PlusPeopleGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PlusPeopleGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PlusPeopleGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], PlusPeopleGetQueryParams.prototype, "userIp", void 0);
    return PlusPeopleGetQueryParams;
}(SpeakeasyBase));
export { PlusPeopleGetQueryParams };
var PlusPeopleGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(PlusPeopleGetSecurityOption1, _super);
    function PlusPeopleGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PlusPeopleGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PlusPeopleGetSecurityOption1.prototype, "oauth2c", void 0);
    return PlusPeopleGetSecurityOption1;
}(SpeakeasyBase));
export { PlusPeopleGetSecurityOption1 };
var PlusPeopleGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(PlusPeopleGetSecurityOption2, _super);
    function PlusPeopleGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PlusPeopleGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PlusPeopleGetSecurityOption2.prototype, "oauth2c", void 0);
    return PlusPeopleGetSecurityOption2;
}(SpeakeasyBase));
export { PlusPeopleGetSecurityOption2 };
var PlusPeopleGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(PlusPeopleGetSecurityOption3, _super);
    function PlusPeopleGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PlusPeopleGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PlusPeopleGetSecurityOption3.prototype, "oauth2c", void 0);
    return PlusPeopleGetSecurityOption3;
}(SpeakeasyBase));
export { PlusPeopleGetSecurityOption3 };
var PlusPeopleGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(PlusPeopleGetSecurityOption4, _super);
    function PlusPeopleGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PlusPeopleGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PlusPeopleGetSecurityOption4.prototype, "oauth2c", void 0);
    return PlusPeopleGetSecurityOption4;
}(SpeakeasyBase));
export { PlusPeopleGetSecurityOption4 };
var PlusPeopleGetSecurity = /** @class */ (function (_super) {
    __extends(PlusPeopleGetSecurity, _super);
    function PlusPeopleGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PlusPeopleGetSecurityOption1)
    ], PlusPeopleGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PlusPeopleGetSecurityOption2)
    ], PlusPeopleGetSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PlusPeopleGetSecurityOption3)
    ], PlusPeopleGetSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PlusPeopleGetSecurityOption4)
    ], PlusPeopleGetSecurity.prototype, "option4", void 0);
    return PlusPeopleGetSecurity;
}(SpeakeasyBase));
export { PlusPeopleGetSecurity };
var PlusPeopleGetRequest = /** @class */ (function (_super) {
    __extends(PlusPeopleGetRequest, _super);
    function PlusPeopleGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PlusPeopleGetPathParams)
    ], PlusPeopleGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PlusPeopleGetQueryParams)
    ], PlusPeopleGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PlusPeopleGetSecurity)
    ], PlusPeopleGetRequest.prototype, "security", void 0);
    return PlusPeopleGetRequest;
}(SpeakeasyBase));
export { PlusPeopleGetRequest };
var PlusPeopleGetResponse = /** @class */ (function (_super) {
    __extends(PlusPeopleGetResponse, _super);
    function PlusPeopleGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PlusPeopleGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Person)
    ], PlusPeopleGetResponse.prototype, "person", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PlusPeopleGetResponse.prototype, "statusCode", void 0);
    return PlusPeopleGetResponse;
}(SpeakeasyBase));
export { PlusPeopleGetResponse };
