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
var ChromepolicyCustomersPoliciesOrgunitsBatchInheritPathParams = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPoliciesOrgunitsBatchInheritPathParams, _super);
    function ChromepolicyCustomersPoliciesOrgunitsBatchInheritPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchInheritPathParams.prototype, "customer", void 0);
    return ChromepolicyCustomersPoliciesOrgunitsBatchInheritPathParams;
}(SpeakeasyBase));
export { ChromepolicyCustomersPoliciesOrgunitsBatchInheritPathParams };
var ChromepolicyCustomersPoliciesOrgunitsBatchInheritQueryParams = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPoliciesOrgunitsBatchInheritQueryParams, _super);
    function ChromepolicyCustomersPoliciesOrgunitsBatchInheritQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchInheritQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchInheritQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchInheritQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchInheritQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchInheritQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchInheritQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchInheritQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchInheritQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchInheritQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchInheritQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchInheritQueryParams.prototype, "uploadProtocol", void 0);
    return ChromepolicyCustomersPoliciesOrgunitsBatchInheritQueryParams;
}(SpeakeasyBase));
export { ChromepolicyCustomersPoliciesOrgunitsBatchInheritQueryParams };
var ChromepolicyCustomersPoliciesOrgunitsBatchInheritSecurity = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPoliciesOrgunitsBatchInheritSecurity, _super);
    function ChromepolicyCustomersPoliciesOrgunitsBatchInheritSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchInheritSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchInheritSecurity.prototype, "oauth2c", void 0);
    return ChromepolicyCustomersPoliciesOrgunitsBatchInheritSecurity;
}(SpeakeasyBase));
export { ChromepolicyCustomersPoliciesOrgunitsBatchInheritSecurity };
var ChromepolicyCustomersPoliciesOrgunitsBatchInheritRequest = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPoliciesOrgunitsBatchInheritRequest, _super);
    function ChromepolicyCustomersPoliciesOrgunitsBatchInheritRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromepolicyCustomersPoliciesOrgunitsBatchInheritPathParams)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchInheritRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromepolicyCustomersPoliciesOrgunitsBatchInheritQueryParams)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchInheritRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequest)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchInheritRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromepolicyCustomersPoliciesOrgunitsBatchInheritSecurity)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchInheritRequest.prototype, "security", void 0);
    return ChromepolicyCustomersPoliciesOrgunitsBatchInheritRequest;
}(SpeakeasyBase));
export { ChromepolicyCustomersPoliciesOrgunitsBatchInheritRequest };
var ChromepolicyCustomersPoliciesOrgunitsBatchInheritResponse = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPoliciesOrgunitsBatchInheritResponse, _super);
    function ChromepolicyCustomersPoliciesOrgunitsBatchInheritResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchInheritResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchInheritResponse.prototype, "googleProtobufEmpty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchInheritResponse.prototype, "statusCode", void 0);
    return ChromepolicyCustomersPoliciesOrgunitsBatchInheritResponse;
}(SpeakeasyBase));
export { ChromepolicyCustomersPoliciesOrgunitsBatchInheritResponse };
