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
var RedisProjectsLocationsInstancesUpgradePathParams = /** @class */ (function (_super) {
    __extends(RedisProjectsLocationsInstancesUpgradePathParams, _super);
    function RedisProjectsLocationsInstancesUpgradePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesUpgradePathParams.prototype, "name", void 0);
    return RedisProjectsLocationsInstancesUpgradePathParams;
}(SpeakeasyBase));
export { RedisProjectsLocationsInstancesUpgradePathParams };
var RedisProjectsLocationsInstancesUpgradeQueryParams = /** @class */ (function (_super) {
    __extends(RedisProjectsLocationsInstancesUpgradeQueryParams, _super);
    function RedisProjectsLocationsInstancesUpgradeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesUpgradeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesUpgradeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesUpgradeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesUpgradeQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesUpgradeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesUpgradeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesUpgradeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RedisProjectsLocationsInstancesUpgradeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesUpgradeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesUpgradeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesUpgradeQueryParams.prototype, "uploadProtocol", void 0);
    return RedisProjectsLocationsInstancesUpgradeQueryParams;
}(SpeakeasyBase));
export { RedisProjectsLocationsInstancesUpgradeQueryParams };
var RedisProjectsLocationsInstancesUpgradeSecurity = /** @class */ (function (_super) {
    __extends(RedisProjectsLocationsInstancesUpgradeSecurity, _super);
    function RedisProjectsLocationsInstancesUpgradeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RedisProjectsLocationsInstancesUpgradeSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RedisProjectsLocationsInstancesUpgradeSecurity.prototype, "oauth2c", void 0);
    return RedisProjectsLocationsInstancesUpgradeSecurity;
}(SpeakeasyBase));
export { RedisProjectsLocationsInstancesUpgradeSecurity };
var RedisProjectsLocationsInstancesUpgradeRequest = /** @class */ (function (_super) {
    __extends(RedisProjectsLocationsInstancesUpgradeRequest, _super);
    function RedisProjectsLocationsInstancesUpgradeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RedisProjectsLocationsInstancesUpgradePathParams)
    ], RedisProjectsLocationsInstancesUpgradeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RedisProjectsLocationsInstancesUpgradeQueryParams)
    ], RedisProjectsLocationsInstancesUpgradeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpgradeInstanceRequest)
    ], RedisProjectsLocationsInstancesUpgradeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RedisProjectsLocationsInstancesUpgradeSecurity)
    ], RedisProjectsLocationsInstancesUpgradeRequest.prototype, "security", void 0);
    return RedisProjectsLocationsInstancesUpgradeRequest;
}(SpeakeasyBase));
export { RedisProjectsLocationsInstancesUpgradeRequest };
var RedisProjectsLocationsInstancesUpgradeResponse = /** @class */ (function (_super) {
    __extends(RedisProjectsLocationsInstancesUpgradeResponse, _super);
    function RedisProjectsLocationsInstancesUpgradeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RedisProjectsLocationsInstancesUpgradeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], RedisProjectsLocationsInstancesUpgradeResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RedisProjectsLocationsInstancesUpgradeResponse.prototype, "statusCode", void 0);
    return RedisProjectsLocationsInstancesUpgradeResponse;
}(SpeakeasyBase));
export { RedisProjectsLocationsInstancesUpgradeResponse };
