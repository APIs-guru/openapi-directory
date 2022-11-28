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
var DnsManagedZonesSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(DnsManagedZonesSetIamPolicyPathParams, _super);
    function DnsManagedZonesSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], DnsManagedZonesSetIamPolicyPathParams.prototype, "resource", void 0);
    return DnsManagedZonesSetIamPolicyPathParams;
}(SpeakeasyBase));
export { DnsManagedZonesSetIamPolicyPathParams };
var DnsManagedZonesSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(DnsManagedZonesSetIamPolicyQueryParams, _super);
    function DnsManagedZonesSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DnsManagedZonesSetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DnsManagedZonesSetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DnsManagedZonesSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DnsManagedZonesSetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DnsManagedZonesSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DnsManagedZonesSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DnsManagedZonesSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DnsManagedZonesSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DnsManagedZonesSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DnsManagedZonesSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DnsManagedZonesSetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return DnsManagedZonesSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { DnsManagedZonesSetIamPolicyQueryParams };
var DnsManagedZonesSetIamPolicySecurityOption1 = /** @class */ (function (_super) {
    __extends(DnsManagedZonesSetIamPolicySecurityOption1, _super);
    function DnsManagedZonesSetIamPolicySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsManagedZonesSetIamPolicySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsManagedZonesSetIamPolicySecurityOption1.prototype, "oauth2c", void 0);
    return DnsManagedZonesSetIamPolicySecurityOption1;
}(SpeakeasyBase));
export { DnsManagedZonesSetIamPolicySecurityOption1 };
var DnsManagedZonesSetIamPolicySecurityOption2 = /** @class */ (function (_super) {
    __extends(DnsManagedZonesSetIamPolicySecurityOption2, _super);
    function DnsManagedZonesSetIamPolicySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsManagedZonesSetIamPolicySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsManagedZonesSetIamPolicySecurityOption2.prototype, "oauth2c", void 0);
    return DnsManagedZonesSetIamPolicySecurityOption2;
}(SpeakeasyBase));
export { DnsManagedZonesSetIamPolicySecurityOption2 };
var DnsManagedZonesSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(DnsManagedZonesSetIamPolicySecurity, _super);
    function DnsManagedZonesSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsManagedZonesSetIamPolicySecurityOption1)
    ], DnsManagedZonesSetIamPolicySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsManagedZonesSetIamPolicySecurityOption2)
    ], DnsManagedZonesSetIamPolicySecurity.prototype, "option2", void 0);
    return DnsManagedZonesSetIamPolicySecurity;
}(SpeakeasyBase));
export { DnsManagedZonesSetIamPolicySecurity };
var DnsManagedZonesSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(DnsManagedZonesSetIamPolicyRequest, _super);
    function DnsManagedZonesSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsManagedZonesSetIamPolicyPathParams)
    ], DnsManagedZonesSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsManagedZonesSetIamPolicyQueryParams)
    ], DnsManagedZonesSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleIamV1SetIamPolicyRequest)
    ], DnsManagedZonesSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsManagedZonesSetIamPolicySecurity)
    ], DnsManagedZonesSetIamPolicyRequest.prototype, "security", void 0);
    return DnsManagedZonesSetIamPolicyRequest;
}(SpeakeasyBase));
export { DnsManagedZonesSetIamPolicyRequest };
var DnsManagedZonesSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(DnsManagedZonesSetIamPolicyResponse, _super);
    function DnsManagedZonesSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DnsManagedZonesSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleIamV1Policy)
    ], DnsManagedZonesSetIamPolicyResponse.prototype, "googleIamV1Policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DnsManagedZonesSetIamPolicyResponse.prototype, "statusCode", void 0);
    return DnsManagedZonesSetIamPolicyResponse;
}(SpeakeasyBase));
export { DnsManagedZonesSetIamPolicyResponse };
