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
var BillingbudgetsBillingAccountsBudgetsPatchPathParams = /** @class */ (function (_super) {
    __extends(BillingbudgetsBillingAccountsBudgetsPatchPathParams, _super);
    function BillingbudgetsBillingAccountsBudgetsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsPatchPathParams.prototype, "name", void 0);
    return BillingbudgetsBillingAccountsBudgetsPatchPathParams;
}(SpeakeasyBase));
export { BillingbudgetsBillingAccountsBudgetsPatchPathParams };
var BillingbudgetsBillingAccountsBudgetsPatchQueryParams = /** @class */ (function (_super) {
    __extends(BillingbudgetsBillingAccountsBudgetsPatchQueryParams, _super);
    function BillingbudgetsBillingAccountsBudgetsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BillingbudgetsBillingAccountsBudgetsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return BillingbudgetsBillingAccountsBudgetsPatchQueryParams;
}(SpeakeasyBase));
export { BillingbudgetsBillingAccountsBudgetsPatchQueryParams };
var BillingbudgetsBillingAccountsBudgetsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(BillingbudgetsBillingAccountsBudgetsPatchSecurityOption1, _super);
    function BillingbudgetsBillingAccountsBudgetsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BillingbudgetsBillingAccountsBudgetsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BillingbudgetsBillingAccountsBudgetsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return BillingbudgetsBillingAccountsBudgetsPatchSecurityOption1;
}(SpeakeasyBase));
export { BillingbudgetsBillingAccountsBudgetsPatchSecurityOption1 };
var BillingbudgetsBillingAccountsBudgetsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(BillingbudgetsBillingAccountsBudgetsPatchSecurityOption2, _super);
    function BillingbudgetsBillingAccountsBudgetsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BillingbudgetsBillingAccountsBudgetsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BillingbudgetsBillingAccountsBudgetsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return BillingbudgetsBillingAccountsBudgetsPatchSecurityOption2;
}(SpeakeasyBase));
export { BillingbudgetsBillingAccountsBudgetsPatchSecurityOption2 };
var BillingbudgetsBillingAccountsBudgetsPatchSecurity = /** @class */ (function (_super) {
    __extends(BillingbudgetsBillingAccountsBudgetsPatchSecurity, _super);
    function BillingbudgetsBillingAccountsBudgetsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BillingbudgetsBillingAccountsBudgetsPatchSecurityOption1)
    ], BillingbudgetsBillingAccountsBudgetsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BillingbudgetsBillingAccountsBudgetsPatchSecurityOption2)
    ], BillingbudgetsBillingAccountsBudgetsPatchSecurity.prototype, "option2", void 0);
    return BillingbudgetsBillingAccountsBudgetsPatchSecurity;
}(SpeakeasyBase));
export { BillingbudgetsBillingAccountsBudgetsPatchSecurity };
var BillingbudgetsBillingAccountsBudgetsPatchRequest = /** @class */ (function (_super) {
    __extends(BillingbudgetsBillingAccountsBudgetsPatchRequest, _super);
    function BillingbudgetsBillingAccountsBudgetsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BillingbudgetsBillingAccountsBudgetsPatchPathParams)
    ], BillingbudgetsBillingAccountsBudgetsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BillingbudgetsBillingAccountsBudgetsPatchQueryParams)
    ], BillingbudgetsBillingAccountsBudgetsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput)
    ], BillingbudgetsBillingAccountsBudgetsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BillingbudgetsBillingAccountsBudgetsPatchSecurity)
    ], BillingbudgetsBillingAccountsBudgetsPatchRequest.prototype, "security", void 0);
    return BillingbudgetsBillingAccountsBudgetsPatchRequest;
}(SpeakeasyBase));
export { BillingbudgetsBillingAccountsBudgetsPatchRequest };
var BillingbudgetsBillingAccountsBudgetsPatchResponse = /** @class */ (function (_super) {
    __extends(BillingbudgetsBillingAccountsBudgetsPatchResponse, _super);
    function BillingbudgetsBillingAccountsBudgetsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudBillingBudgetsV1beta1Budget)
    ], BillingbudgetsBillingAccountsBudgetsPatchResponse.prototype, "googleCloudBillingBudgetsV1beta1Budget", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BillingbudgetsBillingAccountsBudgetsPatchResponse.prototype, "statusCode", void 0);
    return BillingbudgetsBillingAccountsBudgetsPatchResponse;
}(SpeakeasyBase));
export { BillingbudgetsBillingAccountsBudgetsPatchResponse };
