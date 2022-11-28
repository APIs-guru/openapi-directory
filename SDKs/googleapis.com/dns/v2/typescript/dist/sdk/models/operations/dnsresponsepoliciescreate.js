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
var DnsResponsePoliciesCreatePathParams = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesCreatePathParams, _super);
    function DnsResponsePoliciesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesCreatePathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesCreatePathParams.prototype, "project", void 0);
    return DnsResponsePoliciesCreatePathParams;
}(SpeakeasyBase));
export { DnsResponsePoliciesCreatePathParams };
var DnsResponsePoliciesCreateQueryParams = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesCreateQueryParams, _super);
    function DnsResponsePoliciesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientOperationId" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesCreateQueryParams.prototype, "clientOperationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DnsResponsePoliciesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DnsResponsePoliciesCreateQueryParams;
}(SpeakeasyBase));
export { DnsResponsePoliciesCreateQueryParams };
var DnsResponsePoliciesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesCreateSecurityOption1, _super);
    function DnsResponsePoliciesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResponsePoliciesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResponsePoliciesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DnsResponsePoliciesCreateSecurityOption1;
}(SpeakeasyBase));
export { DnsResponsePoliciesCreateSecurityOption1 };
var DnsResponsePoliciesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesCreateSecurityOption2, _super);
    function DnsResponsePoliciesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResponsePoliciesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResponsePoliciesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DnsResponsePoliciesCreateSecurityOption2;
}(SpeakeasyBase));
export { DnsResponsePoliciesCreateSecurityOption2 };
var DnsResponsePoliciesCreateSecurity = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesCreateSecurity, _super);
    function DnsResponsePoliciesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResponsePoliciesCreateSecurityOption1)
    ], DnsResponsePoliciesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResponsePoliciesCreateSecurityOption2)
    ], DnsResponsePoliciesCreateSecurity.prototype, "option2", void 0);
    return DnsResponsePoliciesCreateSecurity;
}(SpeakeasyBase));
export { DnsResponsePoliciesCreateSecurity };
var DnsResponsePoliciesCreateRequest = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesCreateRequest, _super);
    function DnsResponsePoliciesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePoliciesCreatePathParams)
    ], DnsResponsePoliciesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePoliciesCreateQueryParams)
    ], DnsResponsePoliciesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ResponsePolicy)
    ], DnsResponsePoliciesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePoliciesCreateSecurity)
    ], DnsResponsePoliciesCreateRequest.prototype, "security", void 0);
    return DnsResponsePoliciesCreateRequest;
}(SpeakeasyBase));
export { DnsResponsePoliciesCreateRequest };
var DnsResponsePoliciesCreateResponse = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesCreateResponse, _super);
    function DnsResponsePoliciesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DnsResponsePoliciesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResponsePolicy)
    ], DnsResponsePoliciesCreateResponse.prototype, "responsePolicy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DnsResponsePoliciesCreateResponse.prototype, "statusCode", void 0);
    return DnsResponsePoliciesCreateResponse;
}(SpeakeasyBase));
export { DnsResponsePoliciesCreateResponse };
