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
var LicensingLicenseAssignmentsDeletePathParams = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsDeletePathParams, _super);
    function LicensingLicenseAssignmentsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsDeletePathParams.prototype, "productId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=skuId" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsDeletePathParams.prototype, "skuId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsDeletePathParams.prototype, "userId", void 0);
    return LicensingLicenseAssignmentsDeletePathParams;
}(SpeakeasyBase));
export { LicensingLicenseAssignmentsDeletePathParams };
var LicensingLicenseAssignmentsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsDeleteQueryParams, _super);
    function LicensingLicenseAssignmentsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LicensingLicenseAssignmentsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return LicensingLicenseAssignmentsDeleteQueryParams;
}(SpeakeasyBase));
export { LicensingLicenseAssignmentsDeleteQueryParams };
var LicensingLicenseAssignmentsDeleteSecurity = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsDeleteSecurity, _super);
    function LicensingLicenseAssignmentsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LicensingLicenseAssignmentsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LicensingLicenseAssignmentsDeleteSecurity.prototype, "oauth2c", void 0);
    return LicensingLicenseAssignmentsDeleteSecurity;
}(SpeakeasyBase));
export { LicensingLicenseAssignmentsDeleteSecurity };
var LicensingLicenseAssignmentsDeleteRequest = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsDeleteRequest, _super);
    function LicensingLicenseAssignmentsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LicensingLicenseAssignmentsDeletePathParams)
    ], LicensingLicenseAssignmentsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LicensingLicenseAssignmentsDeleteQueryParams)
    ], LicensingLicenseAssignmentsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LicensingLicenseAssignmentsDeleteSecurity)
    ], LicensingLicenseAssignmentsDeleteRequest.prototype, "security", void 0);
    return LicensingLicenseAssignmentsDeleteRequest;
}(SpeakeasyBase));
export { LicensingLicenseAssignmentsDeleteRequest };
var LicensingLicenseAssignmentsDeleteResponse = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsDeleteResponse, _super);
    function LicensingLicenseAssignmentsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], LicensingLicenseAssignmentsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LicensingLicenseAssignmentsDeleteResponse.prototype, "statusCode", void 0);
    return LicensingLicenseAssignmentsDeleteResponse;
}(SpeakeasyBase));
export { LicensingLicenseAssignmentsDeleteResponse };
