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
var DnsResponsePolicyRulesPatchPathParams = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesPatchPathParams, _super);
    function DnsResponsePolicyRulesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesPatchPathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesPatchPathParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=responsePolicy" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesPatchPathParams.prototype, "responsePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=responsePolicyRule" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesPatchPathParams.prototype, "responsePolicyRule", void 0);
    return DnsResponsePolicyRulesPatchPathParams;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesPatchPathParams };
var DnsResponsePolicyRulesPatchQueryParams = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesPatchQueryParams, _super);
    function DnsResponsePolicyRulesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientOperationId" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesPatchQueryParams.prototype, "clientOperationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DnsResponsePolicyRulesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return DnsResponsePolicyRulesPatchQueryParams;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesPatchQueryParams };
var DnsResponsePolicyRulesPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesPatchSecurityOption1, _super);
    function DnsResponsePolicyRulesPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResponsePolicyRulesPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResponsePolicyRulesPatchSecurityOption1.prototype, "oauth2c", void 0);
    return DnsResponsePolicyRulesPatchSecurityOption1;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesPatchSecurityOption1 };
var DnsResponsePolicyRulesPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesPatchSecurityOption2, _super);
    function DnsResponsePolicyRulesPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResponsePolicyRulesPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResponsePolicyRulesPatchSecurityOption2.prototype, "oauth2c", void 0);
    return DnsResponsePolicyRulesPatchSecurityOption2;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesPatchSecurityOption2 };
var DnsResponsePolicyRulesPatchSecurity = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesPatchSecurity, _super);
    function DnsResponsePolicyRulesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResponsePolicyRulesPatchSecurityOption1)
    ], DnsResponsePolicyRulesPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResponsePolicyRulesPatchSecurityOption2)
    ], DnsResponsePolicyRulesPatchSecurity.prototype, "option2", void 0);
    return DnsResponsePolicyRulesPatchSecurity;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesPatchSecurity };
var DnsResponsePolicyRulesPatchRequest = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesPatchRequest, _super);
    function DnsResponsePolicyRulesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePolicyRulesPatchPathParams)
    ], DnsResponsePolicyRulesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePolicyRulesPatchQueryParams)
    ], DnsResponsePolicyRulesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ResponsePolicyRule)
    ], DnsResponsePolicyRulesPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePolicyRulesPatchSecurity)
    ], DnsResponsePolicyRulesPatchRequest.prototype, "security", void 0);
    return DnsResponsePolicyRulesPatchRequest;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesPatchRequest };
var DnsResponsePolicyRulesPatchResponse = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesPatchResponse, _super);
    function DnsResponsePolicyRulesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResponsePolicyRulesPatchResponse)
    ], DnsResponsePolicyRulesPatchResponse.prototype, "responsePolicyRulesPatchResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DnsResponsePolicyRulesPatchResponse.prototype, "statusCode", void 0);
    return DnsResponsePolicyRulesPatchResponse;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesPatchResponse };
