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
var LicensingLicenseAssignmentsGetPathParams = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsGetPathParams, _super);
    function LicensingLicenseAssignmentsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsGetPathParams.prototype, "productId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=skuId" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsGetPathParams.prototype, "skuId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsGetPathParams.prototype, "userId", void 0);
    return LicensingLicenseAssignmentsGetPathParams;
}(SpeakeasyBase));
export { LicensingLicenseAssignmentsGetPathParams };
var LicensingLicenseAssignmentsGetQueryParams = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsGetQueryParams, _super);
    function LicensingLicenseAssignmentsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LicensingLicenseAssignmentsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsGetQueryParams.prototype, "uploadProtocol", void 0);
    return LicensingLicenseAssignmentsGetQueryParams;
}(SpeakeasyBase));
export { LicensingLicenseAssignmentsGetQueryParams };
var LicensingLicenseAssignmentsGetSecurity = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsGetSecurity, _super);
    function LicensingLicenseAssignmentsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LicensingLicenseAssignmentsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LicensingLicenseAssignmentsGetSecurity.prototype, "oauth2c", void 0);
    return LicensingLicenseAssignmentsGetSecurity;
}(SpeakeasyBase));
export { LicensingLicenseAssignmentsGetSecurity };
var LicensingLicenseAssignmentsGetRequest = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsGetRequest, _super);
    function LicensingLicenseAssignmentsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LicensingLicenseAssignmentsGetPathParams)
    ], LicensingLicenseAssignmentsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LicensingLicenseAssignmentsGetQueryParams)
    ], LicensingLicenseAssignmentsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LicensingLicenseAssignmentsGetSecurity)
    ], LicensingLicenseAssignmentsGetRequest.prototype, "security", void 0);
    return LicensingLicenseAssignmentsGetRequest;
}(SpeakeasyBase));
export { LicensingLicenseAssignmentsGetRequest };
var LicensingLicenseAssignmentsGetResponse = /** @class */ (function (_super) {
    __extends(LicensingLicenseAssignmentsGetResponse, _super);
    function LicensingLicenseAssignmentsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LicensingLicenseAssignmentsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LicenseAssignment)
    ], LicensingLicenseAssignmentsGetResponse.prototype, "licenseAssignment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LicensingLicenseAssignmentsGetResponse.prototype, "statusCode", void 0);
    return LicensingLicenseAssignmentsGetResponse;
}(SpeakeasyBase));
export { LicensingLicenseAssignmentsGetResponse };
