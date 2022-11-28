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
var DnsResponsePolicyRulesGetPathParams = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesGetPathParams, _super);
    function DnsResponsePolicyRulesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesGetPathParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=responsePolicy" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesGetPathParams.prototype, "responsePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=responsePolicyRule" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesGetPathParams.prototype, "responsePolicyRule", void 0);
    return DnsResponsePolicyRulesGetPathParams;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesGetPathParams };
var DnsResponsePolicyRulesGetQueryParams = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesGetQueryParams, _super);
    function DnsResponsePolicyRulesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientOperationId" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesGetQueryParams.prototype, "clientOperationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DnsResponsePolicyRulesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesGetQueryParams.prototype, "uploadProtocol", void 0);
    return DnsResponsePolicyRulesGetQueryParams;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesGetQueryParams };
var DnsResponsePolicyRulesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesGetSecurityOption1, _super);
    function DnsResponsePolicyRulesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResponsePolicyRulesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResponsePolicyRulesGetSecurityOption1.prototype, "oauth2c", void 0);
    return DnsResponsePolicyRulesGetSecurityOption1;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesGetSecurityOption1 };
var DnsResponsePolicyRulesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesGetSecurityOption2, _super);
    function DnsResponsePolicyRulesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResponsePolicyRulesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResponsePolicyRulesGetSecurityOption2.prototype, "oauth2c", void 0);
    return DnsResponsePolicyRulesGetSecurityOption2;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesGetSecurityOption2 };
var DnsResponsePolicyRulesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesGetSecurityOption3, _super);
    function DnsResponsePolicyRulesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResponsePolicyRulesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResponsePolicyRulesGetSecurityOption3.prototype, "oauth2c", void 0);
    return DnsResponsePolicyRulesGetSecurityOption3;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesGetSecurityOption3 };
var DnsResponsePolicyRulesGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesGetSecurityOption4, _super);
    function DnsResponsePolicyRulesGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResponsePolicyRulesGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResponsePolicyRulesGetSecurityOption4.prototype, "oauth2c", void 0);
    return DnsResponsePolicyRulesGetSecurityOption4;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesGetSecurityOption4 };
var DnsResponsePolicyRulesGetSecurity = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesGetSecurity, _super);
    function DnsResponsePolicyRulesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResponsePolicyRulesGetSecurityOption1)
    ], DnsResponsePolicyRulesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResponsePolicyRulesGetSecurityOption2)
    ], DnsResponsePolicyRulesGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResponsePolicyRulesGetSecurityOption3)
    ], DnsResponsePolicyRulesGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResponsePolicyRulesGetSecurityOption4)
    ], DnsResponsePolicyRulesGetSecurity.prototype, "option4", void 0);
    return DnsResponsePolicyRulesGetSecurity;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesGetSecurity };
var DnsResponsePolicyRulesGetRequest = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesGetRequest, _super);
    function DnsResponsePolicyRulesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePolicyRulesGetPathParams)
    ], DnsResponsePolicyRulesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePolicyRulesGetQueryParams)
    ], DnsResponsePolicyRulesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePolicyRulesGetSecurity)
    ], DnsResponsePolicyRulesGetRequest.prototype, "security", void 0);
    return DnsResponsePolicyRulesGetRequest;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesGetRequest };
var DnsResponsePolicyRulesGetResponse = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesGetResponse, _super);
    function DnsResponsePolicyRulesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResponsePolicyRule)
    ], DnsResponsePolicyRulesGetResponse.prototype, "responsePolicyRule", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DnsResponsePolicyRulesGetResponse.prototype, "statusCode", void 0);
    return DnsResponsePolicyRulesGetResponse;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesGetResponse };
