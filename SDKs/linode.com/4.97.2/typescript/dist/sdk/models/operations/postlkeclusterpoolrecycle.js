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
var PostLkeClusterPoolRecyclePathParams = /** @class */ (function (_super) {
    __extends(PostLkeClusterPoolRecyclePathParams, _super);
    function PostLkeClusterPoolRecyclePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" }),
        __metadata("design:type", Number)
    ], PostLkeClusterPoolRecyclePathParams.prototype, "clusterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolId" }),
        __metadata("design:type", Number)
    ], PostLkeClusterPoolRecyclePathParams.prototype, "poolId", void 0);
    return PostLkeClusterPoolRecyclePathParams;
}(SpeakeasyBase));
export { PostLkeClusterPoolRecyclePathParams };
var PostLkeClusterPoolRecycleSecurity = /** @class */ (function (_super) {
    __extends(PostLkeClusterPoolRecycleSecurity, _super);
    function PostLkeClusterPoolRecycleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], PostLkeClusterPoolRecycleSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], PostLkeClusterPoolRecycleSecurity.prototype, "oauth", void 0);
    return PostLkeClusterPoolRecycleSecurity;
}(SpeakeasyBase));
export { PostLkeClusterPoolRecycleSecurity };
var PostLkeClusterPoolRecycleDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(PostLkeClusterPoolRecycleDefaultApplicationJson, _super);
    function PostLkeClusterPoolRecycleDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], PostLkeClusterPoolRecycleDefaultApplicationJson.prototype, "errors", void 0);
    return PostLkeClusterPoolRecycleDefaultApplicationJson;
}(SpeakeasyBase));
export { PostLkeClusterPoolRecycleDefaultApplicationJson };
var PostLkeClusterPoolRecycleRequest = /** @class */ (function (_super) {
    __extends(PostLkeClusterPoolRecycleRequest, _super);
    function PostLkeClusterPoolRecycleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLkeClusterPoolRecyclePathParams)
    ], PostLkeClusterPoolRecycleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLkeClusterPoolRecycleSecurity)
    ], PostLkeClusterPoolRecycleRequest.prototype, "security", void 0);
    return PostLkeClusterPoolRecycleRequest;
}(SpeakeasyBase));
export { PostLkeClusterPoolRecycleRequest };
var PostLkeClusterPoolRecycleResponse = /** @class */ (function (_super) {
    __extends(PostLkeClusterPoolRecycleResponse, _super);
    function PostLkeClusterPoolRecycleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostLkeClusterPoolRecycleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostLkeClusterPoolRecycleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostLkeClusterPoolRecycleResponse.prototype, "postLkeClusterPoolRecycle200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLkeClusterPoolRecycleDefaultApplicationJson)
    ], PostLkeClusterPoolRecycleResponse.prototype, "postLkeClusterPoolRecycleDefaultApplicationJsonObject", void 0);
    return PostLkeClusterPoolRecycleResponse;
}(SpeakeasyBase));
export { PostLkeClusterPoolRecycleResponse };
