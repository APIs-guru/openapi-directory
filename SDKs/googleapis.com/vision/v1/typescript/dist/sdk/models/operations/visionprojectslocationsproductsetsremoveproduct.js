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
var VisionProjectsLocationsProductSetsRemoveProductPathParams = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsRemoveProductPathParams, _super);
    function VisionProjectsLocationsProductSetsRemoveProductPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsRemoveProductPathParams.prototype, "name", void 0);
    return VisionProjectsLocationsProductSetsRemoveProductPathParams;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsRemoveProductPathParams };
var VisionProjectsLocationsProductSetsRemoveProductQueryParams = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsRemoveProductQueryParams, _super);
    function VisionProjectsLocationsProductSetsRemoveProductQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsRemoveProductQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsRemoveProductQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsRemoveProductQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsRemoveProductQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsRemoveProductQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsRemoveProductQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsRemoveProductQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VisionProjectsLocationsProductSetsRemoveProductQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsRemoveProductQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsRemoveProductQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsRemoveProductQueryParams.prototype, "uploadProtocol", void 0);
    return VisionProjectsLocationsProductSetsRemoveProductQueryParams;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsRemoveProductQueryParams };
var VisionProjectsLocationsProductSetsRemoveProductSecurityOption1 = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsRemoveProductSecurityOption1, _super);
    function VisionProjectsLocationsProductSetsRemoveProductSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionProjectsLocationsProductSetsRemoveProductSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionProjectsLocationsProductSetsRemoveProductSecurityOption1.prototype, "oauth2c", void 0);
    return VisionProjectsLocationsProductSetsRemoveProductSecurityOption1;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsRemoveProductSecurityOption1 };
var VisionProjectsLocationsProductSetsRemoveProductSecurityOption2 = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsRemoveProductSecurityOption2, _super);
    function VisionProjectsLocationsProductSetsRemoveProductSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionProjectsLocationsProductSetsRemoveProductSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionProjectsLocationsProductSetsRemoveProductSecurityOption2.prototype, "oauth2c", void 0);
    return VisionProjectsLocationsProductSetsRemoveProductSecurityOption2;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsRemoveProductSecurityOption2 };
var VisionProjectsLocationsProductSetsRemoveProductSecurity = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsRemoveProductSecurity, _super);
    function VisionProjectsLocationsProductSetsRemoveProductSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionProjectsLocationsProductSetsRemoveProductSecurityOption1)
    ], VisionProjectsLocationsProductSetsRemoveProductSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionProjectsLocationsProductSetsRemoveProductSecurityOption2)
    ], VisionProjectsLocationsProductSetsRemoveProductSecurity.prototype, "option2", void 0);
    return VisionProjectsLocationsProductSetsRemoveProductSecurity;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsRemoveProductSecurity };
var VisionProjectsLocationsProductSetsRemoveProductRequest = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsRemoveProductRequest, _super);
    function VisionProjectsLocationsProductSetsRemoveProductRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductSetsRemoveProductPathParams)
    ], VisionProjectsLocationsProductSetsRemoveProductRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductSetsRemoveProductQueryParams)
    ], VisionProjectsLocationsProductSetsRemoveProductRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RemoveProductFromProductSetRequest)
    ], VisionProjectsLocationsProductSetsRemoveProductRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductSetsRemoveProductSecurity)
    ], VisionProjectsLocationsProductSetsRemoveProductRequest.prototype, "security", void 0);
    return VisionProjectsLocationsProductSetsRemoveProductRequest;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsRemoveProductRequest };
var VisionProjectsLocationsProductSetsRemoveProductResponse = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsRemoveProductResponse, _super);
    function VisionProjectsLocationsProductSetsRemoveProductResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsRemoveProductResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], VisionProjectsLocationsProductSetsRemoveProductResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VisionProjectsLocationsProductSetsRemoveProductResponse.prototype, "statusCode", void 0);
    return VisionProjectsLocationsProductSetsRemoveProductResponse;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsRemoveProductResponse };
