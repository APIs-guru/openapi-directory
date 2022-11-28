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
var BillingbudgetsBillingAccountsBudgetsListPathParams = /** @class */ (function (_super) {
    __extends(BillingbudgetsBillingAccountsBudgetsListPathParams, _super);
    function BillingbudgetsBillingAccountsBudgetsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsListPathParams.prototype, "parent", void 0);
    return BillingbudgetsBillingAccountsBudgetsListPathParams;
}(SpeakeasyBase));
export { BillingbudgetsBillingAccountsBudgetsListPathParams };
var BillingbudgetsBillingAccountsBudgetsListQueryParams = /** @class */ (function (_super) {
    __extends(BillingbudgetsBillingAccountsBudgetsListQueryParams, _super);
    function BillingbudgetsBillingAccountsBudgetsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], BillingbudgetsBillingAccountsBudgetsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BillingbudgetsBillingAccountsBudgetsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsListQueryParams.prototype, "uploadProtocol", void 0);
    return BillingbudgetsBillingAccountsBudgetsListQueryParams;
}(SpeakeasyBase));
export { BillingbudgetsBillingAccountsBudgetsListQueryParams };
var BillingbudgetsBillingAccountsBudgetsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(BillingbudgetsBillingAccountsBudgetsListSecurityOption1, _super);
    function BillingbudgetsBillingAccountsBudgetsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BillingbudgetsBillingAccountsBudgetsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BillingbudgetsBillingAccountsBudgetsListSecurityOption1.prototype, "oauth2c", void 0);
    return BillingbudgetsBillingAccountsBudgetsListSecurityOption1;
}(SpeakeasyBase));
export { BillingbudgetsBillingAccountsBudgetsListSecurityOption1 };
var BillingbudgetsBillingAccountsBudgetsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(BillingbudgetsBillingAccountsBudgetsListSecurityOption2, _super);
    function BillingbudgetsBillingAccountsBudgetsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BillingbudgetsBillingAccountsBudgetsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BillingbudgetsBillingAccountsBudgetsListSecurityOption2.prototype, "oauth2c", void 0);
    return BillingbudgetsBillingAccountsBudgetsListSecurityOption2;
}(SpeakeasyBase));
export { BillingbudgetsBillingAccountsBudgetsListSecurityOption2 };
var BillingbudgetsBillingAccountsBudgetsListSecurity = /** @class */ (function (_super) {
    __extends(BillingbudgetsBillingAccountsBudgetsListSecurity, _super);
    function BillingbudgetsBillingAccountsBudgetsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BillingbudgetsBillingAccountsBudgetsListSecurityOption1)
    ], BillingbudgetsBillingAccountsBudgetsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BillingbudgetsBillingAccountsBudgetsListSecurityOption2)
    ], BillingbudgetsBillingAccountsBudgetsListSecurity.prototype, "option2", void 0);
    return BillingbudgetsBillingAccountsBudgetsListSecurity;
}(SpeakeasyBase));
export { BillingbudgetsBillingAccountsBudgetsListSecurity };
var BillingbudgetsBillingAccountsBudgetsListRequest = /** @class */ (function (_super) {
    __extends(BillingbudgetsBillingAccountsBudgetsListRequest, _super);
    function BillingbudgetsBillingAccountsBudgetsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BillingbudgetsBillingAccountsBudgetsListPathParams)
    ], BillingbudgetsBillingAccountsBudgetsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BillingbudgetsBillingAccountsBudgetsListQueryParams)
    ], BillingbudgetsBillingAccountsBudgetsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BillingbudgetsBillingAccountsBudgetsListSecurity)
    ], BillingbudgetsBillingAccountsBudgetsListRequest.prototype, "security", void 0);
    return BillingbudgetsBillingAccountsBudgetsListRequest;
}(SpeakeasyBase));
export { BillingbudgetsBillingAccountsBudgetsListRequest };
var BillingbudgetsBillingAccountsBudgetsListResponse = /** @class */ (function (_super) {
    __extends(BillingbudgetsBillingAccountsBudgetsListResponse, _super);
    function BillingbudgetsBillingAccountsBudgetsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BillingbudgetsBillingAccountsBudgetsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse)
    ], BillingbudgetsBillingAccountsBudgetsListResponse.prototype, "googleCloudBillingBudgetsV1beta1ListBudgetsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BillingbudgetsBillingAccountsBudgetsListResponse.prototype, "statusCode", void 0);
    return BillingbudgetsBillingAccountsBudgetsListResponse;
}(SpeakeasyBase));
export { BillingbudgetsBillingAccountsBudgetsListResponse };
