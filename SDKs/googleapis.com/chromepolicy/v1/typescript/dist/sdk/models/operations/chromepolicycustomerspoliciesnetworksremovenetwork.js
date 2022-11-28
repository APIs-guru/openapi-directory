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
var ChromepolicyCustomersPoliciesNetworksRemoveNetworkPathParams = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPoliciesNetworksRemoveNetworkPathParams, _super);
    function ChromepolicyCustomersPoliciesNetworksRemoveNetworkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesNetworksRemoveNetworkPathParams.prototype, "customer", void 0);
    return ChromepolicyCustomersPoliciesNetworksRemoveNetworkPathParams;
}(SpeakeasyBase));
export { ChromepolicyCustomersPoliciesNetworksRemoveNetworkPathParams };
var ChromepolicyCustomersPoliciesNetworksRemoveNetworkQueryParams = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPoliciesNetworksRemoveNetworkQueryParams, _super);
    function ChromepolicyCustomersPoliciesNetworksRemoveNetworkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesNetworksRemoveNetworkQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesNetworksRemoveNetworkQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesNetworksRemoveNetworkQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesNetworksRemoveNetworkQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesNetworksRemoveNetworkQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesNetworksRemoveNetworkQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesNetworksRemoveNetworkQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ChromepolicyCustomersPoliciesNetworksRemoveNetworkQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesNetworksRemoveNetworkQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesNetworksRemoveNetworkQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesNetworksRemoveNetworkQueryParams.prototype, "uploadProtocol", void 0);
    return ChromepolicyCustomersPoliciesNetworksRemoveNetworkQueryParams;
}(SpeakeasyBase));
export { ChromepolicyCustomersPoliciesNetworksRemoveNetworkQueryParams };
var ChromepolicyCustomersPoliciesNetworksRemoveNetworkSecurity = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPoliciesNetworksRemoveNetworkSecurity, _super);
    function ChromepolicyCustomersPoliciesNetworksRemoveNetworkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ChromepolicyCustomersPoliciesNetworksRemoveNetworkSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ChromepolicyCustomersPoliciesNetworksRemoveNetworkSecurity.prototype, "oauth2c", void 0);
    return ChromepolicyCustomersPoliciesNetworksRemoveNetworkSecurity;
}(SpeakeasyBase));
export { ChromepolicyCustomersPoliciesNetworksRemoveNetworkSecurity };
var ChromepolicyCustomersPoliciesNetworksRemoveNetworkRequest = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPoliciesNetworksRemoveNetworkRequest, _super);
    function ChromepolicyCustomersPoliciesNetworksRemoveNetworkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromepolicyCustomersPoliciesNetworksRemoveNetworkPathParams)
    ], ChromepolicyCustomersPoliciesNetworksRemoveNetworkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromepolicyCustomersPoliciesNetworksRemoveNetworkQueryParams)
    ], ChromepolicyCustomersPoliciesNetworksRemoveNetworkRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleChromePolicyVersionsV1RemoveNetworkRequest)
    ], ChromepolicyCustomersPoliciesNetworksRemoveNetworkRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromepolicyCustomersPoliciesNetworksRemoveNetworkSecurity)
    ], ChromepolicyCustomersPoliciesNetworksRemoveNetworkRequest.prototype, "security", void 0);
    return ChromepolicyCustomersPoliciesNetworksRemoveNetworkRequest;
}(SpeakeasyBase));
export { ChromepolicyCustomersPoliciesNetworksRemoveNetworkRequest };
var ChromepolicyCustomersPoliciesNetworksRemoveNetworkResponse = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPoliciesNetworksRemoveNetworkResponse, _super);
    function ChromepolicyCustomersPoliciesNetworksRemoveNetworkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPoliciesNetworksRemoveNetworkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ChromepolicyCustomersPoliciesNetworksRemoveNetworkResponse.prototype, "googleChromePolicyVersionsV1RemoveNetworkResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ChromepolicyCustomersPoliciesNetworksRemoveNetworkResponse.prototype, "statusCode", void 0);
    return ChromepolicyCustomersPoliciesNetworksRemoveNetworkResponse;
}(SpeakeasyBase));
export { ChromepolicyCustomersPoliciesNetworksRemoveNetworkResponse };
