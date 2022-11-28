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
var VisionProjectsLocationsProductSetsImportPathParams = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsImportPathParams, _super);
    function VisionProjectsLocationsProductSetsImportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsImportPathParams.prototype, "parent", void 0);
    return VisionProjectsLocationsProductSetsImportPathParams;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsImportPathParams };
var VisionProjectsLocationsProductSetsImportQueryParams = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsImportQueryParams, _super);
    function VisionProjectsLocationsProductSetsImportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsImportQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsImportQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsImportQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsImportQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsImportQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsImportQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsImportQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VisionProjectsLocationsProductSetsImportQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsImportQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsImportQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsImportQueryParams.prototype, "uploadProtocol", void 0);
    return VisionProjectsLocationsProductSetsImportQueryParams;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsImportQueryParams };
var VisionProjectsLocationsProductSetsImportSecurityOption1 = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsImportSecurityOption1, _super);
    function VisionProjectsLocationsProductSetsImportSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionProjectsLocationsProductSetsImportSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionProjectsLocationsProductSetsImportSecurityOption1.prototype, "oauth2c", void 0);
    return VisionProjectsLocationsProductSetsImportSecurityOption1;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsImportSecurityOption1 };
var VisionProjectsLocationsProductSetsImportSecurityOption2 = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsImportSecurityOption2, _super);
    function VisionProjectsLocationsProductSetsImportSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionProjectsLocationsProductSetsImportSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionProjectsLocationsProductSetsImportSecurityOption2.prototype, "oauth2c", void 0);
    return VisionProjectsLocationsProductSetsImportSecurityOption2;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsImportSecurityOption2 };
var VisionProjectsLocationsProductSetsImportSecurity = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsImportSecurity, _super);
    function VisionProjectsLocationsProductSetsImportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionProjectsLocationsProductSetsImportSecurityOption1)
    ], VisionProjectsLocationsProductSetsImportSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionProjectsLocationsProductSetsImportSecurityOption2)
    ], VisionProjectsLocationsProductSetsImportSecurity.prototype, "option2", void 0);
    return VisionProjectsLocationsProductSetsImportSecurity;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsImportSecurity };
var VisionProjectsLocationsProductSetsImportRequest = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsImportRequest, _super);
    function VisionProjectsLocationsProductSetsImportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductSetsImportPathParams)
    ], VisionProjectsLocationsProductSetsImportRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductSetsImportQueryParams)
    ], VisionProjectsLocationsProductSetsImportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ImportProductSetsRequest)
    ], VisionProjectsLocationsProductSetsImportRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductSetsImportSecurity)
    ], VisionProjectsLocationsProductSetsImportRequest.prototype, "security", void 0);
    return VisionProjectsLocationsProductSetsImportRequest;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsImportRequest };
var VisionProjectsLocationsProductSetsImportResponse = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsImportResponse, _super);
    function VisionProjectsLocationsProductSetsImportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsImportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], VisionProjectsLocationsProductSetsImportResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VisionProjectsLocationsProductSetsImportResponse.prototype, "statusCode", void 0);
    return VisionProjectsLocationsProductSetsImportResponse;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsImportResponse };
