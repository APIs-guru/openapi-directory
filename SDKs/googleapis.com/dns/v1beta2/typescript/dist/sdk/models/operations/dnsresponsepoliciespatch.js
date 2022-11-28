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
var DnsResponsePoliciesPatchPathParams = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesPatchPathParams, _super);
    function DnsResponsePoliciesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesPatchPathParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=responsePolicy" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesPatchPathParams.prototype, "responsePolicy", void 0);
    return DnsResponsePoliciesPatchPathParams;
}(SpeakeasyBase));
export { DnsResponsePoliciesPatchPathParams };
var DnsResponsePoliciesPatchQueryParams = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesPatchQueryParams, _super);
    function DnsResponsePoliciesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientOperationId" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesPatchQueryParams.prototype, "clientOperationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DnsResponsePoliciesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return DnsResponsePoliciesPatchQueryParams;
}(SpeakeasyBase));
export { DnsResponsePoliciesPatchQueryParams };
var DnsResponsePoliciesPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesPatchSecurityOption1, _super);
    function DnsResponsePoliciesPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResponsePoliciesPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResponsePoliciesPatchSecurityOption1.prototype, "oauth2c", void 0);
    return DnsResponsePoliciesPatchSecurityOption1;
}(SpeakeasyBase));
export { DnsResponsePoliciesPatchSecurityOption1 };
var DnsResponsePoliciesPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesPatchSecurityOption2, _super);
    function DnsResponsePoliciesPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResponsePoliciesPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResponsePoliciesPatchSecurityOption2.prototype, "oauth2c", void 0);
    return DnsResponsePoliciesPatchSecurityOption2;
}(SpeakeasyBase));
export { DnsResponsePoliciesPatchSecurityOption2 };
var DnsResponsePoliciesPatchSecurity = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesPatchSecurity, _super);
    function DnsResponsePoliciesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResponsePoliciesPatchSecurityOption1)
    ], DnsResponsePoliciesPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResponsePoliciesPatchSecurityOption2)
    ], DnsResponsePoliciesPatchSecurity.prototype, "option2", void 0);
    return DnsResponsePoliciesPatchSecurity;
}(SpeakeasyBase));
export { DnsResponsePoliciesPatchSecurity };
var DnsResponsePoliciesPatchRequest = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesPatchRequest, _super);
    function DnsResponsePoliciesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePoliciesPatchPathParams)
    ], DnsResponsePoliciesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePoliciesPatchQueryParams)
    ], DnsResponsePoliciesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ResponsePolicy)
    ], DnsResponsePoliciesPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePoliciesPatchSecurity)
    ], DnsResponsePoliciesPatchRequest.prototype, "security", void 0);
    return DnsResponsePoliciesPatchRequest;
}(SpeakeasyBase));
export { DnsResponsePoliciesPatchRequest };
var DnsResponsePoliciesPatchResponse = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesPatchResponse, _super);
    function DnsResponsePoliciesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DnsResponsePoliciesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResponsePoliciesPatchResponse)
    ], DnsResponsePoliciesPatchResponse.prototype, "responsePoliciesPatchResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DnsResponsePoliciesPatchResponse.prototype, "statusCode", void 0);
    return DnsResponsePoliciesPatchResponse;
}(SpeakeasyBase));
export { DnsResponsePoliciesPatchResponse };
