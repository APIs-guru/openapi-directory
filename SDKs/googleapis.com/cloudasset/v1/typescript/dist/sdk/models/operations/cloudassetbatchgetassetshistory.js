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
var CloudassetBatchGetAssetsHistoryPathParams = /** @class */ (function (_super) {
    __extends(CloudassetBatchGetAssetsHistoryPathParams, _super);
    function CloudassetBatchGetAssetsHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudassetBatchGetAssetsHistoryPathParams.prototype, "parent", void 0);
    return CloudassetBatchGetAssetsHistoryPathParams;
}(SpeakeasyBase));
export { CloudassetBatchGetAssetsHistoryPathParams };
export var CloudassetBatchGetAssetsHistoryContentTypeEnum;
(function (CloudassetBatchGetAssetsHistoryContentTypeEnum) {
    CloudassetBatchGetAssetsHistoryContentTypeEnum["ContentTypeUnspecified"] = "CONTENT_TYPE_UNSPECIFIED";
    CloudassetBatchGetAssetsHistoryContentTypeEnum["Resource"] = "RESOURCE";
    CloudassetBatchGetAssetsHistoryContentTypeEnum["IamPolicy"] = "IAM_POLICY";
    CloudassetBatchGetAssetsHistoryContentTypeEnum["OrgPolicy"] = "ORG_POLICY";
    CloudassetBatchGetAssetsHistoryContentTypeEnum["AccessPolicy"] = "ACCESS_POLICY";
    CloudassetBatchGetAssetsHistoryContentTypeEnum["OsInventory"] = "OS_INVENTORY";
    CloudassetBatchGetAssetsHistoryContentTypeEnum["Relationship"] = "RELATIONSHIP";
})(CloudassetBatchGetAssetsHistoryContentTypeEnum || (CloudassetBatchGetAssetsHistoryContentTypeEnum = {}));
var CloudassetBatchGetAssetsHistoryQueryParams = /** @class */ (function (_super) {
    __extends(CloudassetBatchGetAssetsHistoryQueryParams, _super);
    function CloudassetBatchGetAssetsHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudassetBatchGetAssetsHistoryQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudassetBatchGetAssetsHistoryQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudassetBatchGetAssetsHistoryQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assetNames" }),
        __metadata("design:type", Array)
    ], CloudassetBatchGetAssetsHistoryQueryParams.prototype, "assetNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudassetBatchGetAssetsHistoryQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contentType" }),
        __metadata("design:type", String)
    ], CloudassetBatchGetAssetsHistoryQueryParams.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudassetBatchGetAssetsHistoryQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudassetBatchGetAssetsHistoryQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudassetBatchGetAssetsHistoryQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudassetBatchGetAssetsHistoryQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudassetBatchGetAssetsHistoryQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=readTimeWindow.endTime" }),
        __metadata("design:type", String)
    ], CloudassetBatchGetAssetsHistoryQueryParams.prototype, "readTimeWindowEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=readTimeWindow.startTime" }),
        __metadata("design:type", String)
    ], CloudassetBatchGetAssetsHistoryQueryParams.prototype, "readTimeWindowStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=relationshipTypes" }),
        __metadata("design:type", Array)
    ], CloudassetBatchGetAssetsHistoryQueryParams.prototype, "relationshipTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudassetBatchGetAssetsHistoryQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudassetBatchGetAssetsHistoryQueryParams.prototype, "uploadProtocol", void 0);
    return CloudassetBatchGetAssetsHistoryQueryParams;
}(SpeakeasyBase));
export { CloudassetBatchGetAssetsHistoryQueryParams };
var CloudassetBatchGetAssetsHistorySecurity = /** @class */ (function (_super) {
    __extends(CloudassetBatchGetAssetsHistorySecurity, _super);
    function CloudassetBatchGetAssetsHistorySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudassetBatchGetAssetsHistorySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudassetBatchGetAssetsHistorySecurity.prototype, "oauth2c", void 0);
    return CloudassetBatchGetAssetsHistorySecurity;
}(SpeakeasyBase));
export { CloudassetBatchGetAssetsHistorySecurity };
var CloudassetBatchGetAssetsHistoryRequest = /** @class */ (function (_super) {
    __extends(CloudassetBatchGetAssetsHistoryRequest, _super);
    function CloudassetBatchGetAssetsHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudassetBatchGetAssetsHistoryPathParams)
    ], CloudassetBatchGetAssetsHistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudassetBatchGetAssetsHistoryQueryParams)
    ], CloudassetBatchGetAssetsHistoryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudassetBatchGetAssetsHistorySecurity)
    ], CloudassetBatchGetAssetsHistoryRequest.prototype, "security", void 0);
    return CloudassetBatchGetAssetsHistoryRequest;
}(SpeakeasyBase));
export { CloudassetBatchGetAssetsHistoryRequest };
var CloudassetBatchGetAssetsHistoryResponse = /** @class */ (function (_super) {
    __extends(CloudassetBatchGetAssetsHistoryResponse, _super);
    function CloudassetBatchGetAssetsHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchGetAssetsHistoryResponse)
    ], CloudassetBatchGetAssetsHistoryResponse.prototype, "batchGetAssetsHistoryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudassetBatchGetAssetsHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudassetBatchGetAssetsHistoryResponse.prototype, "statusCode", void 0);
    return CloudassetBatchGetAssetsHistoryResponse;
}(SpeakeasyBase));
export { CloudassetBatchGetAssetsHistoryResponse };
