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
var DrivelabelsLabelsRevisionsPermissionsBatchDeletePathParams = /** @class */ (function (_super) {
    __extends(DrivelabelsLabelsRevisionsPermissionsBatchDeletePathParams, _super);
    function DrivelabelsLabelsRevisionsPermissionsBatchDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsBatchDeletePathParams.prototype, "parent", void 0);
    return DrivelabelsLabelsRevisionsPermissionsBatchDeletePathParams;
}(SpeakeasyBase));
export { DrivelabelsLabelsRevisionsPermissionsBatchDeletePathParams };
var DrivelabelsLabelsRevisionsPermissionsBatchDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DrivelabelsLabelsRevisionsPermissionsBatchDeleteQueryParams, _super);
    function DrivelabelsLabelsRevisionsPermissionsBatchDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsBatchDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsBatchDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsBatchDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsBatchDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsBatchDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsBatchDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsBatchDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DrivelabelsLabelsRevisionsPermissionsBatchDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsBatchDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsBatchDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsBatchDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return DrivelabelsLabelsRevisionsPermissionsBatchDeleteQueryParams;
}(SpeakeasyBase));
export { DrivelabelsLabelsRevisionsPermissionsBatchDeleteQueryParams };
var DrivelabelsLabelsRevisionsPermissionsBatchDeleteRequest = /** @class */ (function (_super) {
    __extends(DrivelabelsLabelsRevisionsPermissionsBatchDeleteRequest, _super);
    function DrivelabelsLabelsRevisionsPermissionsBatchDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivelabelsLabelsRevisionsPermissionsBatchDeletePathParams)
    ], DrivelabelsLabelsRevisionsPermissionsBatchDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivelabelsLabelsRevisionsPermissionsBatchDeleteQueryParams)
    ], DrivelabelsLabelsRevisionsPermissionsBatchDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest)
    ], DrivelabelsLabelsRevisionsPermissionsBatchDeleteRequest.prototype, "request", void 0);
    return DrivelabelsLabelsRevisionsPermissionsBatchDeleteRequest;
}(SpeakeasyBase));
export { DrivelabelsLabelsRevisionsPermissionsBatchDeleteRequest };
var DrivelabelsLabelsRevisionsPermissionsBatchDeleteResponse = /** @class */ (function (_super) {
    __extends(DrivelabelsLabelsRevisionsPermissionsBatchDeleteResponse, _super);
    function DrivelabelsLabelsRevisionsPermissionsBatchDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsBatchDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DrivelabelsLabelsRevisionsPermissionsBatchDeleteResponse.prototype, "googleProtobufEmpty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DrivelabelsLabelsRevisionsPermissionsBatchDeleteResponse.prototype, "statusCode", void 0);
    return DrivelabelsLabelsRevisionsPermissionsBatchDeleteResponse;
}(SpeakeasyBase));
export { DrivelabelsLabelsRevisionsPermissionsBatchDeleteResponse };
