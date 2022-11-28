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
var DrivelabelsLabelsRevisionsPermissionsListPathParams = /** @class */ (function (_super) {
    __extends(DrivelabelsLabelsRevisionsPermissionsListPathParams, _super);
    function DrivelabelsLabelsRevisionsPermissionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsListPathParams.prototype, "parent", void 0);
    return DrivelabelsLabelsRevisionsPermissionsListPathParams;
}(SpeakeasyBase));
export { DrivelabelsLabelsRevisionsPermissionsListPathParams };
var DrivelabelsLabelsRevisionsPermissionsListQueryParams = /** @class */ (function (_super) {
    __extends(DrivelabelsLabelsRevisionsPermissionsListQueryParams, _super);
    function DrivelabelsLabelsRevisionsPermissionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DrivelabelsLabelsRevisionsPermissionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DrivelabelsLabelsRevisionsPermissionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useAdminAccess" }),
        __metadata("design:type", Boolean)
    ], DrivelabelsLabelsRevisionsPermissionsListQueryParams.prototype, "useAdminAccess", void 0);
    return DrivelabelsLabelsRevisionsPermissionsListQueryParams;
}(SpeakeasyBase));
export { DrivelabelsLabelsRevisionsPermissionsListQueryParams };
var DrivelabelsLabelsRevisionsPermissionsListRequest = /** @class */ (function (_super) {
    __extends(DrivelabelsLabelsRevisionsPermissionsListRequest, _super);
    function DrivelabelsLabelsRevisionsPermissionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivelabelsLabelsRevisionsPermissionsListPathParams)
    ], DrivelabelsLabelsRevisionsPermissionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivelabelsLabelsRevisionsPermissionsListQueryParams)
    ], DrivelabelsLabelsRevisionsPermissionsListRequest.prototype, "queryParams", void 0);
    return DrivelabelsLabelsRevisionsPermissionsListRequest;
}(SpeakeasyBase));
export { DrivelabelsLabelsRevisionsPermissionsListRequest };
var DrivelabelsLabelsRevisionsPermissionsListResponse = /** @class */ (function (_super) {
    __extends(DrivelabelsLabelsRevisionsPermissionsListResponse, _super);
    function DrivelabelsLabelsRevisionsPermissionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse)
    ], DrivelabelsLabelsRevisionsPermissionsListResponse.prototype, "googleAppsDriveLabelsV2betaListLabelPermissionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DrivelabelsLabelsRevisionsPermissionsListResponse.prototype, "statusCode", void 0);
    return DrivelabelsLabelsRevisionsPermissionsListResponse;
}(SpeakeasyBase));
export { DrivelabelsLabelsRevisionsPermissionsListResponse };
