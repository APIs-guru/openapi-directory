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
var VisionProjectsLocationsProductSetsPatchPathParams = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsPatchPathParams, _super);
    function VisionProjectsLocationsProductSetsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsPatchPathParams.prototype, "name", void 0);
    return VisionProjectsLocationsProductSetsPatchPathParams;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsPatchPathParams };
var VisionProjectsLocationsProductSetsPatchQueryParams = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsPatchQueryParams, _super);
    function VisionProjectsLocationsProductSetsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VisionProjectsLocationsProductSetsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return VisionProjectsLocationsProductSetsPatchQueryParams;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsPatchQueryParams };
var VisionProjectsLocationsProductSetsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsPatchSecurityOption1, _super);
    function VisionProjectsLocationsProductSetsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionProjectsLocationsProductSetsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionProjectsLocationsProductSetsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return VisionProjectsLocationsProductSetsPatchSecurityOption1;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsPatchSecurityOption1 };
var VisionProjectsLocationsProductSetsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsPatchSecurityOption2, _super);
    function VisionProjectsLocationsProductSetsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionProjectsLocationsProductSetsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionProjectsLocationsProductSetsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return VisionProjectsLocationsProductSetsPatchSecurityOption2;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsPatchSecurityOption2 };
var VisionProjectsLocationsProductSetsPatchSecurity = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsPatchSecurity, _super);
    function VisionProjectsLocationsProductSetsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionProjectsLocationsProductSetsPatchSecurityOption1)
    ], VisionProjectsLocationsProductSetsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionProjectsLocationsProductSetsPatchSecurityOption2)
    ], VisionProjectsLocationsProductSetsPatchSecurity.prototype, "option2", void 0);
    return VisionProjectsLocationsProductSetsPatchSecurity;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsPatchSecurity };
var VisionProjectsLocationsProductSetsPatchRequest = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsPatchRequest, _super);
    function VisionProjectsLocationsProductSetsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductSetsPatchPathParams)
    ], VisionProjectsLocationsProductSetsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductSetsPatchQueryParams)
    ], VisionProjectsLocationsProductSetsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ProductSetInput)
    ], VisionProjectsLocationsProductSetsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductSetsPatchSecurity)
    ], VisionProjectsLocationsProductSetsPatchRequest.prototype, "security", void 0);
    return VisionProjectsLocationsProductSetsPatchRequest;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsPatchRequest };
var VisionProjectsLocationsProductSetsPatchResponse = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsPatchResponse, _super);
    function VisionProjectsLocationsProductSetsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ProductSet)
    ], VisionProjectsLocationsProductSetsPatchResponse.prototype, "productSet", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VisionProjectsLocationsProductSetsPatchResponse.prototype, "statusCode", void 0);
    return VisionProjectsLocationsProductSetsPatchResponse;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsPatchResponse };
