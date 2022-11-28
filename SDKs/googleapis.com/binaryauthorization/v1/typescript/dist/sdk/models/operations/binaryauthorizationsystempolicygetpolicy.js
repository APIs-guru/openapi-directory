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
var BinaryauthorizationSystempolicyGetPolicyPathParams = /** @class */ (function (_super) {
    __extends(BinaryauthorizationSystempolicyGetPolicyPathParams, _super);
    function BinaryauthorizationSystempolicyGetPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BinaryauthorizationSystempolicyGetPolicyPathParams.prototype, "name", void 0);
    return BinaryauthorizationSystempolicyGetPolicyPathParams;
}(SpeakeasyBase));
export { BinaryauthorizationSystempolicyGetPolicyPathParams };
var BinaryauthorizationSystempolicyGetPolicyQueryParams = /** @class */ (function (_super) {
    __extends(BinaryauthorizationSystempolicyGetPolicyQueryParams, _super);
    function BinaryauthorizationSystempolicyGetPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BinaryauthorizationSystempolicyGetPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BinaryauthorizationSystempolicyGetPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BinaryauthorizationSystempolicyGetPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BinaryauthorizationSystempolicyGetPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BinaryauthorizationSystempolicyGetPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BinaryauthorizationSystempolicyGetPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BinaryauthorizationSystempolicyGetPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BinaryauthorizationSystempolicyGetPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BinaryauthorizationSystempolicyGetPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BinaryauthorizationSystempolicyGetPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BinaryauthorizationSystempolicyGetPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return BinaryauthorizationSystempolicyGetPolicyQueryParams;
}(SpeakeasyBase));
export { BinaryauthorizationSystempolicyGetPolicyQueryParams };
var BinaryauthorizationSystempolicyGetPolicySecurity = /** @class */ (function (_super) {
    __extends(BinaryauthorizationSystempolicyGetPolicySecurity, _super);
    function BinaryauthorizationSystempolicyGetPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BinaryauthorizationSystempolicyGetPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BinaryauthorizationSystempolicyGetPolicySecurity.prototype, "oauth2c", void 0);
    return BinaryauthorizationSystempolicyGetPolicySecurity;
}(SpeakeasyBase));
export { BinaryauthorizationSystempolicyGetPolicySecurity };
var BinaryauthorizationSystempolicyGetPolicyRequest = /** @class */ (function (_super) {
    __extends(BinaryauthorizationSystempolicyGetPolicyRequest, _super);
    function BinaryauthorizationSystempolicyGetPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BinaryauthorizationSystempolicyGetPolicyPathParams)
    ], BinaryauthorizationSystempolicyGetPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BinaryauthorizationSystempolicyGetPolicyQueryParams)
    ], BinaryauthorizationSystempolicyGetPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BinaryauthorizationSystempolicyGetPolicySecurity)
    ], BinaryauthorizationSystempolicyGetPolicyRequest.prototype, "security", void 0);
    return BinaryauthorizationSystempolicyGetPolicyRequest;
}(SpeakeasyBase));
export { BinaryauthorizationSystempolicyGetPolicyRequest };
var BinaryauthorizationSystempolicyGetPolicyResponse = /** @class */ (function (_super) {
    __extends(BinaryauthorizationSystempolicyGetPolicyResponse, _super);
    function BinaryauthorizationSystempolicyGetPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BinaryauthorizationSystempolicyGetPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], BinaryauthorizationSystempolicyGetPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BinaryauthorizationSystempolicyGetPolicyResponse.prototype, "statusCode", void 0);
    return BinaryauthorizationSystempolicyGetPolicyResponse;
}(SpeakeasyBase));
export { BinaryauthorizationSystempolicyGetPolicyResponse };
