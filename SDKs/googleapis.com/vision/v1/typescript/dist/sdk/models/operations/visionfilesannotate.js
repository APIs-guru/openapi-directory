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
var VisionFilesAnnotateQueryParams = /** @class */ (function (_super) {
    __extends(VisionFilesAnnotateQueryParams, _super);
    function VisionFilesAnnotateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VisionFilesAnnotateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VisionFilesAnnotateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VisionFilesAnnotateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VisionFilesAnnotateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VisionFilesAnnotateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VisionFilesAnnotateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VisionFilesAnnotateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VisionFilesAnnotateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VisionFilesAnnotateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VisionFilesAnnotateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VisionFilesAnnotateQueryParams.prototype, "uploadProtocol", void 0);
    return VisionFilesAnnotateQueryParams;
}(SpeakeasyBase));
export { VisionFilesAnnotateQueryParams };
var VisionFilesAnnotateSecurityOption1 = /** @class */ (function (_super) {
    __extends(VisionFilesAnnotateSecurityOption1, _super);
    function VisionFilesAnnotateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionFilesAnnotateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionFilesAnnotateSecurityOption1.prototype, "oauth2c", void 0);
    return VisionFilesAnnotateSecurityOption1;
}(SpeakeasyBase));
export { VisionFilesAnnotateSecurityOption1 };
var VisionFilesAnnotateSecurityOption2 = /** @class */ (function (_super) {
    __extends(VisionFilesAnnotateSecurityOption2, _super);
    function VisionFilesAnnotateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionFilesAnnotateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionFilesAnnotateSecurityOption2.prototype, "oauth2c", void 0);
    return VisionFilesAnnotateSecurityOption2;
}(SpeakeasyBase));
export { VisionFilesAnnotateSecurityOption2 };
var VisionFilesAnnotateSecurity = /** @class */ (function (_super) {
    __extends(VisionFilesAnnotateSecurity, _super);
    function VisionFilesAnnotateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionFilesAnnotateSecurityOption1)
    ], VisionFilesAnnotateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionFilesAnnotateSecurityOption2)
    ], VisionFilesAnnotateSecurity.prototype, "option2", void 0);
    return VisionFilesAnnotateSecurity;
}(SpeakeasyBase));
export { VisionFilesAnnotateSecurity };
var VisionFilesAnnotateRequest = /** @class */ (function (_super) {
    __extends(VisionFilesAnnotateRequest, _super);
    function VisionFilesAnnotateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionFilesAnnotateQueryParams)
    ], VisionFilesAnnotateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchAnnotateFilesRequest)
    ], VisionFilesAnnotateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionFilesAnnotateSecurity)
    ], VisionFilesAnnotateRequest.prototype, "security", void 0);
    return VisionFilesAnnotateRequest;
}(SpeakeasyBase));
export { VisionFilesAnnotateRequest };
var VisionFilesAnnotateResponse = /** @class */ (function (_super) {
    __extends(VisionFilesAnnotateResponse, _super);
    function VisionFilesAnnotateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchAnnotateFilesResponse)
    ], VisionFilesAnnotateResponse.prototype, "batchAnnotateFilesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VisionFilesAnnotateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VisionFilesAnnotateResponse.prototype, "statusCode", void 0);
    return VisionFilesAnnotateResponse;
}(SpeakeasyBase));
export { VisionFilesAnnotateResponse };
