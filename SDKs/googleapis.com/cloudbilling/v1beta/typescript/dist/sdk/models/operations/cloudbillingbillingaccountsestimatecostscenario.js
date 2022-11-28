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
var CloudbillingBillingAccountsEstimateCostScenarioPathParams = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsEstimateCostScenarioPathParams, _super);
    function CloudbillingBillingAccountsEstimateCostScenarioPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billingAccount" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsEstimateCostScenarioPathParams.prototype, "billingAccount", void 0);
    return CloudbillingBillingAccountsEstimateCostScenarioPathParams;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsEstimateCostScenarioPathParams };
var CloudbillingBillingAccountsEstimateCostScenarioQueryParams = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsEstimateCostScenarioQueryParams, _super);
    function CloudbillingBillingAccountsEstimateCostScenarioQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsEstimateCostScenarioQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsEstimateCostScenarioQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsEstimateCostScenarioQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsEstimateCostScenarioQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsEstimateCostScenarioQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsEstimateCostScenarioQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsEstimateCostScenarioQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudbillingBillingAccountsEstimateCostScenarioQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsEstimateCostScenarioQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsEstimateCostScenarioQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsEstimateCostScenarioQueryParams.prototype, "uploadProtocol", void 0);
    return CloudbillingBillingAccountsEstimateCostScenarioQueryParams;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsEstimateCostScenarioQueryParams };
var CloudbillingBillingAccountsEstimateCostScenarioSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsEstimateCostScenarioSecurityOption1, _super);
    function CloudbillingBillingAccountsEstimateCostScenarioSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingBillingAccountsEstimateCostScenarioSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingBillingAccountsEstimateCostScenarioSecurityOption1.prototype, "oauth2c", void 0);
    return CloudbillingBillingAccountsEstimateCostScenarioSecurityOption1;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsEstimateCostScenarioSecurityOption1 };
var CloudbillingBillingAccountsEstimateCostScenarioSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsEstimateCostScenarioSecurityOption2, _super);
    function CloudbillingBillingAccountsEstimateCostScenarioSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingBillingAccountsEstimateCostScenarioSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingBillingAccountsEstimateCostScenarioSecurityOption2.prototype, "oauth2c", void 0);
    return CloudbillingBillingAccountsEstimateCostScenarioSecurityOption2;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsEstimateCostScenarioSecurityOption2 };
var CloudbillingBillingAccountsEstimateCostScenarioSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsEstimateCostScenarioSecurityOption3, _super);
    function CloudbillingBillingAccountsEstimateCostScenarioSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingBillingAccountsEstimateCostScenarioSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingBillingAccountsEstimateCostScenarioSecurityOption3.prototype, "oauth2c", void 0);
    return CloudbillingBillingAccountsEstimateCostScenarioSecurityOption3;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsEstimateCostScenarioSecurityOption3 };
var CloudbillingBillingAccountsEstimateCostScenarioSecurity = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsEstimateCostScenarioSecurity, _super);
    function CloudbillingBillingAccountsEstimateCostScenarioSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingBillingAccountsEstimateCostScenarioSecurityOption1)
    ], CloudbillingBillingAccountsEstimateCostScenarioSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingBillingAccountsEstimateCostScenarioSecurityOption2)
    ], CloudbillingBillingAccountsEstimateCostScenarioSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingBillingAccountsEstimateCostScenarioSecurityOption3)
    ], CloudbillingBillingAccountsEstimateCostScenarioSecurity.prototype, "option3", void 0);
    return CloudbillingBillingAccountsEstimateCostScenarioSecurity;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsEstimateCostScenarioSecurity };
var CloudbillingBillingAccountsEstimateCostScenarioRequest = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsEstimateCostScenarioRequest, _super);
    function CloudbillingBillingAccountsEstimateCostScenarioRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbillingBillingAccountsEstimateCostScenarioPathParams)
    ], CloudbillingBillingAccountsEstimateCostScenarioRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbillingBillingAccountsEstimateCostScenarioQueryParams)
    ], CloudbillingBillingAccountsEstimateCostScenarioRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.EstimateCostScenarioForBillingAccountRequest)
    ], CloudbillingBillingAccountsEstimateCostScenarioRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbillingBillingAccountsEstimateCostScenarioSecurity)
    ], CloudbillingBillingAccountsEstimateCostScenarioRequest.prototype, "security", void 0);
    return CloudbillingBillingAccountsEstimateCostScenarioRequest;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsEstimateCostScenarioRequest };
var CloudbillingBillingAccountsEstimateCostScenarioResponse = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsEstimateCostScenarioResponse, _super);
    function CloudbillingBillingAccountsEstimateCostScenarioResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsEstimateCostScenarioResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EstimateCostScenarioForBillingAccountResponse)
    ], CloudbillingBillingAccountsEstimateCostScenarioResponse.prototype, "estimateCostScenarioForBillingAccountResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudbillingBillingAccountsEstimateCostScenarioResponse.prototype, "statusCode", void 0);
    return CloudbillingBillingAccountsEstimateCostScenarioResponse;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsEstimateCostScenarioResponse };
