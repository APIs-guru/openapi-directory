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
var CloudsearchSettingsUpdateCustomerQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsUpdateCustomerQueryParams, _super);
    function CloudsearchSettingsUpdateCustomerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsUpdateCustomerQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsUpdateCustomerQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsUpdateCustomerQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsUpdateCustomerQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsUpdateCustomerQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsUpdateCustomerQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsUpdateCustomerQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchSettingsUpdateCustomerQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsUpdateCustomerQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsUpdateCustomerQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsUpdateCustomerQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchSettingsUpdateCustomerQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsearchSettingsUpdateCustomerQueryParams;
}(SpeakeasyBase));
export { CloudsearchSettingsUpdateCustomerQueryParams };
var CloudsearchSettingsUpdateCustomerSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsUpdateCustomerSecurityOption1, _super);
    function CloudsearchSettingsUpdateCustomerSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchSettingsUpdateCustomerSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchSettingsUpdateCustomerSecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchSettingsUpdateCustomerSecurityOption1;
}(SpeakeasyBase));
export { CloudsearchSettingsUpdateCustomerSecurityOption1 };
var CloudsearchSettingsUpdateCustomerSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsUpdateCustomerSecurityOption2, _super);
    function CloudsearchSettingsUpdateCustomerSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchSettingsUpdateCustomerSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchSettingsUpdateCustomerSecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchSettingsUpdateCustomerSecurityOption2;
}(SpeakeasyBase));
export { CloudsearchSettingsUpdateCustomerSecurityOption2 };
var CloudsearchSettingsUpdateCustomerSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsUpdateCustomerSecurityOption3, _super);
    function CloudsearchSettingsUpdateCustomerSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchSettingsUpdateCustomerSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchSettingsUpdateCustomerSecurityOption3.prototype, "oauth2c", void 0);
    return CloudsearchSettingsUpdateCustomerSecurityOption3;
}(SpeakeasyBase));
export { CloudsearchSettingsUpdateCustomerSecurityOption3 };
var CloudsearchSettingsUpdateCustomerSecurity = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsUpdateCustomerSecurity, _super);
    function CloudsearchSettingsUpdateCustomerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchSettingsUpdateCustomerSecurityOption1)
    ], CloudsearchSettingsUpdateCustomerSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchSettingsUpdateCustomerSecurityOption2)
    ], CloudsearchSettingsUpdateCustomerSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchSettingsUpdateCustomerSecurityOption3)
    ], CloudsearchSettingsUpdateCustomerSecurity.prototype, "option3", void 0);
    return CloudsearchSettingsUpdateCustomerSecurity;
}(SpeakeasyBase));
export { CloudsearchSettingsUpdateCustomerSecurity };
var CloudsearchSettingsUpdateCustomerRequest = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsUpdateCustomerRequest, _super);
    function CloudsearchSettingsUpdateCustomerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchSettingsUpdateCustomerQueryParams)
    ], CloudsearchSettingsUpdateCustomerRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CustomerSettings)
    ], CloudsearchSettingsUpdateCustomerRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchSettingsUpdateCustomerSecurity)
    ], CloudsearchSettingsUpdateCustomerRequest.prototype, "security", void 0);
    return CloudsearchSettingsUpdateCustomerRequest;
}(SpeakeasyBase));
export { CloudsearchSettingsUpdateCustomerRequest };
var CloudsearchSettingsUpdateCustomerResponse = /** @class */ (function (_super) {
    __extends(CloudsearchSettingsUpdateCustomerResponse, _super);
    function CloudsearchSettingsUpdateCustomerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchSettingsUpdateCustomerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], CloudsearchSettingsUpdateCustomerResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchSettingsUpdateCustomerResponse.prototype, "statusCode", void 0);
    return CloudsearchSettingsUpdateCustomerResponse;
}(SpeakeasyBase));
export { CloudsearchSettingsUpdateCustomerResponse };
