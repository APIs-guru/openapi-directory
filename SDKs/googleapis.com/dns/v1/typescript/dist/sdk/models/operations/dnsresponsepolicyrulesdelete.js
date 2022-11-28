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
var DnsResponsePolicyRulesDeletePathParams = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesDeletePathParams, _super);
    function DnsResponsePolicyRulesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesDeletePathParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=responsePolicy" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesDeletePathParams.prototype, "responsePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=responsePolicyRule" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesDeletePathParams.prototype, "responsePolicyRule", void 0);
    return DnsResponsePolicyRulesDeletePathParams;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesDeletePathParams };
var DnsResponsePolicyRulesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesDeleteQueryParams, _super);
    function DnsResponsePolicyRulesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientOperationId" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesDeleteQueryParams.prototype, "clientOperationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DnsResponsePolicyRulesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return DnsResponsePolicyRulesDeleteQueryParams;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesDeleteQueryParams };
var DnsResponsePolicyRulesDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesDeleteSecurityOption1, _super);
    function DnsResponsePolicyRulesDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResponsePolicyRulesDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResponsePolicyRulesDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return DnsResponsePolicyRulesDeleteSecurityOption1;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesDeleteSecurityOption1 };
var DnsResponsePolicyRulesDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesDeleteSecurityOption2, _super);
    function DnsResponsePolicyRulesDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResponsePolicyRulesDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResponsePolicyRulesDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return DnsResponsePolicyRulesDeleteSecurityOption2;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesDeleteSecurityOption2 };
var DnsResponsePolicyRulesDeleteSecurity = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesDeleteSecurity, _super);
    function DnsResponsePolicyRulesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResponsePolicyRulesDeleteSecurityOption1)
    ], DnsResponsePolicyRulesDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResponsePolicyRulesDeleteSecurityOption2)
    ], DnsResponsePolicyRulesDeleteSecurity.prototype, "option2", void 0);
    return DnsResponsePolicyRulesDeleteSecurity;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesDeleteSecurity };
var DnsResponsePolicyRulesDeleteRequest = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesDeleteRequest, _super);
    function DnsResponsePolicyRulesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePolicyRulesDeletePathParams)
    ], DnsResponsePolicyRulesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePolicyRulesDeleteQueryParams)
    ], DnsResponsePolicyRulesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePolicyRulesDeleteSecurity)
    ], DnsResponsePolicyRulesDeleteRequest.prototype, "security", void 0);
    return DnsResponsePolicyRulesDeleteRequest;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesDeleteRequest };
var DnsResponsePolicyRulesDeleteResponse = /** @class */ (function (_super) {
    __extends(DnsResponsePolicyRulesDeleteResponse, _super);
    function DnsResponsePolicyRulesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DnsResponsePolicyRulesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DnsResponsePolicyRulesDeleteResponse.prototype, "statusCode", void 0);
    return DnsResponsePolicyRulesDeleteResponse;
}(SpeakeasyBase));
export { DnsResponsePolicyRulesDeleteResponse };
