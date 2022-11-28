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
var DrivelabelsLabelsRevisionsUpdatePermissionsPathParams = /** @class */ (function (_super) {
    __extends(DrivelabelsLabelsRevisionsUpdatePermissionsPathParams, _super);
    function DrivelabelsLabelsRevisionsUpdatePermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsUpdatePermissionsPathParams.prototype, "parent", void 0);
    return DrivelabelsLabelsRevisionsUpdatePermissionsPathParams;
}(SpeakeasyBase));
export { DrivelabelsLabelsRevisionsUpdatePermissionsPathParams };
var DrivelabelsLabelsRevisionsUpdatePermissionsQueryParams = /** @class */ (function (_super) {
    __extends(DrivelabelsLabelsRevisionsUpdatePermissionsQueryParams, _super);
    function DrivelabelsLabelsRevisionsUpdatePermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsUpdatePermissionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsUpdatePermissionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsUpdatePermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsUpdatePermissionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsUpdatePermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsUpdatePermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsUpdatePermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DrivelabelsLabelsRevisionsUpdatePermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsUpdatePermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsUpdatePermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsUpdatePermissionsQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useAdminAccess" }),
        __metadata("design:type", Boolean)
    ], DrivelabelsLabelsRevisionsUpdatePermissionsQueryParams.prototype, "useAdminAccess", void 0);
    return DrivelabelsLabelsRevisionsUpdatePermissionsQueryParams;
}(SpeakeasyBase));
export { DrivelabelsLabelsRevisionsUpdatePermissionsQueryParams };
var DrivelabelsLabelsRevisionsUpdatePermissionsRequest = /** @class */ (function (_super) {
    __extends(DrivelabelsLabelsRevisionsUpdatePermissionsRequest, _super);
    function DrivelabelsLabelsRevisionsUpdatePermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivelabelsLabelsRevisionsUpdatePermissionsPathParams)
    ], DrivelabelsLabelsRevisionsUpdatePermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivelabelsLabelsRevisionsUpdatePermissionsQueryParams)
    ], DrivelabelsLabelsRevisionsUpdatePermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleAppsDriveLabelsV2betaLabelPermission)
    ], DrivelabelsLabelsRevisionsUpdatePermissionsRequest.prototype, "request", void 0);
    return DrivelabelsLabelsRevisionsUpdatePermissionsRequest;
}(SpeakeasyBase));
export { DrivelabelsLabelsRevisionsUpdatePermissionsRequest };
var DrivelabelsLabelsRevisionsUpdatePermissionsResponse = /** @class */ (function (_super) {
    __extends(DrivelabelsLabelsRevisionsUpdatePermissionsResponse, _super);
    function DrivelabelsLabelsRevisionsUpdatePermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsUpdatePermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleAppsDriveLabelsV2betaLabelPermission)
    ], DrivelabelsLabelsRevisionsUpdatePermissionsResponse.prototype, "googleAppsDriveLabelsV2betaLabelPermission", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DrivelabelsLabelsRevisionsUpdatePermissionsResponse.prototype, "statusCode", void 0);
    return DrivelabelsLabelsRevisionsUpdatePermissionsResponse;
}(SpeakeasyBase));
export { DrivelabelsLabelsRevisionsUpdatePermissionsResponse };
