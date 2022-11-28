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
var DrivelabelsLabelsRevisionsLocksListPathParams = /** @class */ (function (_super) {
    __extends(DrivelabelsLabelsRevisionsLocksListPathParams, _super);
    function DrivelabelsLabelsRevisionsLocksListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsLocksListPathParams.prototype, "parent", void 0);
    return DrivelabelsLabelsRevisionsLocksListPathParams;
}(SpeakeasyBase));
export { DrivelabelsLabelsRevisionsLocksListPathParams };
var DrivelabelsLabelsRevisionsLocksListQueryParams = /** @class */ (function (_super) {
    __extends(DrivelabelsLabelsRevisionsLocksListQueryParams, _super);
    function DrivelabelsLabelsRevisionsLocksListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsLocksListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsLocksListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsLocksListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsLocksListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsLocksListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsLocksListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsLocksListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DrivelabelsLabelsRevisionsLocksListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsLocksListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DrivelabelsLabelsRevisionsLocksListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsLocksListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsLocksListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsLocksListQueryParams.prototype, "uploadProtocol", void 0);
    return DrivelabelsLabelsRevisionsLocksListQueryParams;
}(SpeakeasyBase));
export { DrivelabelsLabelsRevisionsLocksListQueryParams };
var DrivelabelsLabelsRevisionsLocksListRequest = /** @class */ (function (_super) {
    __extends(DrivelabelsLabelsRevisionsLocksListRequest, _super);
    function DrivelabelsLabelsRevisionsLocksListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivelabelsLabelsRevisionsLocksListPathParams)
    ], DrivelabelsLabelsRevisionsLocksListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivelabelsLabelsRevisionsLocksListQueryParams)
    ], DrivelabelsLabelsRevisionsLocksListRequest.prototype, "queryParams", void 0);
    return DrivelabelsLabelsRevisionsLocksListRequest;
}(SpeakeasyBase));
export { DrivelabelsLabelsRevisionsLocksListRequest };
var DrivelabelsLabelsRevisionsLocksListResponse = /** @class */ (function (_super) {
    __extends(DrivelabelsLabelsRevisionsLocksListResponse, _super);
    function DrivelabelsLabelsRevisionsLocksListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsLocksListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleAppsDriveLabelsV2betaListLabelLocksResponse)
    ], DrivelabelsLabelsRevisionsLocksListResponse.prototype, "googleAppsDriveLabelsV2betaListLabelLocksResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DrivelabelsLabelsRevisionsLocksListResponse.prototype, "statusCode", void 0);
    return DrivelabelsLabelsRevisionsLocksListResponse;
}(SpeakeasyBase));
export { DrivelabelsLabelsRevisionsLocksListResponse };
