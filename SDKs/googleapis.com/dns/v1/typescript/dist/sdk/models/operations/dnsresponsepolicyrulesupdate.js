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
var DnsResponsePolicyRulesUpdatePathParams = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesUpdatePathParams, _super);
    function DnsResponsePolicyRulesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesUpdatePathParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=responsePolicy" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesUpdatePathParams.prototype, "responsePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=responsePolicyRule" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesUpdatePathParams.prototype, "responsePolicyRule", void 0);
    return DnsResponsePolicyRulesUpdatePathParams;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesUpdatePathParams };
var DnsResponsePolicyRulesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesUpdateQueryParams, _super);
    function DnsResponsePolicyRulesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientOperationId" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesUpdateQueryParams.prototype, "clientOperationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DnsResponsePolicyRulesUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return DnsResponsePolicyRulesUpdateQueryParams;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesUpdateQueryParams };
var DnsResponsePolicyRulesUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesUpdateSecurityOption1, _super);
    function DnsResponsePolicyRulesUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResponsePolicyRulesUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResponsePolicyRulesUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return DnsResponsePolicyRulesUpdateSecurityOption1;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesUpdateSecurityOption1 };
var DnsResponsePolicyRulesUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesUpdateSecurityOption2, _super);
    function DnsResponsePolicyRulesUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResponsePolicyRulesUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResponsePolicyRulesUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return DnsResponsePolicyRulesUpdateSecurityOption2;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesUpdateSecurityOption2 };
var DnsResponsePolicyRulesUpdateSecurity = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesUpdateSecurity, _super);
    function DnsResponsePolicyRulesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResponsePolicyRulesUpdateSecurityOption1)
    ], DnsResponsePolicyRulesUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResponsePolicyRulesUpdateSecurityOption2)
    ], DnsResponsePolicyRulesUpdateSecurity.prototype, "option2", void 0);
    return DnsResponsePolicyRulesUpdateSecurity;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesUpdateSecurity };
var DnsResponsePolicyRulesUpdateRequest = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesUpdateRequest, _super);
    function DnsResponsePolicyRulesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePolicyRulesUpdatePathParams)
    ], DnsResponsePolicyRulesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePolicyRulesUpdateQueryParams)
    ], DnsResponsePolicyRulesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ResponsePolicyRule)
    ], DnsResponsePolicyRulesUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePolicyRulesUpdateSecurity)
    ], DnsResponsePolicyRulesUpdateRequest.prototype, "security", void 0);
    return DnsResponsePolicyRulesUpdateRequest;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesUpdateRequest };
var DnsResponsePolicyRulesUpdateResponse = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesUpdateResponse, _super);
    function DnsResponsePolicyRulesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResponsePolicyRulesUpdateResponse)
    ], DnsResponsePolicyRulesUpdateResponse.prototype, "responsePolicyRulesUpdateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DnsResponsePolicyRulesUpdateResponse.prototype, "statusCode", void 0);
    return DnsResponsePolicyRulesUpdateResponse;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesUpdateResponse };
