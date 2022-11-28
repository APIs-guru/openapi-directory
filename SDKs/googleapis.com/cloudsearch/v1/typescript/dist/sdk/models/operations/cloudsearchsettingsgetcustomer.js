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
var CloudsearchSettingsGetCustomerQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsGetCustomerQueryParams, _super);
    function CloudsearchSettingsGetCustomerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsGetCustomerQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsGetCustomerQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsGetCustomerQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsGetCustomerQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsGetCustomerQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsGetCustomerQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsGetCustomerQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchSettingsGetCustomerQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsGetCustomerQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsGetCustomerQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsGetCustomerQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsearchSettingsGetCustomerQueryParams;
}(SpeakeasyBase));
export { CloudsearchSettingsGetCustomerQueryParams };
var CloudsearchSettingsGetCustomerSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsGetCustomerSecurityOption1, _super);
    function CloudsearchSettingsGetCustomerSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchSettingsGetCustomerSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchSettingsGetCustomerSecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchSettingsGetCustomerSecurityOption1;
}(SpeakeasyBase));
export { CloudsearchSettingsGetCustomerSecurityOption1 };
var CloudsearchSettingsGetCustomerSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsGetCustomerSecurityOption2, _super);
    function CloudsearchSettingsGetCustomerSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchSettingsGetCustomerSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchSettingsGetCustomerSecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchSettingsGetCustomerSecurityOption2;
}(SpeakeasyBase));
export { CloudsearchSettingsGetCustomerSecurityOption2 };
var CloudsearchSettingsGetCustomerSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsGetCustomerSecurityOption3, _super);
    function CloudsearchSettingsGetCustomerSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchSettingsGetCustomerSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchSettingsGetCustomerSecurityOption3.prototype, "oauth2c", void 0);
    return CloudsearchSettingsGetCustomerSecurityOption3;
}(SpeakeasyBase));
export { CloudsearchSettingsGetCustomerSecurityOption3 };
var CloudsearchSettingsGetCustomerSecurity = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsGetCustomerSecurity, _super);
    function CloudsearchSettingsGetCustomerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchSettingsGetCustomerSecurityOption1)
    ], CloudsearchSettingsGetCustomerSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchSettingsGetCustomerSecurityOption2)
    ], CloudsearchSettingsGetCustomerSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchSettingsGetCustomerSecurityOption3)
    ], CloudsearchSettingsGetCustomerSecurity.prototype, "option3", void 0);
    return CloudsearchSettingsGetCustomerSecurity;
}(SpeakeasyBase));
export { CloudsearchSettingsGetCustomerSecurity };
var CloudsearchSettingsGetCustomerRequest = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsGetCustomerRequest, _super);
    function CloudsearchSettingsGetCustomerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchSettingsGetCustomerQueryParams)
    ], CloudsearchSettingsGetCustomerRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchSettingsGetCustomerSecurity)
    ], CloudsearchSettingsGetCustomerRequest.prototype, "security", void 0);
    return CloudsearchSettingsGetCustomerRequest;
}(SpeakeasyBase));
export { CloudsearchSettingsGetCustomerRequest };
var CloudsearchSettingsGetCustomerResponse = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsGetCustomerResponse, _super);
    function CloudsearchSettingsGetCustomerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchSettingsGetCustomerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CustomerSettings)
    ], CloudsearchSettingsGetCustomerResponse.prototype, "customerSettings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchSettingsGetCustomerResponse.prototype, "statusCode", void 0);
    return CloudsearchSettingsGetCustomerResponse;
}(SpeakeasyBase));
export { CloudsearchSettingsGetCustomerResponse };
