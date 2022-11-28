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
var VisionProjectsLocationsProductsPurgePathParams = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductsPurgePathParams, _super);
    function VisionProjectsLocationsProductsPurgePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsPurgePathParams.prototype, "parent", void 0);
    return VisionProjectsLocationsProductsPurgePathParams;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductsPurgePathParams };
var VisionProjectsLocationsProductsPurgeQueryParams = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductsPurgeQueryParams, _super);
    function VisionProjectsLocationsProductsPurgeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsPurgeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsPurgeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsPurgeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsPurgeQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsPurgeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsPurgeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsPurgeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VisionProjectsLocationsProductsPurgeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsPurgeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsPurgeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsPurgeQueryParams.prototype, "uploadProtocol", void 0);
    return VisionProjectsLocationsProductsPurgeQueryParams;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductsPurgeQueryParams };
var VisionProjectsLocationsProductsPurgeSecurityOption1 = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductsPurgeSecurityOption1, _super);
    function VisionProjectsLocationsProductsPurgeSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionProjectsLocationsProductsPurgeSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionProjectsLocationsProductsPurgeSecurityOption1.prototype, "oauth2c", void 0);
    return VisionProjectsLocationsProductsPurgeSecurityOption1;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductsPurgeSecurityOption1 };
var VisionProjectsLocationsProductsPurgeSecurityOption2 = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductsPurgeSecurityOption2, _super);
    function VisionProjectsLocationsProductsPurgeSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionProjectsLocationsProductsPurgeSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionProjectsLocationsProductsPurgeSecurityOption2.prototype, "oauth2c", void 0);
    return VisionProjectsLocationsProductsPurgeSecurityOption2;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductsPurgeSecurityOption2 };
var VisionProjectsLocationsProductsPurgeSecurity = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductsPurgeSecurity, _super);
    function VisionProjectsLocationsProductsPurgeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionProjectsLocationsProductsPurgeSecurityOption1)
    ], VisionProjectsLocationsProductsPurgeSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionProjectsLocationsProductsPurgeSecurityOption2)
    ], VisionProjectsLocationsProductsPurgeSecurity.prototype, "option2", void 0);
    return VisionProjectsLocationsProductsPurgeSecurity;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductsPurgeSecurity };
var VisionProjectsLocationsProductsPurgeRequest = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductsPurgeRequest, _super);
    function VisionProjectsLocationsProductsPurgeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductsPurgePathParams)
    ], VisionProjectsLocationsProductsPurgeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductsPurgeQueryParams)
    ], VisionProjectsLocationsProductsPurgeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PurgeProductsRequest)
    ], VisionProjectsLocationsProductsPurgeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductsPurgeSecurity)
    ], VisionProjectsLocationsProductsPurgeRequest.prototype, "security", void 0);
    return VisionProjectsLocationsProductsPurgeRequest;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductsPurgeRequest };
var VisionProjectsLocationsProductsPurgeResponse = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductsPurgeResponse, _super);
    function VisionProjectsLocationsProductsPurgeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsPurgeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], VisionProjectsLocationsProductsPurgeResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VisionProjectsLocationsProductsPurgeResponse.prototype, "statusCode", void 0);
    return VisionProjectsLocationsProductsPurgeResponse;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductsPurgeResponse };
