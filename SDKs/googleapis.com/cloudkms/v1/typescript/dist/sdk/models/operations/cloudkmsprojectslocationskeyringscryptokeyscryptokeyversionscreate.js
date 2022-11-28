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
var CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreatePathParams = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreatePathParams, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreatePathParams.prototype, "parent", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreatePathParams;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreatePathParams };
var CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateQueryParams = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateQueryParams, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateQueryParams;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateQueryParams };
var CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurityOption1, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurityOption1;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurityOption1 };
var CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurityOption2, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurityOption2;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurityOption2 };
var CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurity = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurity, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurityOption1)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurityOption2)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurity.prototype, "option2", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurity;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurity };
var CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateRequest = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateRequest, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreatePathParams)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateQueryParams)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CryptoKeyVersionInput)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurity)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateRequest.prototype, "security", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateRequest;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateRequest };
var CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateResponse = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateResponse, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CryptoKeyVersion)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateResponse.prototype, "cryptoKeyVersion", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateResponse.prototype, "statusCode", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateResponse;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateResponse };
