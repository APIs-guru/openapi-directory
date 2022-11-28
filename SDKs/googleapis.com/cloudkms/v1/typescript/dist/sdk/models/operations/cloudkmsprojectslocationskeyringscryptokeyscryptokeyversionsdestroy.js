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
var CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyPathParams = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyPathParams, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyPathParams.prototype, "name", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyPathParams;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyPathParams };
var CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyQueryParams = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyQueryParams, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyQueryParams.prototype, "uploadProtocol", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyQueryParams;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyQueryParams };
var CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurityOption1, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurityOption1.prototype, "oauth2c", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurityOption1;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurityOption1 };
var CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurityOption2, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurityOption2.prototype, "oauth2c", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurityOption2;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurityOption2 };
var CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurity = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurity, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurityOption1)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurityOption2)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurity.prototype, "option2", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurity;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurity };
var CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyRequest = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyRequest, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyPathParams)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyQueryParams)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurity)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyRequest.prototype, "security", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyRequest;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyRequest };
var CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyResponse = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyResponse, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CryptoKeyVersion)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyResponse.prototype, "cryptoKeyVersion", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyResponse.prototype, "statusCode", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyResponse;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyResponse };
