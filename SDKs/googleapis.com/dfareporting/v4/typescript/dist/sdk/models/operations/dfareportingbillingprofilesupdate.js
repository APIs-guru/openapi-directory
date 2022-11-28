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
var DfareportingBillingProfilesUpdatePathParams = /** @class */ (function (_super) {
    __extends(DfareportingBillingProfilesUpdatePathParams, _super);
    function DfareportingBillingProfilesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingBillingProfilesUpdatePathParams.prototype, "profileId", void 0);
    return DfareportingBillingProfilesUpdatePathParams;
}(SpeakeasyBase));
export { DfareportingBillingProfilesUpdatePathParams };
var DfareportingBillingProfilesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingBillingProfilesUpdateQueryParams, _super);
    function DfareportingBillingProfilesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingBillingProfilesUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingBillingProfilesUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingBillingProfilesUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingBillingProfilesUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingBillingProfilesUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingBillingProfilesUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingBillingProfilesUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingBillingProfilesUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingBillingProfilesUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingBillingProfilesUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingBillingProfilesUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingBillingProfilesUpdateQueryParams;
}(SpeakeasyBase));
export { DfareportingBillingProfilesUpdateQueryParams };
var DfareportingBillingProfilesUpdateSecurity = /** @class */ (function (_super) {
    __extends(DfareportingBillingProfilesUpdateSecurity, _super);
    function DfareportingBillingProfilesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingBillingProfilesUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingBillingProfilesUpdateSecurity.prototype, "oauth2c", void 0);
    return DfareportingBillingProfilesUpdateSecurity;
}(SpeakeasyBase));
export { DfareportingBillingProfilesUpdateSecurity };
var DfareportingBillingProfilesUpdateRequest = /** @class */ (function (_super) {
    __extends(DfareportingBillingProfilesUpdateRequest, _super);
    function DfareportingBillingProfilesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingBillingProfilesUpdatePathParams)
    ], DfareportingBillingProfilesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingBillingProfilesUpdateQueryParams)
    ], DfareportingBillingProfilesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BillingProfile)
    ], DfareportingBillingProfilesUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingBillingProfilesUpdateSecurity)
    ], DfareportingBillingProfilesUpdateRequest.prototype, "security", void 0);
    return DfareportingBillingProfilesUpdateRequest;
}(SpeakeasyBase));
export { DfareportingBillingProfilesUpdateRequest };
var DfareportingBillingProfilesUpdateResponse = /** @class */ (function (_super) {
    __extends(DfareportingBillingProfilesUpdateResponse, _super);
    function DfareportingBillingProfilesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BillingProfile)
    ], DfareportingBillingProfilesUpdateResponse.prototype, "billingProfile", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingBillingProfilesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingBillingProfilesUpdateResponse.prototype, "statusCode", void 0);
    return DfareportingBillingProfilesUpdateResponse;
}(SpeakeasyBase));
export { DfareportingBillingProfilesUpdateResponse };
