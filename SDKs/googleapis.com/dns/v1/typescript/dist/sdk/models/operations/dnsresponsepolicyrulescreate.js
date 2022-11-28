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
var DnsResponsePolicyRulesCreatePathParams = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesCreatePathParams, _super);
    function DnsResponsePolicyRulesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesCreatePathParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=responsePolicy" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesCreatePathParams.prototype, "responsePolicy", void 0);
    return DnsResponsePolicyRulesCreatePathParams;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesCreatePathParams };
var DnsResponsePolicyRulesCreateQueryParams = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesCreateQueryParams, _super);
    function DnsResponsePolicyRulesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientOperationId" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesCreateQueryParams.prototype, "clientOperationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DnsResponsePolicyRulesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DnsResponsePolicyRulesCreateQueryParams;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesCreateQueryParams };
var DnsResponsePolicyRulesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesCreateSecurityOption1, _super);
    function DnsResponsePolicyRulesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResponsePolicyRulesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResponsePolicyRulesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DnsResponsePolicyRulesCreateSecurityOption1;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesCreateSecurityOption1 };
var DnsResponsePolicyRulesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesCreateSecurityOption2, _super);
    function DnsResponsePolicyRulesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResponsePolicyRulesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResponsePolicyRulesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DnsResponsePolicyRulesCreateSecurityOption2;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesCreateSecurityOption2 };
var DnsResponsePolicyRulesCreateSecurity = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesCreateSecurity, _super);
    function DnsResponsePolicyRulesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResponsePolicyRulesCreateSecurityOption1)
    ], DnsResponsePolicyRulesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResponsePolicyRulesCreateSecurityOption2)
    ], DnsResponsePolicyRulesCreateSecurity.prototype, "option2", void 0);
    return DnsResponsePolicyRulesCreateSecurity;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesCreateSecurity };
var DnsResponsePolicyRulesCreateRequest = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesCreateRequest, _super);
    function DnsResponsePolicyRulesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePolicyRulesCreatePathParams)
    ], DnsResponsePolicyRulesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePolicyRulesCreateQueryParams)
    ], DnsResponsePolicyRulesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ResponsePolicyRule)
    ], DnsResponsePolicyRulesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePolicyRulesCreateSecurity)
    ], DnsResponsePolicyRulesCreateRequest.prototype, "security", void 0);
    return DnsResponsePolicyRulesCreateRequest;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesCreateRequest };
var DnsResponsePolicyRulesCreateResponse = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesCreateResponse, _super);
    function DnsResponsePolicyRulesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResponsePolicyRule)
    ], DnsResponsePolicyRulesCreateResponse.prototype, "responsePolicyRule", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DnsResponsePolicyRulesCreateResponse.prototype, "statusCode", void 0);
    return DnsResponsePolicyRulesCreateResponse;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesCreateResponse };
