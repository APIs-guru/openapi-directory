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
var ChromepolicyCustomersPoliciesResolvePathParams = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPoliciesResolvePathParams, _super);
    function ChromepolicyCustomersPoliciesResolvePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesResolvePathParams.prototype, "customer", void 0);
    return ChromepolicyCustomersPoliciesResolvePathParams;
}(SpeakeasyBase));
export { ChromepolicyCustomersPoliciesResolvePathParams };
var ChromepolicyCustomersPoliciesResolveQueryParams = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPoliciesResolveQueryParams, _super);
    function ChromepolicyCustomersPoliciesResolveQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesResolveQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesResolveQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesResolveQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesResolveQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesResolveQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesResolveQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesResolveQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ChromepolicyCustomersPoliciesResolveQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesResolveQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesResolveQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesResolveQueryParams.prototype, "uploadProtocol", void 0);
    return ChromepolicyCustomersPoliciesResolveQueryParams;
}(SpeakeasyBase));
export { ChromepolicyCustomersPoliciesResolveQueryParams };
var ChromepolicyCustomersPoliciesResolveSecurityOption1 = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPoliciesResolveSecurityOption1, _super);
    function ChromepolicyCustomersPoliciesResolveSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ChromepolicyCustomersPoliciesResolveSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ChromepolicyCustomersPoliciesResolveSecurityOption1.prototype, "oauth2c", void 0);
    return ChromepolicyCustomersPoliciesResolveSecurityOption1;
}(SpeakeasyBase));
export { ChromepolicyCustomersPoliciesResolveSecurityOption1 };
var ChromepolicyCustomersPoliciesResolveSecurityOption2 = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPoliciesResolveSecurityOption2, _super);
    function ChromepolicyCustomersPoliciesResolveSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ChromepolicyCustomersPoliciesResolveSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ChromepolicyCustomersPoliciesResolveSecurityOption2.prototype, "oauth2c", void 0);
    return ChromepolicyCustomersPoliciesResolveSecurityOption2;
}(SpeakeasyBase));
export { ChromepolicyCustomersPoliciesResolveSecurityOption2 };
var ChromepolicyCustomersPoliciesResolveSecurity = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPoliciesResolveSecurity, _super);
    function ChromepolicyCustomersPoliciesResolveSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ChromepolicyCustomersPoliciesResolveSecurityOption1)
    ], ChromepolicyCustomersPoliciesResolveSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ChromepolicyCustomersPoliciesResolveSecurityOption2)
    ], ChromepolicyCustomersPoliciesResolveSecurity.prototype, "option2", void 0);
    return ChromepolicyCustomersPoliciesResolveSecurity;
}(SpeakeasyBase));
export { ChromepolicyCustomersPoliciesResolveSecurity };
var ChromepolicyCustomersPoliciesResolveRequest = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPoliciesResolveRequest, _super);
    function ChromepolicyCustomersPoliciesResolveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromepolicyCustomersPoliciesResolvePathParams)
    ], ChromepolicyCustomersPoliciesResolveRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromepolicyCustomersPoliciesResolveQueryParams)
    ], ChromepolicyCustomersPoliciesResolveRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleChromePolicyVersionsV1ResolveRequest)
    ], ChromepolicyCustomersPoliciesResolveRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromepolicyCustomersPoliciesResolveSecurity)
    ], ChromepolicyCustomersPoliciesResolveRequest.prototype, "security", void 0);
    return ChromepolicyCustomersPoliciesResolveRequest;
}(SpeakeasyBase));
export { ChromepolicyCustomersPoliciesResolveRequest };
var ChromepolicyCustomersPoliciesResolveResponse = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPoliciesResolveResponse, _super);
    function ChromepolicyCustomersPoliciesResolveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesResolveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleChromePolicyVersionsV1ResolveResponse)
    ], ChromepolicyCustomersPoliciesResolveResponse.prototype, "googleChromePolicyVersionsV1ResolveResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ChromepolicyCustomersPoliciesResolveResponse.prototype, "statusCode", void 0);
    return ChromepolicyCustomersPoliciesResolveResponse;
}(SpeakeasyBase));
export { ChromepolicyCustomersPoliciesResolveResponse };
