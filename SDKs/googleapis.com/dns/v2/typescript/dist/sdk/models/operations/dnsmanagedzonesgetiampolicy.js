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
var DnsManagedZonesGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(DnsManagedZonesGetIamPolicyPathParams, _super);
    function DnsManagedZonesGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], DnsManagedZonesGetIamPolicyPathParams.prototype, "resource", void 0);
    return DnsManagedZonesGetIamPolicyPathParams;
}(SpeakeasyBase));
export { DnsManagedZonesGetIamPolicyPathParams };
var DnsManagedZonesGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(DnsManagedZonesGetIamPolicyQueryParams, _super);
    function DnsManagedZonesGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DnsManagedZonesGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DnsManagedZonesGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DnsManagedZonesGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DnsManagedZonesGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DnsManagedZonesGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DnsManagedZonesGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DnsManagedZonesGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DnsManagedZonesGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DnsManagedZonesGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DnsManagedZonesGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DnsManagedZonesGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return DnsManagedZonesGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { DnsManagedZonesGetIamPolicyQueryParams };
var DnsManagedZonesGetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(DnsManagedZonesGetIamPolicySecurityOption1, _super);
    function DnsManagedZonesGetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsManagedZonesGetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsManagedZonesGetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return DnsManagedZonesGetIamPolicySecurityOption1;
}(SpeakeasyBase));
export { DnsManagedZonesGetIamPolicySecurityOption1 };
var DnsManagedZonesGetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(DnsManagedZonesGetIamPolicySecurityOption2, _super);
    function DnsManagedZonesGetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsManagedZonesGetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsManagedZonesGetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return DnsManagedZonesGetIamPolicySecurityOption2;
}(SpeakeasyBase));
export { DnsManagedZonesGetIamPolicySecurityOption2 };
var DnsManagedZonesGetIamPolicySecurityOption3 = /** @class */ (function (_super) {
    __extends(DnsManagedZonesGetIamPolicySecurityOption3, _super);
    function DnsManagedZonesGetIamPolicySecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsManagedZonesGetIamPolicySecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsManagedZonesGetIamPolicySecurityOption3.prototype, "oauth2c", void 0);
    return DnsManagedZonesGetIamPolicySecurityOption3;
}(SpeakeasyBase));
export { DnsManagedZonesGetIamPolicySecurityOption3 };
var DnsManagedZonesGetIamPolicySecurityOption4 = /** @class */ (function (_super) {
    __extends(DnsManagedZonesGetIamPolicySecurityOption4, _super);
    function DnsManagedZonesGetIamPolicySecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsManagedZonesGetIamPolicySecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsManagedZonesGetIamPolicySecurityOption4.prototype, "oauth2c", void 0);
    return DnsManagedZonesGetIamPolicySecurityOption4;
}(SpeakeasyBase));
export { DnsManagedZonesGetIamPolicySecurityOption4 };
var DnsManagedZonesGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(DnsManagedZonesGetIamPolicySecurity, _super);
    function DnsManagedZonesGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsManagedZonesGetIamPolicySecurityOption1)
    ], DnsManagedZonesGetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsManagedZonesGetIamPolicySecurityOption2)
    ], DnsManagedZonesGetIamPolicySecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsManagedZonesGetIamPolicySecurityOption3)
    ], DnsManagedZonesGetIamPolicySecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsManagedZonesGetIamPolicySecurityOption4)
    ], DnsManagedZonesGetIamPolicySecurity.prototype, "option4", void 0);
    return DnsManagedZonesGetIamPolicySecurity;
}(SpeakeasyBase));
export { DnsManagedZonesGetIamPolicySecurity };
var DnsManagedZonesGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(DnsManagedZonesGetIamPolicyRequest, _super);
    function DnsManagedZonesGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsManagedZonesGetIamPolicyPathParams)
    ], DnsManagedZonesGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsManagedZonesGetIamPolicyQueryParams)
    ], DnsManagedZonesGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleIamV1GetIamPolicyRequest)
    ], DnsManagedZonesGetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsManagedZonesGetIamPolicySecurity)
    ], DnsManagedZonesGetIamPolicyRequest.prototype, "security", void 0);
    return DnsManagedZonesGetIamPolicyRequest;
}(SpeakeasyBase));
export { DnsManagedZonesGetIamPolicyRequest };
var DnsManagedZonesGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(DnsManagedZonesGetIamPolicyResponse, _super);
    function DnsManagedZonesGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DnsManagedZonesGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleIamV1Policy)
    ], DnsManagedZonesGetIamPolicyResponse.prototype, "googleIamV1Policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DnsManagedZonesGetIamPolicyResponse.prototype, "statusCode", void 0);
    return DnsManagedZonesGetIamPolicyResponse;
}(SpeakeasyBase));
export { DnsManagedZonesGetIamPolicyResponse };
