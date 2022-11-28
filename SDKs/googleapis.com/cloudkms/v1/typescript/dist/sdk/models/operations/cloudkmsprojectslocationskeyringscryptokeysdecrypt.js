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
var CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptPathParams = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptPathParams, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptPathParams.prototype, "name", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptPathParams;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptPathParams };
var CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptQueryParams = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptQueryParams, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptQueryParams.prototype, "uploadProtocol", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptQueryParams;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptQueryParams };
var CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurityOption1, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurityOption1.prototype, "oauth2c", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurityOption1;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurityOption1 };
var CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurityOption2, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurityOption2.prototype, "oauth2c", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurityOption2;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurityOption2 };
var CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurity = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurity, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurityOption1)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurityOption2)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurity.prototype, "option2", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurity;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurity };
var CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptRequest = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptRequest, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptPathParams)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptQueryParams)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DecryptRequest)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurity)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptRequest.prototype, "security", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptRequest;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptRequest };
var CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptResponse = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptResponse, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DecryptResponse)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptResponse.prototype, "decryptResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptResponse.prototype, "statusCode", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptResponse;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptResponse };
