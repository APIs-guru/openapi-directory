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
export var BooksMyconfigRequestAccessLicenseTypesEnum;
(function (BooksMyconfigRequestAccessLicenseTypesEnum) {
    BooksMyconfigRequestAccessLicenseTypesEnum["LicenseTypesUndefined"] = "LICENSE_TYPES_UNDEFINED";
    BooksMyconfigRequestAccessLicenseTypesEnum["Both"] = "BOTH";
    BooksMyconfigRequestAccessLicenseTypesEnum["Concurrent"] = "CONCURRENT";
    BooksMyconfigRequestAccessLicenseTypesEnum["Download"] = "DOWNLOAD";
})(BooksMyconfigRequestAccessLicenseTypesEnum || (BooksMyconfigRequestAccessLicenseTypesEnum = {}));
var BooksMyconfigRequestAccessQueryParams = /** @class */ (function (_super) {
    __extends(BooksMyconfigRequestAccessQueryParams, _super);
    function BooksMyconfigRequestAccessQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BooksMyconfigRequestAccessQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BooksMyconfigRequestAccessQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BooksMyconfigRequestAccessQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BooksMyconfigRequestAccessQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cpksver" }),
        __metadata("design:type", String)
    ], BooksMyconfigRequestAccessQueryParams.prototype, "cpksver", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BooksMyconfigRequestAccessQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BooksMyconfigRequestAccessQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=licenseTypes" }),
        __metadata("design:type", String)
    ], BooksMyconfigRequestAccessQueryParams.prototype, "licenseTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], BooksMyconfigRequestAccessQueryParams.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nonce" }),
        __metadata("design:type", String)
    ], BooksMyconfigRequestAccessQueryParams.prototype, "nonce", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BooksMyconfigRequestAccessQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BooksMyconfigRequestAccessQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BooksMyconfigRequestAccessQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], BooksMyconfigRequestAccessQueryParams.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BooksMyconfigRequestAccessQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BooksMyconfigRequestAccessQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=volumeId" }),
        __metadata("design:type", String)
    ], BooksMyconfigRequestAccessQueryParams.prototype, "volumeId", void 0);
    return BooksMyconfigRequestAccessQueryParams;
}(SpeakeasyBase));
export { BooksMyconfigRequestAccessQueryParams };
var BooksMyconfigRequestAccessSecurity = /** @class */ (function (_super) {
    __extends(BooksMyconfigRequestAccessSecurity, _super);
    function BooksMyconfigRequestAccessSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BooksMyconfigRequestAccessSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BooksMyconfigRequestAccessSecurity.prototype, "oauth2c", void 0);
    return BooksMyconfigRequestAccessSecurity;
}(SpeakeasyBase));
export { BooksMyconfigRequestAccessSecurity };
var BooksMyconfigRequestAccessRequest = /** @class */ (function (_super) {
    __extends(BooksMyconfigRequestAccessRequest, _super);
    function BooksMyconfigRequestAccessRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksMyconfigRequestAccessQueryParams)
    ], BooksMyconfigRequestAccessRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksMyconfigRequestAccessSecurity)
    ], BooksMyconfigRequestAccessRequest.prototype, "security", void 0);
    return BooksMyconfigRequestAccessRequest;
}(SpeakeasyBase));
export { BooksMyconfigRequestAccessRequest };
var BooksMyconfigRequestAccessResponse = /** @class */ (function (_super) {
    __extends(BooksMyconfigRequestAccessResponse, _super);
    function BooksMyconfigRequestAccessResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BooksMyconfigRequestAccessResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RequestAccessData)
    ], BooksMyconfigRequestAccessResponse.prototype, "requestAccessData", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BooksMyconfigRequestAccessResponse.prototype, "statusCode", void 0);
    return BooksMyconfigRequestAccessResponse;
}(SpeakeasyBase));
export { BooksMyconfigRequestAccessResponse };
