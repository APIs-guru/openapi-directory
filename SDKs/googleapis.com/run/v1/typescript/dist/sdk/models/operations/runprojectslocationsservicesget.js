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
var RunProjectsLocationsServicesGetPathParams = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsServicesGetPathParams, _super);
    function RunProjectsLocationsServicesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesGetPathParams.prototype, "name", void 0);
    return RunProjectsLocationsServicesGetPathParams;
}(SpeakeasyBase));
export { RunProjectsLocationsServicesGetPathParams };
var RunProjectsLocationsServicesGetQueryParams = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsServicesGetQueryParams, _super);
    function RunProjectsLocationsServicesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RunProjectsLocationsServicesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesGetQueryParams.prototype, "uploadProtocol", void 0);
    return RunProjectsLocationsServicesGetQueryParams;
}(SpeakeasyBase));
export { RunProjectsLocationsServicesGetQueryParams };
var RunProjectsLocationsServicesGetSecurity = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsServicesGetSecurity, _super);
    function RunProjectsLocationsServicesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RunProjectsLocationsServicesGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RunProjectsLocationsServicesGetSecurity.prototype, "oauth2c", void 0);
    return RunProjectsLocationsServicesGetSecurity;
}(SpeakeasyBase));
export { RunProjectsLocationsServicesGetSecurity };
var RunProjectsLocationsServicesGetRequest = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsServicesGetRequest, _super);
    function RunProjectsLocationsServicesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunProjectsLocationsServicesGetPathParams)
    ], RunProjectsLocationsServicesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunProjectsLocationsServicesGetQueryParams)
    ], RunProjectsLocationsServicesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunProjectsLocationsServicesGetSecurity)
    ], RunProjectsLocationsServicesGetRequest.prototype, "security", void 0);
    return RunProjectsLocationsServicesGetRequest;
}(SpeakeasyBase));
export { RunProjectsLocationsServicesGetRequest };
var RunProjectsLocationsServicesGetResponse = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsServicesGetResponse, _super);
    function RunProjectsLocationsServicesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Service)
    ], RunProjectsLocationsServicesGetResponse.prototype, "service", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RunProjectsLocationsServicesGetResponse.prototype, "statusCode", void 0);
    return RunProjectsLocationsServicesGetResponse;
}(SpeakeasyBase));
export { RunProjectsLocationsServicesGetResponse };
