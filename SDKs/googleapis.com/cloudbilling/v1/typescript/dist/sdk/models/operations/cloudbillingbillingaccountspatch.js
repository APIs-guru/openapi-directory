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
var CloudbillingBillingAccountsPatchPathParams = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsPatchPathParams, _super);
    function CloudbillingBillingAccountsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsPatchPathParams.prototype, "name", void 0);
    return CloudbillingBillingAccountsPatchPathParams;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsPatchPathParams };
var CloudbillingBillingAccountsPatchQueryParams = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsPatchQueryParams, _super);
    function CloudbillingBillingAccountsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudbillingBillingAccountsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return CloudbillingBillingAccountsPatchQueryParams;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsPatchQueryParams };
var CloudbillingBillingAccountsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsPatchSecurityOption1, _super);
    function CloudbillingBillingAccountsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingBillingAccountsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingBillingAccountsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return CloudbillingBillingAccountsPatchSecurityOption1;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsPatchSecurityOption1 };
var CloudbillingBillingAccountsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsPatchSecurityOption2, _super);
    function CloudbillingBillingAccountsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudbillingBillingAccountsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudbillingBillingAccountsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return CloudbillingBillingAccountsPatchSecurityOption2;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsPatchSecurityOption2 };
var CloudbillingBillingAccountsPatchSecurity = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsPatchSecurity, _super);
    function CloudbillingBillingAccountsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingBillingAccountsPatchSecurityOption1)
    ], CloudbillingBillingAccountsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudbillingBillingAccountsPatchSecurityOption2)
    ], CloudbillingBillingAccountsPatchSecurity.prototype, "option2", void 0);
    return CloudbillingBillingAccountsPatchSecurity;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsPatchSecurity };
var CloudbillingBillingAccountsPatchRequest = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsPatchRequest, _super);
    function CloudbillingBillingAccountsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbillingBillingAccountsPatchPathParams)
    ], CloudbillingBillingAccountsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbillingBillingAccountsPatchQueryParams)
    ], CloudbillingBillingAccountsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BillingAccountInput)
    ], CloudbillingBillingAccountsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudbillingBillingAccountsPatchSecurity)
    ], CloudbillingBillingAccountsPatchRequest.prototype, "security", void 0);
    return CloudbillingBillingAccountsPatchRequest;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsPatchRequest };
var CloudbillingBillingAccountsPatchResponse = /** @class */ (function (_super) {
    __extends(CloudbillingBillingAccountsPatchResponse, _super);
    function CloudbillingBillingAccountsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BillingAccount)
    ], CloudbillingBillingAccountsPatchResponse.prototype, "billingAccount", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudbillingBillingAccountsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudbillingBillingAccountsPatchResponse.prototype, "statusCode", void 0);
    return CloudbillingBillingAccountsPatchResponse;
}(SpeakeasyBase));
export { CloudbillingBillingAccountsPatchResponse };
