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
var RetailProjectsLocationsCatalogsUserEventsImportPathParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsUserEventsImportPathParams, _super);
    function RetailProjectsLocationsCatalogsUserEventsImportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsImportPathParams.prototype, "parent", void 0);
    return RetailProjectsLocationsCatalogsUserEventsImportPathParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsUserEventsImportPathParams };
var RetailProjectsLocationsCatalogsUserEventsImportQueryParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsUserEventsImportQueryParams, _super);
    function RetailProjectsLocationsCatalogsUserEventsImportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsImportQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsImportQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsImportQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsImportQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsImportQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsImportQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsImportQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RetailProjectsLocationsCatalogsUserEventsImportQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsImportQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsImportQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsImportQueryParams.prototype, "uploadProtocol", void 0);
    return RetailProjectsLocationsCatalogsUserEventsImportQueryParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsUserEventsImportQueryParams };
var RetailProjectsLocationsCatalogsUserEventsImportSecurity = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsUserEventsImportSecurity, _super);
    function RetailProjectsLocationsCatalogsUserEventsImportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RetailProjectsLocationsCatalogsUserEventsImportSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RetailProjectsLocationsCatalogsUserEventsImportSecurity.prototype, "oauth2c", void 0);
    return RetailProjectsLocationsCatalogsUserEventsImportSecurity;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsUserEventsImportSecurity };
var RetailProjectsLocationsCatalogsUserEventsImportRequest = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsUserEventsImportRequest, _super);
    function RetailProjectsLocationsCatalogsUserEventsImportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsUserEventsImportPathParams)
    ], RetailProjectsLocationsCatalogsUserEventsImportRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsUserEventsImportQueryParams)
    ], RetailProjectsLocationsCatalogsUserEventsImportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudRetailV2betaImportUserEventsRequestInput)
    ], RetailProjectsLocationsCatalogsUserEventsImportRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsUserEventsImportSecurity)
    ], RetailProjectsLocationsCatalogsUserEventsImportRequest.prototype, "security", void 0);
    return RetailProjectsLocationsCatalogsUserEventsImportRequest;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsUserEventsImportRequest };
var RetailProjectsLocationsCatalogsUserEventsImportResponse = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsUserEventsImportResponse, _super);
    function RetailProjectsLocationsCatalogsUserEventsImportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsImportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], RetailProjectsLocationsCatalogsUserEventsImportResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetailProjectsLocationsCatalogsUserEventsImportResponse.prototype, "statusCode", void 0);
    return RetailProjectsLocationsCatalogsUserEventsImportResponse;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsUserEventsImportResponse };
