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
var ChromepolicyCustomersPoliciesOrgunitsBatchModifyPathParams = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPoliciesOrgunitsBatchModifyPathParams, _super);
    function ChromepolicyCustomersPoliciesOrgunitsBatchModifyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchModifyPathParams.prototype, "customer", void 0);
    return ChromepolicyCustomersPoliciesOrgunitsBatchModifyPathParams;
}(SpeakeasyBase));
export { ChromepolicyCustomersPoliciesOrgunitsBatchModifyPathParams };
var ChromepolicyCustomersPoliciesOrgunitsBatchModifyQueryParams = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPoliciesOrgunitsBatchModifyQueryParams, _super);
    function ChromepolicyCustomersPoliciesOrgunitsBatchModifyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchModifyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchModifyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchModifyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchModifyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchModifyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchModifyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchModifyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchModifyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchModifyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchModifyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchModifyQueryParams.prototype, "uploadProtocol", void 0);
    return ChromepolicyCustomersPoliciesOrgunitsBatchModifyQueryParams;
}(SpeakeasyBase));
export { ChromepolicyCustomersPoliciesOrgunitsBatchModifyQueryParams };
var ChromepolicyCustomersPoliciesOrgunitsBatchModifySecurity = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPoliciesOrgunitsBatchModifySecurity, _super);
    function ChromepolicyCustomersPoliciesOrgunitsBatchModifySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchModifySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchModifySecurity.prototype, "oauth2c", void 0);
    return ChromepolicyCustomersPoliciesOrgunitsBatchModifySecurity;
}(SpeakeasyBase));
export { ChromepolicyCustomersPoliciesOrgunitsBatchModifySecurity };
var ChromepolicyCustomersPoliciesOrgunitsBatchModifyRequest = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPoliciesOrgunitsBatchModifyRequest, _super);
    function ChromepolicyCustomersPoliciesOrgunitsBatchModifyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromepolicyCustomersPoliciesOrgunitsBatchModifyPathParams)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchModifyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromepolicyCustomersPoliciesOrgunitsBatchModifyQueryParams)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchModifyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchModifyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromepolicyCustomersPoliciesOrgunitsBatchModifySecurity)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchModifyRequest.prototype, "security", void 0);
    return ChromepolicyCustomersPoliciesOrgunitsBatchModifyRequest;
}(SpeakeasyBase));
export { ChromepolicyCustomersPoliciesOrgunitsBatchModifyRequest };
var ChromepolicyCustomersPoliciesOrgunitsBatchModifyResponse = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPoliciesOrgunitsBatchModifyResponse, _super);
    function ChromepolicyCustomersPoliciesOrgunitsBatchModifyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchModifyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchModifyResponse.prototype, "googleProtobufEmpty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ChromepolicyCustomersPoliciesOrgunitsBatchModifyResponse.prototype, "statusCode", void 0);
    return ChromepolicyCustomersPoliciesOrgunitsBatchModifyResponse;
}(SpeakeasyBase));
export { ChromepolicyCustomersPoliciesOrgunitsBatchModifyResponse };
