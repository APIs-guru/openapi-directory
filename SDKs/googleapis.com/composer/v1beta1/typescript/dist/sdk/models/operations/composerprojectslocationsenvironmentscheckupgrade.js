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
var ComposerProjectsLocationsEnvironmentsCheckUpgradePathParams = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsEnvironmentsCheckUpgradePathParams, _super);
    function ComposerProjectsLocationsEnvironmentsCheckUpgradePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environment" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsCheckUpgradePathParams.prototype, "environment", void 0);
    return ComposerProjectsLocationsEnvironmentsCheckUpgradePathParams;
}(SpeakeasyBase));
export { ComposerProjectsLocationsEnvironmentsCheckUpgradePathParams };
var ComposerProjectsLocationsEnvironmentsCheckUpgradeQueryParams = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsEnvironmentsCheckUpgradeQueryParams, _super);
    function ComposerProjectsLocationsEnvironmentsCheckUpgradeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsCheckUpgradeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsCheckUpgradeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsCheckUpgradeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsCheckUpgradeQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsCheckUpgradeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsCheckUpgradeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsCheckUpgradeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ComposerProjectsLocationsEnvironmentsCheckUpgradeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsCheckUpgradeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsCheckUpgradeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsCheckUpgradeQueryParams.prototype, "uploadProtocol", void 0);
    return ComposerProjectsLocationsEnvironmentsCheckUpgradeQueryParams;
}(SpeakeasyBase));
export { ComposerProjectsLocationsEnvironmentsCheckUpgradeQueryParams };
var ComposerProjectsLocationsEnvironmentsCheckUpgradeSecurity = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsEnvironmentsCheckUpgradeSecurity, _super);
    function ComposerProjectsLocationsEnvironmentsCheckUpgradeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ComposerProjectsLocationsEnvironmentsCheckUpgradeSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ComposerProjectsLocationsEnvironmentsCheckUpgradeSecurity.prototype, "oauth2c", void 0);
    return ComposerProjectsLocationsEnvironmentsCheckUpgradeSecurity;
}(SpeakeasyBase));
export { ComposerProjectsLocationsEnvironmentsCheckUpgradeSecurity };
var ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest, _super);
    function ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ComposerProjectsLocationsEnvironmentsCheckUpgradePathParams)
    ], ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ComposerProjectsLocationsEnvironmentsCheckUpgradeQueryParams)
    ], ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CheckUpgradeRequest)
    ], ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ComposerProjectsLocationsEnvironmentsCheckUpgradeSecurity)
    ], ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest.prototype, "security", void 0);
    return ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest;
}(SpeakeasyBase));
export { ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest };
var ComposerProjectsLocationsEnvironmentsCheckUpgradeResponse = /** @class */ (function (_super) {
    __extends(ComposerProjectsLocationsEnvironmentsCheckUpgradeResponse, _super);
    function ComposerProjectsLocationsEnvironmentsCheckUpgradeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ComposerProjectsLocationsEnvironmentsCheckUpgradeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ComposerProjectsLocationsEnvironmentsCheckUpgradeResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ComposerProjectsLocationsEnvironmentsCheckUpgradeResponse.prototype, "statusCode", void 0);
    return ComposerProjectsLocationsEnvironmentsCheckUpgradeResponse;
}(SpeakeasyBase));
export { ComposerProjectsLocationsEnvironmentsCheckUpgradeResponse };
