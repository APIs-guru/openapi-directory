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
var CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchPathParams = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchPathParams, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchPathParams.prototype, "name", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchPathParams;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchPathParams };
var CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchQueryParams = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchQueryParams, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchQueryParams;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchQueryParams };
var CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurityOption1, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurityOption1;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurityOption1 };
var CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurityOption2, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurityOption2;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurityOption2 };
var CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurity = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurity, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurityOption1)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurityOption2)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurity.prototype, "option2", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurity;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurity };
var CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchRequest = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchRequest, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchPathParams)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchQueryParams)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CryptoKeyVersionInput)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurity)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchRequest.prototype, "security", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchRequest;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchRequest };
var CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchResponse = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchResponse, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CryptoKeyVersion)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchResponse.prototype, "cryptoKeyVersion", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchResponse.prototype, "statusCode", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchResponse;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchResponse };
