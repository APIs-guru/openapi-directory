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
var ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersPathParams = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersPathParams, _super);
    function ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersPathParams.prototype, "name", void 0);
    return ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersPathParams;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersPathParams };
var ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersQueryParams = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersQueryParams, _super);
    function ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersQueryParams.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersQueryParams.prototype, "uploadProtocol", void 0);
    return ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersQueryParams;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersQueryParams };
var ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersSecurity = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersSecurity, _super);
    function ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersSecurity.prototype, "oauth2c", void 0);
    return ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersSecurity;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersSecurity };
var ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersRequest = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersRequest, _super);
    function ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersPathParams)
    ], ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersQueryParams)
    ], ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersSecurity)
    ], ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersRequest.prototype, "security", void 0);
    return ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersRequest;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersRequest };
var ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersResponse = /** @class */ (function (_super) {
    __extends(ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersResponse, _super);
    function ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListStepAccessibilityClustersResponse)
    ], ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersResponse.prototype, "listStepAccessibilityClustersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersResponse.prototype, "statusCode", void 0);
    return ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersResponse;
}(SpeakeasyBase));
export { ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersResponse };
