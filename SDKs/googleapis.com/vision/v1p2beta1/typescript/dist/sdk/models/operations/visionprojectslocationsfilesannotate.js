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
var VisionProjectsLocationsFilesAnnotatePathParams = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsFilesAnnotatePathParams, _super);
    function VisionProjectsLocationsFilesAnnotatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsFilesAnnotatePathParams.prototype, "parent", void 0);
    return VisionProjectsLocationsFilesAnnotatePathParams;
}(SpeakeasyBase));
export { VisionProjectsLocationsFilesAnnotatePathParams };
var VisionProjectsLocationsFilesAnnotateQueryParams = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsFilesAnnotateQueryParams, _super);
    function VisionProjectsLocationsFilesAnnotateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsFilesAnnotateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsFilesAnnotateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsFilesAnnotateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsFilesAnnotateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsFilesAnnotateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsFilesAnnotateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsFilesAnnotateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VisionProjectsLocationsFilesAnnotateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsFilesAnnotateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsFilesAnnotateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsFilesAnnotateQueryParams.prototype, "uploadProtocol", void 0);
    return VisionProjectsLocationsFilesAnnotateQueryParams;
}(SpeakeasyBase));
export { VisionProjectsLocationsFilesAnnotateQueryParams };
var VisionProjectsLocationsFilesAnnotateSecurityOption1 = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsFilesAnnotateSecurityOption1, _super);
    function VisionProjectsLocationsFilesAnnotateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionProjectsLocationsFilesAnnotateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionProjectsLocationsFilesAnnotateSecurityOption1.prototype, "oauth2c", void 0);
    return VisionProjectsLocationsFilesAnnotateSecurityOption1;
}(SpeakeasyBase));
export { VisionProjectsLocationsFilesAnnotateSecurityOption1 };
var VisionProjectsLocationsFilesAnnotateSecurityOption2 = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsFilesAnnotateSecurityOption2, _super);
    function VisionProjectsLocationsFilesAnnotateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionProjectsLocationsFilesAnnotateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionProjectsLocationsFilesAnnotateSecurityOption2.prototype, "oauth2c", void 0);
    return VisionProjectsLocationsFilesAnnotateSecurityOption2;
}(SpeakeasyBase));
export { VisionProjectsLocationsFilesAnnotateSecurityOption2 };
var VisionProjectsLocationsFilesAnnotateSecurity = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsFilesAnnotateSecurity, _super);
    function VisionProjectsLocationsFilesAnnotateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionProjectsLocationsFilesAnnotateSecurityOption1)
    ], VisionProjectsLocationsFilesAnnotateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionProjectsLocationsFilesAnnotateSecurityOption2)
    ], VisionProjectsLocationsFilesAnnotateSecurity.prototype, "option2", void 0);
    return VisionProjectsLocationsFilesAnnotateSecurity;
}(SpeakeasyBase));
export { VisionProjectsLocationsFilesAnnotateSecurity };
var VisionProjectsLocationsFilesAnnotateRequest = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsFilesAnnotateRequest, _super);
    function VisionProjectsLocationsFilesAnnotateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsFilesAnnotatePathParams)
    ], VisionProjectsLocationsFilesAnnotateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsFilesAnnotateQueryParams)
    ], VisionProjectsLocationsFilesAnnotateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest)
    ], VisionProjectsLocationsFilesAnnotateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsFilesAnnotateSecurity)
    ], VisionProjectsLocationsFilesAnnotateRequest.prototype, "security", void 0);
    return VisionProjectsLocationsFilesAnnotateRequest;
}(SpeakeasyBase));
export { VisionProjectsLocationsFilesAnnotateRequest };
var VisionProjectsLocationsFilesAnnotateResponse = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsFilesAnnotateResponse, _super);
    function VisionProjectsLocationsFilesAnnotateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VisionProjectsLocationsFilesAnnotateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse)
    ], VisionProjectsLocationsFilesAnnotateResponse.prototype, "googleCloudVisionV1p2beta1BatchAnnotateFilesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VisionProjectsLocationsFilesAnnotateResponse.prototype, "statusCode", void 0);
    return VisionProjectsLocationsFilesAnnotateResponse;
}(SpeakeasyBase));
export { VisionProjectsLocationsFilesAnnotateResponse };
