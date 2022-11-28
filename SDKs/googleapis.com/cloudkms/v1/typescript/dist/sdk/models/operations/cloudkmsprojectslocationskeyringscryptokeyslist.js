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
var CloudkmsProjectsLocationsKeyRingsCryptoKeysListPathParams = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysListPathParams, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysListPathParams.prototype, "parent", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysListPathParams;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysListPathParams };
export var CloudkmsProjectsLocationsKeyRingsCryptoKeysListVersionViewEnum;
(function (CloudkmsProjectsLocationsKeyRingsCryptoKeysListVersionViewEnum) {
    CloudkmsProjectsLocationsKeyRingsCryptoKeysListVersionViewEnum["CryptoKeyVersionViewUnspecified"] = "CRYPTO_KEY_VERSION_VIEW_UNSPECIFIED";
    CloudkmsProjectsLocationsKeyRingsCryptoKeysListVersionViewEnum["Full"] = "FULL";
})(CloudkmsProjectsLocationsKeyRingsCryptoKeysListVersionViewEnum || (CloudkmsProjectsLocationsKeyRingsCryptoKeysListVersionViewEnum = {}));
var CloudkmsProjectsLocationsKeyRingsCryptoKeysListQueryParams = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysListQueryParams, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=versionView" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysListQueryParams.prototype, "versionView", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysListQueryParams;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysListQueryParams };
var CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption1, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption1.prototype, "oauth2c", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption1;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption1 };
var CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption2, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption2.prototype, "oauth2c", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption2;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption2 };
var CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurity = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurity, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption1)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption2)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurity.prototype, "option2", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurity;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurity };
var CloudkmsProjectsLocationsKeyRingsCryptoKeysListRequest = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysListRequest, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsCryptoKeysListPathParams)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsCryptoKeysListQueryParams)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurity)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysListRequest.prototype, "security", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysListRequest;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysListRequest };
var CloudkmsProjectsLocationsKeyRingsCryptoKeysListResponse = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsCryptoKeysListResponse, _super);
    function CloudkmsProjectsLocationsKeyRingsCryptoKeysListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListCryptoKeysResponse)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysListResponse.prototype, "listCryptoKeysResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudkmsProjectsLocationsKeyRingsCryptoKeysListResponse.prototype, "statusCode", void 0);
    return CloudkmsProjectsLocationsKeyRingsCryptoKeysListResponse;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsCryptoKeysListResponse };
