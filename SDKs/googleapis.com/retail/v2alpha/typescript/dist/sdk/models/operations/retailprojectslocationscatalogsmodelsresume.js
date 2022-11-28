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
var RetailProjectsLocationsCatalogsModelsResumePathParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsModelsResumePathParams, _super);
    function RetailProjectsLocationsCatalogsModelsResumePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsModelsResumePathParams.prototype, "name", void 0);
    return RetailProjectsLocationsCatalogsModelsResumePathParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsModelsResumePathParams };
var RetailProjectsLocationsCatalogsModelsResumeQueryParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsModelsResumeQueryParams, _super);
    function RetailProjectsLocationsCatalogsModelsResumeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsModelsResumeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsModelsResumeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsModelsResumeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsModelsResumeQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsModelsResumeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsModelsResumeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsModelsResumeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RetailProjectsLocationsCatalogsModelsResumeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsModelsResumeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsModelsResumeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsModelsResumeQueryParams.prototype, "uploadProtocol", void 0);
    return RetailProjectsLocationsCatalogsModelsResumeQueryParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsModelsResumeQueryParams };
var RetailProjectsLocationsCatalogsModelsResumeSecurity = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsModelsResumeSecurity, _super);
    function RetailProjectsLocationsCatalogsModelsResumeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RetailProjectsLocationsCatalogsModelsResumeSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RetailProjectsLocationsCatalogsModelsResumeSecurity.prototype, "oauth2c", void 0);
    return RetailProjectsLocationsCatalogsModelsResumeSecurity;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsModelsResumeSecurity };
var RetailProjectsLocationsCatalogsModelsResumeRequest = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsModelsResumeRequest, _super);
    function RetailProjectsLocationsCatalogsModelsResumeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsModelsResumePathParams)
    ], RetailProjectsLocationsCatalogsModelsResumeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsModelsResumeQueryParams)
    ], RetailProjectsLocationsCatalogsModelsResumeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], RetailProjectsLocationsCatalogsModelsResumeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsModelsResumeSecurity)
    ], RetailProjectsLocationsCatalogsModelsResumeRequest.prototype, "security", void 0);
    return RetailProjectsLocationsCatalogsModelsResumeRequest;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsModelsResumeRequest };
var RetailProjectsLocationsCatalogsModelsResumeResponse = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsModelsResumeResponse, _super);
    function RetailProjectsLocationsCatalogsModelsResumeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsModelsResumeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRetailV2alphaModel)
    ], RetailProjectsLocationsCatalogsModelsResumeResponse.prototype, "googleCloudRetailV2alphaModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetailProjectsLocationsCatalogsModelsResumeResponse.prototype, "statusCode", void 0);
    return RetailProjectsLocationsCatalogsModelsResumeResponse;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsModelsResumeResponse };
