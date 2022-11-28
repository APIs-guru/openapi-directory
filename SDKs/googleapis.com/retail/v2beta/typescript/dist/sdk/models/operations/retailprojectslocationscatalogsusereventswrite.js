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
var RetailProjectsLocationsCatalogsUserEventsWritePathParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsUserEventsWritePathParams, _super);
    function RetailProjectsLocationsCatalogsUserEventsWritePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsWritePathParams.prototype, "parent", void 0);
    return RetailProjectsLocationsCatalogsUserEventsWritePathParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsUserEventsWritePathParams };
var RetailProjectsLocationsCatalogsUserEventsWriteQueryParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsUserEventsWriteQueryParams, _super);
    function RetailProjectsLocationsCatalogsUserEventsWriteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsWriteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsWriteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsWriteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsWriteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsWriteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsWriteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsWriteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RetailProjectsLocationsCatalogsUserEventsWriteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsWriteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsWriteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsWriteQueryParams.prototype, "uploadProtocol", void 0);
    return RetailProjectsLocationsCatalogsUserEventsWriteQueryParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsUserEventsWriteQueryParams };
var RetailProjectsLocationsCatalogsUserEventsWriteSecurity = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsUserEventsWriteSecurity, _super);
    function RetailProjectsLocationsCatalogsUserEventsWriteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RetailProjectsLocationsCatalogsUserEventsWriteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RetailProjectsLocationsCatalogsUserEventsWriteSecurity.prototype, "oauth2c", void 0);
    return RetailProjectsLocationsCatalogsUserEventsWriteSecurity;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsUserEventsWriteSecurity };
var RetailProjectsLocationsCatalogsUserEventsWriteRequest = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsUserEventsWriteRequest, _super);
    function RetailProjectsLocationsCatalogsUserEventsWriteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsUserEventsWritePathParams)
    ], RetailProjectsLocationsCatalogsUserEventsWriteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsUserEventsWriteQueryParams)
    ], RetailProjectsLocationsCatalogsUserEventsWriteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudRetailV2betaUserEventInput)
    ], RetailProjectsLocationsCatalogsUserEventsWriteRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsUserEventsWriteSecurity)
    ], RetailProjectsLocationsCatalogsUserEventsWriteRequest.prototype, "security", void 0);
    return RetailProjectsLocationsCatalogsUserEventsWriteRequest;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsUserEventsWriteRequest };
var RetailProjectsLocationsCatalogsUserEventsWriteResponse = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsUserEventsWriteResponse, _super);
    function RetailProjectsLocationsCatalogsUserEventsWriteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsWriteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRetailV2betaUserEvent)
    ], RetailProjectsLocationsCatalogsUserEventsWriteResponse.prototype, "googleCloudRetailV2betaUserEvent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetailProjectsLocationsCatalogsUserEventsWriteResponse.prototype, "statusCode", void 0);
    return RetailProjectsLocationsCatalogsUserEventsWriteResponse;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsUserEventsWriteResponse };
