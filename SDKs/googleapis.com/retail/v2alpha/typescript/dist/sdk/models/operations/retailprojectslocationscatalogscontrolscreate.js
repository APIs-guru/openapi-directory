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
var RetailProjectsLocationsCatalogsControlsCreatePathParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsControlsCreatePathParams, _super);
    function RetailProjectsLocationsCatalogsControlsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsControlsCreatePathParams.prototype, "parent", void 0);
    return RetailProjectsLocationsCatalogsControlsCreatePathParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsControlsCreatePathParams };
var RetailProjectsLocationsCatalogsControlsCreateQueryParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsControlsCreateQueryParams, _super);
    function RetailProjectsLocationsCatalogsControlsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsControlsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsControlsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsControlsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsControlsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=controlId" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsControlsCreateQueryParams.prototype, "controlId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsControlsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsControlsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsControlsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RetailProjectsLocationsCatalogsControlsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsControlsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsControlsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsControlsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return RetailProjectsLocationsCatalogsControlsCreateQueryParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsControlsCreateQueryParams };
var RetailProjectsLocationsCatalogsControlsCreateSecurity = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsControlsCreateSecurity, _super);
    function RetailProjectsLocationsCatalogsControlsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RetailProjectsLocationsCatalogsControlsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RetailProjectsLocationsCatalogsControlsCreateSecurity.prototype, "oauth2c", void 0);
    return RetailProjectsLocationsCatalogsControlsCreateSecurity;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsControlsCreateSecurity };
var RetailProjectsLocationsCatalogsControlsCreateRequest = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsControlsCreateRequest, _super);
    function RetailProjectsLocationsCatalogsControlsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsControlsCreatePathParams)
    ], RetailProjectsLocationsCatalogsControlsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsControlsCreateQueryParams)
    ], RetailProjectsLocationsCatalogsControlsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudRetailV2alphaControlInput)
    ], RetailProjectsLocationsCatalogsControlsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsControlsCreateSecurity)
    ], RetailProjectsLocationsCatalogsControlsCreateRequest.prototype, "security", void 0);
    return RetailProjectsLocationsCatalogsControlsCreateRequest;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsControlsCreateRequest };
var RetailProjectsLocationsCatalogsControlsCreateResponse = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsControlsCreateResponse, _super);
    function RetailProjectsLocationsCatalogsControlsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsControlsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRetailV2alphaControl)
    ], RetailProjectsLocationsCatalogsControlsCreateResponse.prototype, "googleCloudRetailV2alphaControl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetailProjectsLocationsCatalogsControlsCreateResponse.prototype, "statusCode", void 0);
    return RetailProjectsLocationsCatalogsControlsCreateResponse;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsControlsCreateResponse };
