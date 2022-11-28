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
var DnsResponsePoliciesDeletePathParams = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesDeletePathParams, _super);
    function DnsResponsePoliciesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesDeletePathParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=responsePolicy" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesDeletePathParams.prototype, "responsePolicy", void 0);
    return DnsResponsePoliciesDeletePathParams;
}(SpeakeasyBase));
export { DnsResponsePoliciesDeletePathParams };
var DnsResponsePoliciesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesDeleteQueryParams, _super);
    function DnsResponsePoliciesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientOperationId" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesDeleteQueryParams.prototype, "clientOperationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DnsResponsePoliciesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return DnsResponsePoliciesDeleteQueryParams;
}(SpeakeasyBase));
export { DnsResponsePoliciesDeleteQueryParams };
var DnsResponsePoliciesDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesDeleteSecurityOption1, _super);
    function DnsResponsePoliciesDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResponsePoliciesDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResponsePoliciesDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return DnsResponsePoliciesDeleteSecurityOption1;
}(SpeakeasyBase));
export { DnsResponsePoliciesDeleteSecurityOption1 };
var DnsResponsePoliciesDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesDeleteSecurityOption2, _super);
    function DnsResponsePoliciesDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResponsePoliciesDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResponsePoliciesDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return DnsResponsePoliciesDeleteSecurityOption2;
}(SpeakeasyBase));
export { DnsResponsePoliciesDeleteSecurityOption2 };
var DnsResponsePoliciesDeleteSecurity = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesDeleteSecurity, _super);
    function DnsResponsePoliciesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResponsePoliciesDeleteSecurityOption1)
    ], DnsResponsePoliciesDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResponsePoliciesDeleteSecurityOption2)
    ], DnsResponsePoliciesDeleteSecurity.prototype, "option2", void 0);
    return DnsResponsePoliciesDeleteSecurity;
}(SpeakeasyBase));
export { DnsResponsePoliciesDeleteSecurity };
var DnsResponsePoliciesDeleteRequest = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesDeleteRequest, _super);
    function DnsResponsePoliciesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePoliciesDeletePathParams)
    ], DnsResponsePoliciesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePoliciesDeleteQueryParams)
    ], DnsResponsePoliciesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePoliciesDeleteSecurity)
    ], DnsResponsePoliciesDeleteRequest.prototype, "security", void 0);
    return DnsResponsePoliciesDeleteRequest;
}(SpeakeasyBase));
export { DnsResponsePoliciesDeleteRequest };
var DnsResponsePoliciesDeleteResponse = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesDeleteResponse, _super);
    function DnsResponsePoliciesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DnsResponsePoliciesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DnsResponsePoliciesDeleteResponse.prototype, "statusCode", void 0);
    return DnsResponsePoliciesDeleteResponse;
}(SpeakeasyBase));
export { DnsResponsePoliciesDeleteResponse };
