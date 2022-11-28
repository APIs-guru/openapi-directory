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
var ChromepolicyCustomersPoliciesGroupsBatchModifyPathParams = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPoliciesGroupsBatchModifyPathParams, _super);
    function ChromepolicyCustomersPoliciesGroupsBatchModifyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesGroupsBatchModifyPathParams.prototype, "customer", void 0);
    return ChromepolicyCustomersPoliciesGroupsBatchModifyPathParams;
}(SpeakeasyBase));
export { ChromepolicyCustomersPoliciesGroupsBatchModifyPathParams };
var ChromepolicyCustomersPoliciesGroupsBatchModifyQueryParams = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPoliciesGroupsBatchModifyQueryParams, _super);
    function ChromepolicyCustomersPoliciesGroupsBatchModifyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesGroupsBatchModifyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesGroupsBatchModifyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesGroupsBatchModifyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesGroupsBatchModifyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesGroupsBatchModifyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesGroupsBatchModifyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesGroupsBatchModifyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ChromepolicyCustomersPoliciesGroupsBatchModifyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesGroupsBatchModifyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesGroupsBatchModifyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesGroupsBatchModifyQueryParams.prototype, "uploadProtocol", void 0);
    return ChromepolicyCustomersPoliciesGroupsBatchModifyQueryParams;
}(SpeakeasyBase));
export { ChromepolicyCustomersPoliciesGroupsBatchModifyQueryParams };
var ChromepolicyCustomersPoliciesGroupsBatchModifySecurity = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPoliciesGroupsBatchModifySecurity, _super);
    function ChromepolicyCustomersPoliciesGroupsBatchModifySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ChromepolicyCustomersPoliciesGroupsBatchModifySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ChromepolicyCustomersPoliciesGroupsBatchModifySecurity.prototype, "oauth2c", void 0);
    return ChromepolicyCustomersPoliciesGroupsBatchModifySecurity;
}(SpeakeasyBase));
export { ChromepolicyCustomersPoliciesGroupsBatchModifySecurity };
var ChromepolicyCustomersPoliciesGroupsBatchModifyRequest = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPoliciesGroupsBatchModifyRequest, _super);
    function ChromepolicyCustomersPoliciesGroupsBatchModifyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromepolicyCustomersPoliciesGroupsBatchModifyPathParams)
    ], ChromepolicyCustomersPoliciesGroupsBatchModifyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromepolicyCustomersPoliciesGroupsBatchModifyQueryParams)
    ], ChromepolicyCustomersPoliciesGroupsBatchModifyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequest)
    ], ChromepolicyCustomersPoliciesGroupsBatchModifyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromepolicyCustomersPoliciesGroupsBatchModifySecurity)
    ], ChromepolicyCustomersPoliciesGroupsBatchModifyRequest.prototype, "security", void 0);
    return ChromepolicyCustomersPoliciesGroupsBatchModifyRequest;
}(SpeakeasyBase));
export { ChromepolicyCustomersPoliciesGroupsBatchModifyRequest };
var ChromepolicyCustomersPoliciesGroupsBatchModifyResponse = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPoliciesGroupsBatchModifyResponse, _super);
    function ChromepolicyCustomersPoliciesGroupsBatchModifyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesGroupsBatchModifyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ChromepolicyCustomersPoliciesGroupsBatchModifyResponse.prototype, "googleProtobufEmpty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ChromepolicyCustomersPoliciesGroupsBatchModifyResponse.prototype, "statusCode", void 0);
    return ChromepolicyCustomersPoliciesGroupsBatchModifyResponse;
}(SpeakeasyBase));
export { ChromepolicyCustomersPoliciesGroupsBatchModifyResponse };
