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
var DatafusionProjectsLocationsInstancesRestartPathParams = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesRestartPathParams, _super);
    function DatafusionProjectsLocationsInstancesRestartPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesRestartPathParams.prototype, "name", void 0);
    return DatafusionProjectsLocationsInstancesRestartPathParams;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesRestartPathParams };
var DatafusionProjectsLocationsInstancesRestartQueryParams = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesRestartQueryParams, _super);
    function DatafusionProjectsLocationsInstancesRestartQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesRestartQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesRestartQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesRestartQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesRestartQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesRestartQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesRestartQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesRestartQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatafusionProjectsLocationsInstancesRestartQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesRestartQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesRestartQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesRestartQueryParams.prototype, "uploadProtocol", void 0);
    return DatafusionProjectsLocationsInstancesRestartQueryParams;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesRestartQueryParams };
var DatafusionProjectsLocationsInstancesRestartSecurity = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesRestartSecurity, _super);
    function DatafusionProjectsLocationsInstancesRestartSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatafusionProjectsLocationsInstancesRestartSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatafusionProjectsLocationsInstancesRestartSecurity.prototype, "oauth2c", void 0);
    return DatafusionProjectsLocationsInstancesRestartSecurity;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesRestartSecurity };
var DatafusionProjectsLocationsInstancesRestartRequest = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesRestartRequest, _super);
    function DatafusionProjectsLocationsInstancesRestartRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatafusionProjectsLocationsInstancesRestartPathParams)
    ], DatafusionProjectsLocationsInstancesRestartRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatafusionProjectsLocationsInstancesRestartQueryParams)
    ], DatafusionProjectsLocationsInstancesRestartRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], DatafusionProjectsLocationsInstancesRestartRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatafusionProjectsLocationsInstancesRestartSecurity)
    ], DatafusionProjectsLocationsInstancesRestartRequest.prototype, "security", void 0);
    return DatafusionProjectsLocationsInstancesRestartRequest;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesRestartRequest };
var DatafusionProjectsLocationsInstancesRestartResponse = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesRestartResponse, _super);
    function DatafusionProjectsLocationsInstancesRestartResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesRestartResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], DatafusionProjectsLocationsInstancesRestartResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatafusionProjectsLocationsInstancesRestartResponse.prototype, "statusCode", void 0);
    return DatafusionProjectsLocationsInstancesRestartResponse;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesRestartResponse };
