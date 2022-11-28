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
var DatafusionProjectsLocationsInstancesUpgradePathParams = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesUpgradePathParams, _super);
    function DatafusionProjectsLocationsInstancesUpgradePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesUpgradePathParams.prototype, "name", void 0);
    return DatafusionProjectsLocationsInstancesUpgradePathParams;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesUpgradePathParams };
var DatafusionProjectsLocationsInstancesUpgradeQueryParams = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesUpgradeQueryParams, _super);
    function DatafusionProjectsLocationsInstancesUpgradeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesUpgradeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesUpgradeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesUpgradeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesUpgradeQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesUpgradeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesUpgradeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesUpgradeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatafusionProjectsLocationsInstancesUpgradeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesUpgradeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesUpgradeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesUpgradeQueryParams.prototype, "uploadProtocol", void 0);
    return DatafusionProjectsLocationsInstancesUpgradeQueryParams;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesUpgradeQueryParams };
var DatafusionProjectsLocationsInstancesUpgradeSecurity = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesUpgradeSecurity, _super);
    function DatafusionProjectsLocationsInstancesUpgradeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatafusionProjectsLocationsInstancesUpgradeSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatafusionProjectsLocationsInstancesUpgradeSecurity.prototype, "oauth2c", void 0);
    return DatafusionProjectsLocationsInstancesUpgradeSecurity;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesUpgradeSecurity };
var DatafusionProjectsLocationsInstancesUpgradeRequest = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesUpgradeRequest, _super);
    function DatafusionProjectsLocationsInstancesUpgradeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatafusionProjectsLocationsInstancesUpgradePathParams)
    ], DatafusionProjectsLocationsInstancesUpgradeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatafusionProjectsLocationsInstancesUpgradeQueryParams)
    ], DatafusionProjectsLocationsInstancesUpgradeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], DatafusionProjectsLocationsInstancesUpgradeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatafusionProjectsLocationsInstancesUpgradeSecurity)
    ], DatafusionProjectsLocationsInstancesUpgradeRequest.prototype, "security", void 0);
    return DatafusionProjectsLocationsInstancesUpgradeRequest;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesUpgradeRequest };
var DatafusionProjectsLocationsInstancesUpgradeResponse = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesUpgradeResponse, _super);
    function DatafusionProjectsLocationsInstancesUpgradeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesUpgradeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], DatafusionProjectsLocationsInstancesUpgradeResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatafusionProjectsLocationsInstancesUpgradeResponse.prototype, "statusCode", void 0);
    return DatafusionProjectsLocationsInstancesUpgradeResponse;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesUpgradeResponse };
