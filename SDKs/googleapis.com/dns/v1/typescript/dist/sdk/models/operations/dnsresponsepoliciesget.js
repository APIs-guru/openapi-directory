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
var DnsResponsePoliciesGetPathParams = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesGetPathParams, _super);
    function DnsResponsePoliciesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesGetPathParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=responsePolicy" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesGetPathParams.prototype, "responsePolicy", void 0);
    return DnsResponsePoliciesGetPathParams;
}(SpeakeasyBase));
export { DnsResponsePoliciesGetPathParams };
var DnsResponsePoliciesGetQueryParams = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesGetQueryParams, _super);
    function DnsResponsePoliciesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientOperationId" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesGetQueryParams.prototype, "clientOperationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DnsResponsePoliciesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesGetQueryParams.prototype, "uploadProtocol", void 0);
    return DnsResponsePoliciesGetQueryParams;
}(SpeakeasyBase));
export { DnsResponsePoliciesGetQueryParams };
var DnsResponsePoliciesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesGetSecurityOption1, _super);
    function DnsResponsePoliciesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResponsePoliciesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResponsePoliciesGetSecurityOption1.prototype, "oauth2c", void 0);
    return DnsResponsePoliciesGetSecurityOption1;
}(SpeakeasyBase));
export { DnsResponsePoliciesGetSecurityOption1 };
var DnsResponsePoliciesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesGetSecurityOption2, _super);
    function DnsResponsePoliciesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResponsePoliciesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResponsePoliciesGetSecurityOption2.prototype, "oauth2c", void 0);
    return DnsResponsePoliciesGetSecurityOption2;
}(SpeakeasyBase));
export { DnsResponsePoliciesGetSecurityOption2 };
var DnsResponsePoliciesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesGetSecurityOption3, _super);
    function DnsResponsePoliciesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResponsePoliciesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResponsePoliciesGetSecurityOption3.prototype, "oauth2c", void 0);
    return DnsResponsePoliciesGetSecurityOption3;
}(SpeakeasyBase));
export { DnsResponsePoliciesGetSecurityOption3 };
var DnsResponsePoliciesGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesGetSecurityOption4, _super);
    function DnsResponsePoliciesGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResponsePoliciesGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResponsePoliciesGetSecurityOption4.prototype, "oauth2c", void 0);
    return DnsResponsePoliciesGetSecurityOption4;
}(SpeakeasyBase));
export { DnsResponsePoliciesGetSecurityOption4 };
var DnsResponsePoliciesGetSecurity = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesGetSecurity, _super);
    function DnsResponsePoliciesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResponsePoliciesGetSecurityOption1)
    ], DnsResponsePoliciesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResponsePoliciesGetSecurityOption2)
    ], DnsResponsePoliciesGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResponsePoliciesGetSecurityOption3)
    ], DnsResponsePoliciesGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResponsePoliciesGetSecurityOption4)
    ], DnsResponsePoliciesGetSecurity.prototype, "option4", void 0);
    return DnsResponsePoliciesGetSecurity;
}(SpeakeasyBase));
export { DnsResponsePoliciesGetSecurity };
var DnsResponsePoliciesGetRequest = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesGetRequest, _super);
    function DnsResponsePoliciesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePoliciesGetPathParams)
    ], DnsResponsePoliciesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePoliciesGetQueryParams)
    ], DnsResponsePoliciesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePoliciesGetSecurity)
    ], DnsResponsePoliciesGetRequest.prototype, "security", void 0);
    return DnsResponsePoliciesGetRequest;
}(SpeakeasyBase));
export { DnsResponsePoliciesGetRequest };
var DnsResponsePoliciesGetResponse = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesGetResponse, _super);
    function DnsResponsePoliciesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DnsResponsePoliciesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResponsePolicy)
    ], DnsResponsePoliciesGetResponse.prototype, "responsePolicy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DnsResponsePoliciesGetResponse.prototype, "statusCode", void 0);
    return DnsResponsePoliciesGetResponse;
}(SpeakeasyBase));
export { DnsResponsePoliciesGetResponse };
