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
var PostLkeClusterPoolsPathParams = /** @class */ (function (_super) {
    __extends(PostLkeClusterPoolsPathParams, _super);
    function PostLkeClusterPoolsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" }),
        __metadata("design:type", Number)
    ], PostLkeClusterPoolsPathParams.prototype, "clusterId", void 0);
    return PostLkeClusterPoolsPathParams;
}(SpeakeasyBase));
export { PostLkeClusterPoolsPathParams };
var PostLkeClusterPoolsRequestBody = /** @class */ (function (_super) {
    __extends(PostLkeClusterPoolsRequestBody, _super);
    function PostLkeClusterPoolsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], PostLkeClusterPoolsRequestBody.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disks", elemType: shared.Items }),
        __metadata("design:type", Array)
    ], PostLkeClusterPoolsRequestBody.prototype, "disks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], PostLkeClusterPoolsRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostLkeClusterPoolsRequestBody.prototype, "type", void 0);
    return PostLkeClusterPoolsRequestBody;
}(SpeakeasyBase));
export { PostLkeClusterPoolsRequestBody };
var PostLkeClusterPoolsSecurity = /** @class */ (function (_super) {
    __extends(PostLkeClusterPoolsSecurity, _super);
    function PostLkeClusterPoolsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], PostLkeClusterPoolsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], PostLkeClusterPoolsSecurity.prototype, "oauth", void 0);
    return PostLkeClusterPoolsSecurity;
}(SpeakeasyBase));
export { PostLkeClusterPoolsSecurity };
var PostLkeClusterPoolsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(PostLkeClusterPoolsDefaultApplicationJson, _super);
    function PostLkeClusterPoolsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], PostLkeClusterPoolsDefaultApplicationJson.prototype, "errors", void 0);
    return PostLkeClusterPoolsDefaultApplicationJson;
}(SpeakeasyBase));
export { PostLkeClusterPoolsDefaultApplicationJson };
var PostLkeClusterPoolsRequest = /** @class */ (function (_super) {
    __extends(PostLkeClusterPoolsRequest, _super);
    function PostLkeClusterPoolsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLkeClusterPoolsPathParams)
    ], PostLkeClusterPoolsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostLkeClusterPoolsRequestBody)
    ], PostLkeClusterPoolsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLkeClusterPoolsSecurity)
    ], PostLkeClusterPoolsRequest.prototype, "security", void 0);
    return PostLkeClusterPoolsRequest;
}(SpeakeasyBase));
export { PostLkeClusterPoolsRequest };
var PostLkeClusterPoolsResponse = /** @class */ (function (_super) {
    __extends(PostLkeClusterPoolsResponse, _super);
    function PostLkeClusterPoolsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostLkeClusterPoolsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LkeNodePool)
    ], PostLkeClusterPoolsResponse.prototype, "lkeNodePool", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostLkeClusterPoolsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLkeClusterPoolsDefaultApplicationJson)
    ], PostLkeClusterPoolsResponse.prototype, "postLkeClusterPoolsDefaultApplicationJsonObject", void 0);
    return PostLkeClusterPoolsResponse;
}(SpeakeasyBase));
export { PostLkeClusterPoolsResponse };
