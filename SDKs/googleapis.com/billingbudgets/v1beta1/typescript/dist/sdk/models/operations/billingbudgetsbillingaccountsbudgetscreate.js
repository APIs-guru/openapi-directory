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
var BillingbudgetsBillingAccountsBudgetsCreatePathParams = /** @class */ (function (_super) {
    __extends(BillingbudgetsBillingAccountsBudgetsCreatePathParams, _super);
    function BillingbudgetsBillingAccountsBudgetsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsCreatePathParams.prototype, "parent", void 0);
    return BillingbudgetsBillingAccountsBudgetsCreatePathParams;
}(SpeakeasyBase));
export { BillingbudgetsBillingAccountsBudgetsCreatePathParams };
var BillingbudgetsBillingAccountsBudgetsCreateQueryParams = /** @class */ (function (_super) {
    __extends(BillingbudgetsBillingAccountsBudgetsCreateQueryParams, _super);
    function BillingbudgetsBillingAccountsBudgetsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BillingbudgetsBillingAccountsBudgetsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return BillingbudgetsBillingAccountsBudgetsCreateQueryParams;
}(SpeakeasyBase));
export { BillingbudgetsBillingAccountsBudgetsCreateQueryParams };
var BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1, _super);
    function BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1;
}(SpeakeasyBase));
export { BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1 };
var BillingbudgetsBillingAccountsBudgetsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(BillingbudgetsBillingAccountsBudgetsCreateSecurityOption2, _super);
    function BillingbudgetsBillingAccountsBudgetsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BillingbudgetsBillingAccountsBudgetsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BillingbudgetsBillingAccountsBudgetsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return BillingbudgetsBillingAccountsBudgetsCreateSecurityOption2;
}(SpeakeasyBase));
export { BillingbudgetsBillingAccountsBudgetsCreateSecurityOption2 };
var BillingbudgetsBillingAccountsBudgetsCreateSecurity = /** @class */ (function (_super) {
    __extends(BillingbudgetsBillingAccountsBudgetsCreateSecurity, _super);
    function BillingbudgetsBillingAccountsBudgetsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1)
    ], BillingbudgetsBillingAccountsBudgetsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BillingbudgetsBillingAccountsBudgetsCreateSecurityOption2)
    ], BillingbudgetsBillingAccountsBudgetsCreateSecurity.prototype, "option2", void 0);
    return BillingbudgetsBillingAccountsBudgetsCreateSecurity;
}(SpeakeasyBase));
export { BillingbudgetsBillingAccountsBudgetsCreateSecurity };
var BillingbudgetsBillingAccountsBudgetsCreateRequest = /** @class */ (function (_super) {
    __extends(BillingbudgetsBillingAccountsBudgetsCreateRequest, _super);
    function BillingbudgetsBillingAccountsBudgetsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BillingbudgetsBillingAccountsBudgetsCreatePathParams)
    ], BillingbudgetsBillingAccountsBudgetsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BillingbudgetsBillingAccountsBudgetsCreateQueryParams)
    ], BillingbudgetsBillingAccountsBudgetsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput)
    ], BillingbudgetsBillingAccountsBudgetsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BillingbudgetsBillingAccountsBudgetsCreateSecurity)
    ], BillingbudgetsBillingAccountsBudgetsCreateRequest.prototype, "security", void 0);
    return BillingbudgetsBillingAccountsBudgetsCreateRequest;
}(SpeakeasyBase));
export { BillingbudgetsBillingAccountsBudgetsCreateRequest };
var BillingbudgetsBillingAccountsBudgetsCreateResponse = /** @class */ (function (_super) {
    __extends(BillingbudgetsBillingAccountsBudgetsCreateResponse, _super);
    function BillingbudgetsBillingAccountsBudgetsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudBillingBudgetsV1beta1Budget)
    ], BillingbudgetsBillingAccountsBudgetsCreateResponse.prototype, "googleCloudBillingBudgetsV1beta1Budget", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BillingbudgetsBillingAccountsBudgetsCreateResponse.prototype, "statusCode", void 0);
    return BillingbudgetsBillingAccountsBudgetsCreateResponse;
}(SpeakeasyBase));
export { BillingbudgetsBillingAccountsBudgetsCreateResponse };
