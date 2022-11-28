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
var DnsPoliciesGetPathParams = /** @class */ (function (_super) {
    __extends(DnsPoliciesGetPathParams, _super);
    function DnsPoliciesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=policy" }),
        __metadata("design:type", String)
    ], DnsPoliciesGetPathParams.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DnsPoliciesGetPathParams.prototype, "project", void 0);
    return DnsPoliciesGetPathParams;
}(SpeakeasyBase));
export { DnsPoliciesGetPathParams };
var DnsPoliciesGetQueryParams = /** @class */ (function (_super) {
    __extends(DnsPoliciesGetQueryParams, _super);
    function DnsPoliciesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DnsPoliciesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DnsPoliciesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DnsPoliciesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DnsPoliciesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientOperationId" }),
        __metadata("design:type", String)
    ], DnsPoliciesGetQueryParams.prototype, "clientOperationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DnsPoliciesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DnsPoliciesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DnsPoliciesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DnsPoliciesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DnsPoliciesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DnsPoliciesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DnsPoliciesGetQueryParams.prototype, "uploadProtocol", void 0);
    return DnsPoliciesGetQueryParams;
}(SpeakeasyBase));
export { DnsPoliciesGetQueryParams };
var DnsPoliciesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DnsPoliciesGetSecurityOption1, _super);
    function DnsPoliciesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsPoliciesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsPoliciesGetSecurityOption1.prototype, "oauth2c", void 0);
    return DnsPoliciesGetSecurityOption1;
}(SpeakeasyBase));
export { DnsPoliciesGetSecurityOption1 };
var DnsPoliciesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DnsPoliciesGetSecurityOption2, _super);
    function DnsPoliciesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsPoliciesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsPoliciesGetSecurityOption2.prototype, "oauth2c", void 0);
    return DnsPoliciesGetSecurityOption2;
}(SpeakeasyBase));
export { DnsPoliciesGetSecurityOption2 };
var DnsPoliciesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DnsPoliciesGetSecurityOption3, _super);
    function DnsPoliciesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsPoliciesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsPoliciesGetSecurityOption3.prototype, "oauth2c", void 0);
    return DnsPoliciesGetSecurityOption3;
}(SpeakeasyBase));
export { DnsPoliciesGetSecurityOption3 };
var DnsPoliciesGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DnsPoliciesGetSecurityOption4, _super);
    function DnsPoliciesGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsPoliciesGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsPoliciesGetSecurityOption4.prototype, "oauth2c", void 0);
    return DnsPoliciesGetSecurityOption4;
}(SpeakeasyBase));
export { DnsPoliciesGetSecurityOption4 };
var DnsPoliciesGetSecurity = /** @class */ (function (_super) {
    __extends(DnsPoliciesGetSecurity, _super);
    function DnsPoliciesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsPoliciesGetSecurityOption1)
    ], DnsPoliciesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsPoliciesGetSecurityOption2)
    ], DnsPoliciesGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsPoliciesGetSecurityOption3)
    ], DnsPoliciesGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsPoliciesGetSecurityOption4)
    ], DnsPoliciesGetSecurity.prototype, "option4", void 0);
    return DnsPoliciesGetSecurity;
}(SpeakeasyBase));
export { DnsPoliciesGetSecurity };
var DnsPoliciesGetRequest = /** @class */ (function (_super) {
    __extends(DnsPoliciesGetRequest, _super);
    function DnsPoliciesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsPoliciesGetPathParams)
    ], DnsPoliciesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsPoliciesGetQueryParams)
    ], DnsPoliciesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsPoliciesGetSecurity)
    ], DnsPoliciesGetRequest.prototype, "security", void 0);
    return DnsPoliciesGetRequest;
}(SpeakeasyBase));
export { DnsPoliciesGetRequest };
var DnsPoliciesGetResponse = /** @class */ (function (_super) {
    __extends(DnsPoliciesGetResponse, _super);
    function DnsPoliciesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DnsPoliciesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], DnsPoliciesGetResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DnsPoliciesGetResponse.prototype, "statusCode", void 0);
    return DnsPoliciesGetResponse;
}(SpeakeasyBase));
export { DnsPoliciesGetResponse };
