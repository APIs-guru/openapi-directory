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
var CloudbillingEstimateCostScenarioQueryParams = /** @class */ (function (_super) {
    __extends(CloudbillingEstimateCostScenarioQueryParams, _super);
    function CloudbillingEstimateCostScenarioQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudbillingEstimateCostScenarioQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudbillingEstimateCostScenarioQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudbillingEstimateCostScenarioQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudbillingEstimateCostScenarioQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudbillingEstimateCostScenarioQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudbillingEstimateCostScenarioQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudbillingEstimateCostScenarioQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudbillingEstimateCostScenarioQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudbillingEstimateCostScenarioQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudbillingEstimateCostScenarioQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudbillingEstimateCostScenarioQueryParams.prototype, "uploadProtocol", void 0);
    return CloudbillingEstimateCostScenarioQueryParams;
}(SpeakeasyBase));
export { CloudbillingEstimateCostScenarioQueryParams };
var CloudbillingEstimateCostScenarioSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudbillingEstimateCostScenarioSecurityOption1, _super);
    function CloudbillingEstimateCostScenarioSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingEstimateCostScenarioSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingEstimateCostScenarioSecurityOption1.prototype, "oauth2c", void 0);
    return CloudbillingEstimateCostScenarioSecurityOption1;
}(SpeakeasyBase));
export { CloudbillingEstimateCostScenarioSecurityOption1 };
var CloudbillingEstimateCostScenarioSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudbillingEstimateCostScenarioSecurityOption2, _super);
    function CloudbillingEstimateCostScenarioSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingEstimateCostScenarioSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingEstimateCostScenarioSecurityOption2.prototype, "oauth2c", void 0);
    return CloudbillingEstimateCostScenarioSecurityOption2;
}(SpeakeasyBase));
export { CloudbillingEstimateCostScenarioSecurityOption2 };
var CloudbillingEstimateCostScenarioSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudbillingEstimateCostScenarioSecurityOption3, _super);
    function CloudbillingEstimateCostScenarioSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingEstimateCostScenarioSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingEstimateCostScenarioSecurityOption3.prototype, "oauth2c", void 0);
    return CloudbillingEstimateCostScenarioSecurityOption3;
}(SpeakeasyBase));
export { CloudbillingEstimateCostScenarioSecurityOption3 };
var CloudbillingEstimateCostScenarioSecurity = /** @class */ (function (_super) {
    __extends(CloudbillingEstimateCostScenarioSecurity, _super);
    function CloudbillingEstimateCostScenarioSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingEstimateCostScenarioSecurityOption1)
    ], CloudbillingEstimateCostScenarioSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingEstimateCostScenarioSecurityOption2)
    ], CloudbillingEstimateCostScenarioSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingEstimateCostScenarioSecurityOption3)
    ], CloudbillingEstimateCostScenarioSecurity.prototype, "option3", void 0);
    return CloudbillingEstimateCostScenarioSecurity;
}(SpeakeasyBase));
export { CloudbillingEstimateCostScenarioSecurity };
var CloudbillingEstimateCostScenarioRequest = /** @class */ (function (_super) {
    __extends(CloudbillingEstimateCostScenarioRequest, _super);
    function CloudbillingEstimateCostScenarioRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbillingEstimateCostScenarioQueryParams)
    ], CloudbillingEstimateCostScenarioRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.EstimateCostScenarioWithListPriceRequest)
    ], CloudbillingEstimateCostScenarioRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbillingEstimateCostScenarioSecurity)
    ], CloudbillingEstimateCostScenarioRequest.prototype, "security", void 0);
    return CloudbillingEstimateCostScenarioRequest;
}(SpeakeasyBase));
export { CloudbillingEstimateCostScenarioRequest };
var CloudbillingEstimateCostScenarioResponse = /** @class */ (function (_super) {
    __extends(CloudbillingEstimateCostScenarioResponse, _super);
    function CloudbillingEstimateCostScenarioResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudbillingEstimateCostScenarioResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EstimateCostScenarioWithListPriceResponse)
    ], CloudbillingEstimateCostScenarioResponse.prototype, "estimateCostScenarioWithListPriceResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudbillingEstimateCostScenarioResponse.prototype, "statusCode", void 0);
    return CloudbillingEstimateCostScenarioResponse;
}(SpeakeasyBase));
export { CloudbillingEstimateCostScenarioResponse };
