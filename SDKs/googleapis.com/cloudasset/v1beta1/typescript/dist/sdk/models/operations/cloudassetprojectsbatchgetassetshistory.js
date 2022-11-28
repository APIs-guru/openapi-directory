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
var CloudassetProjectsBatchGetAssetsHistoryPathParams = /** @class */ (function (_super) {
    __extends(CloudassetProjectsBatchGetAssetsHistoryPathParams, _super);
    function CloudassetProjectsBatchGetAssetsHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudassetProjectsBatchGetAssetsHistoryPathParams.prototype, "parent", void 0);
    return CloudassetProjectsBatchGetAssetsHistoryPathParams;
}(SpeakeasyBase));
export { CloudassetProjectsBatchGetAssetsHistoryPathParams };
export var CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum;
(function (CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum) {
    CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum["ContentTypeUnspecified"] = "CONTENT_TYPE_UNSPECIFIED";
    CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum["Resource"] = "RESOURCE";
    CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum["IamPolicy"] = "IAM_POLICY";
})(CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum || (CloudassetProjectsBatchGetAssetsHistoryContentTypeEnum = {}));
var CloudassetProjectsBatchGetAssetsHistoryQueryParams = /** @class */ (function (_super) {
    __extends(CloudassetProjectsBatchGetAssetsHistoryQueryParams, _super);
    function CloudassetProjectsBatchGetAssetsHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudassetProjectsBatchGetAssetsHistoryQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudassetProjectsBatchGetAssetsHistoryQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudassetProjectsBatchGetAssetsHistoryQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assetNames" }),
        __metadata("design:type", Array)
    ], CloudassetProjectsBatchGetAssetsHistoryQueryParams.prototype, "assetNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudassetProjectsBatchGetAssetsHistoryQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contentType" }),
        __metadata("design:type", String)
    ], CloudassetProjectsBatchGetAssetsHistoryQueryParams.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudassetProjectsBatchGetAssetsHistoryQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudassetProjectsBatchGetAssetsHistoryQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudassetProjectsBatchGetAssetsHistoryQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudassetProjectsBatchGetAssetsHistoryQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudassetProjectsBatchGetAssetsHistoryQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=readTimeWindow.endTime" }),
        __metadata("design:type", String)
    ], CloudassetProjectsBatchGetAssetsHistoryQueryParams.prototype, "readTimeWindowEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=readTimeWindow.startTime" }),
        __metadata("design:type", String)
    ], CloudassetProjectsBatchGetAssetsHistoryQueryParams.prototype, "readTimeWindowStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudassetProjectsBatchGetAssetsHistoryQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudassetProjectsBatchGetAssetsHistoryQueryParams.prototype, "uploadProtocol", void 0);
    return CloudassetProjectsBatchGetAssetsHistoryQueryParams;
}(SpeakeasyBase));
export { CloudassetProjectsBatchGetAssetsHistoryQueryParams };
var CloudassetProjectsBatchGetAssetsHistorySecurity = /** @class */ (function (_super) {
    __extends(CloudassetProjectsBatchGetAssetsHistorySecurity, _super);
    function CloudassetProjectsBatchGetAssetsHistorySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudassetProjectsBatchGetAssetsHistorySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudassetProjectsBatchGetAssetsHistorySecurity.prototype, "oauth2c", void 0);
    return CloudassetProjectsBatchGetAssetsHistorySecurity;
}(SpeakeasyBase));
export { CloudassetProjectsBatchGetAssetsHistorySecurity };
var CloudassetProjectsBatchGetAssetsHistoryRequest = /** @class */ (function (_super) {
    __extends(CloudassetProjectsBatchGetAssetsHistoryRequest, _super);
    function CloudassetProjectsBatchGetAssetsHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudassetProjectsBatchGetAssetsHistoryPathParams)
    ], CloudassetProjectsBatchGetAssetsHistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudassetProjectsBatchGetAssetsHistoryQueryParams)
    ], CloudassetProjectsBatchGetAssetsHistoryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudassetProjectsBatchGetAssetsHistorySecurity)
    ], CloudassetProjectsBatchGetAssetsHistoryRequest.prototype, "security", void 0);
    return CloudassetProjectsBatchGetAssetsHistoryRequest;
}(SpeakeasyBase));
export { CloudassetProjectsBatchGetAssetsHistoryRequest };
var CloudassetProjectsBatchGetAssetsHistoryResponse = /** @class */ (function (_super) {
    __extends(CloudassetProjectsBatchGetAssetsHistoryResponse, _super);
    function CloudassetProjectsBatchGetAssetsHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchGetAssetsHistoryResponse)
    ], CloudassetProjectsBatchGetAssetsHistoryResponse.prototype, "batchGetAssetsHistoryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudassetProjectsBatchGetAssetsHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudassetProjectsBatchGetAssetsHistoryResponse.prototype, "statusCode", void 0);
    return CloudassetProjectsBatchGetAssetsHistoryResponse;
}(SpeakeasyBase));
export { CloudassetProjectsBatchGetAssetsHistoryResponse };
