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
var DnsResponsePoliciesUpdatePathParams = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesUpdatePathParams, _super);
    function DnsResponsePoliciesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesUpdatePathParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=responsePolicy" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesUpdatePathParams.prototype, "responsePolicy", void 0);
    return DnsResponsePoliciesUpdatePathParams;
}(SpeakeasyBase));
export { DnsResponsePoliciesUpdatePathParams };
var DnsResponsePoliciesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesUpdateQueryParams, _super);
    function DnsResponsePoliciesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientOperationId" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesUpdateQueryParams.prototype, "clientOperationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DnsResponsePoliciesUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DnsResponsePoliciesUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return DnsResponsePoliciesUpdateQueryParams;
}(SpeakeasyBase));
export { DnsResponsePoliciesUpdateQueryParams };
var DnsResponsePoliciesUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesUpdateSecurityOption1, _super);
    function DnsResponsePoliciesUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResponsePoliciesUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResponsePoliciesUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return DnsResponsePoliciesUpdateSecurityOption1;
}(SpeakeasyBase));
export { DnsResponsePoliciesUpdateSecurityOption1 };
var DnsResponsePoliciesUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesUpdateSecurityOption2, _super);
    function DnsResponsePoliciesUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResponsePoliciesUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResponsePoliciesUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return DnsResponsePoliciesUpdateSecurityOption2;
}(SpeakeasyBase));
export { DnsResponsePoliciesUpdateSecurityOption2 };
var DnsResponsePoliciesUpdateSecurity = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesUpdateSecurity, _super);
    function DnsResponsePoliciesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResponsePoliciesUpdateSecurityOption1)
    ], DnsResponsePoliciesUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResponsePoliciesUpdateSecurityOption2)
    ], DnsResponsePoliciesUpdateSecurity.prototype, "option2", void 0);
    return DnsResponsePoliciesUpdateSecurity;
}(SpeakeasyBase));
export { DnsResponsePoliciesUpdateSecurity };
var DnsResponsePoliciesUpdateRequest = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesUpdateRequest, _super);
    function DnsResponsePoliciesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePoliciesUpdatePathParams)
    ], DnsResponsePoliciesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePoliciesUpdateQueryParams)
    ], DnsResponsePoliciesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ResponsePolicy)
    ], DnsResponsePoliciesUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResponsePoliciesUpdateSecurity)
    ], DnsResponsePoliciesUpdateRequest.prototype, "security", void 0);
    return DnsResponsePoliciesUpdateRequest;
}(SpeakeasyBase));
export { DnsResponsePoliciesUpdateRequest };
var DnsResponsePoliciesUpdateResponse = /** @class */ (function (_super) {
    __extends(DnsResponsePoliciesUpdateResponse, _super);
    function DnsResponsePoliciesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DnsResponsePoliciesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResponsePoliciesUpdateResponse)
    ], DnsResponsePoliciesUpdateResponse.prototype, "responsePoliciesUpdateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DnsResponsePoliciesUpdateResponse.prototype, "statusCode", void 0);
    return DnsResponsePoliciesUpdateResponse;
}(SpeakeasyBase));
export { DnsResponsePoliciesUpdateResponse };
