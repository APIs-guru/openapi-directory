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
var PostLkeClusterNodeRecyclePathParams = /** @class */ (function (_super) {
    __extends(PostLkeClusterNodeRecyclePathParams, _super);
    function PostLkeClusterNodeRecyclePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" }),
        __metadata("design:type", Number)
    ], PostLkeClusterNodeRecyclePathParams.prototype, "clusterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" }),
        __metadata("design:type", String)
    ], PostLkeClusterNodeRecyclePathParams.prototype, "nodeId", void 0);
    return PostLkeClusterNodeRecyclePathParams;
}(SpeakeasyBase));
export { PostLkeClusterNodeRecyclePathParams };
var PostLkeClusterNodeRecycleSecurity = /** @class */ (function (_super) {
    __extends(PostLkeClusterNodeRecycleSecurity, _super);
    function PostLkeClusterNodeRecycleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], PostLkeClusterNodeRecycleSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], PostLkeClusterNodeRecycleSecurity.prototype, "oauth", void 0);
    return PostLkeClusterNodeRecycleSecurity;
}(SpeakeasyBase));
export { PostLkeClusterNodeRecycleSecurity };
var PostLkeClusterNodeRecycleDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(PostLkeClusterNodeRecycleDefaultApplicationJson, _super);
    function PostLkeClusterNodeRecycleDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], PostLkeClusterNodeRecycleDefaultApplicationJson.prototype, "errors", void 0);
    return PostLkeClusterNodeRecycleDefaultApplicationJson;
}(SpeakeasyBase));
export { PostLkeClusterNodeRecycleDefaultApplicationJson };
var PostLkeClusterNodeRecycleRequest = /** @class */ (function (_super) {
    __extends(PostLkeClusterNodeRecycleRequest, _super);
    function PostLkeClusterNodeRecycleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLkeClusterNodeRecyclePathParams)
    ], PostLkeClusterNodeRecycleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLkeClusterNodeRecycleSecurity)
    ], PostLkeClusterNodeRecycleRequest.prototype, "security", void 0);
    return PostLkeClusterNodeRecycleRequest;
}(SpeakeasyBase));
export { PostLkeClusterNodeRecycleRequest };
var PostLkeClusterNodeRecycleResponse = /** @class */ (function (_super) {
    __extends(PostLkeClusterNodeRecycleResponse, _super);
    function PostLkeClusterNodeRecycleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostLkeClusterNodeRecycleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostLkeClusterNodeRecycleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostLkeClusterNodeRecycleResponse.prototype, "postLkeClusterNodeRecycle200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLkeClusterNodeRecycleDefaultApplicationJson)
    ], PostLkeClusterNodeRecycleResponse.prototype, "postLkeClusterNodeRecycleDefaultApplicationJsonObject", void 0);
    return PostLkeClusterNodeRecycleResponse;
}(SpeakeasyBase));
export { PostLkeClusterNodeRecycleResponse };
