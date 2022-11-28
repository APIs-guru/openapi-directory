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
var PostNetworksIdActionsChangeIpRangePathParams = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsChangeIpRangePathParams, _super);
    function PostNetworksIdActionsChangeIpRangePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostNetworksIdActionsChangeIpRangePathParams.prototype, "id", void 0);
    return PostNetworksIdActionsChangeIpRangePathParams;
}(SpeakeasyBase));
export { PostNetworksIdActionsChangeIpRangePathParams };
var PostNetworksIdActionsChangeIpRangeChangeIpRangeRequest = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsChangeIpRangeChangeIpRangeRequest, _super);
    function PostNetworksIdActionsChangeIpRangeChangeIpRangeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip_range" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsChangeIpRangeChangeIpRangeRequest.prototype, "ipRange", void 0);
    return PostNetworksIdActionsChangeIpRangeChangeIpRangeRequest;
}(SpeakeasyBase));
export { PostNetworksIdActionsChangeIpRangeChangeIpRangeRequest };
// PostNetworksIdActionsChangeIpRangeActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostNetworksIdActionsChangeIpRangeActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsChangeIpRangeActionResponseActionError, _super);
    function PostNetworksIdActionsChangeIpRangeActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsChangeIpRangeActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsChangeIpRangeActionResponseActionError.prototype, "message", void 0);
    return PostNetworksIdActionsChangeIpRangeActionResponseActionError;
}(SpeakeasyBase));
export { PostNetworksIdActionsChangeIpRangeActionResponseActionError };
var PostNetworksIdActionsChangeIpRangeActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsChangeIpRangeActionResponseActionResources, _super);
    function PostNetworksIdActionsChangeIpRangeActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostNetworksIdActionsChangeIpRangeActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsChangeIpRangeActionResponseActionResources.prototype, "type", void 0);
    return PostNetworksIdActionsChangeIpRangeActionResponseActionResources;
}(SpeakeasyBase));
export { PostNetworksIdActionsChangeIpRangeActionResponseActionResources };
export var PostNetworksIdActionsChangeIpRangeActionResponseActionStatusEnum;
(function (PostNetworksIdActionsChangeIpRangeActionResponseActionStatusEnum) {
    PostNetworksIdActionsChangeIpRangeActionResponseActionStatusEnum["Success"] = "success";
    PostNetworksIdActionsChangeIpRangeActionResponseActionStatusEnum["Running"] = "running";
    PostNetworksIdActionsChangeIpRangeActionResponseActionStatusEnum["Error"] = "error";
})(PostNetworksIdActionsChangeIpRangeActionResponseActionStatusEnum || (PostNetworksIdActionsChangeIpRangeActionResponseActionStatusEnum = {}));
var PostNetworksIdActionsChangeIpRangeActionResponseAction = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsChangeIpRangeActionResponseAction, _super);
    function PostNetworksIdActionsChangeIpRangeActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsChangeIpRangeActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostNetworksIdActionsChangeIpRangeActionResponseActionError)
    ], PostNetworksIdActionsChangeIpRangeActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsChangeIpRangeActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostNetworksIdActionsChangeIpRangeActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostNetworksIdActionsChangeIpRangeActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostNetworksIdActionsChangeIpRangeActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostNetworksIdActionsChangeIpRangeActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsChangeIpRangeActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsChangeIpRangeActionResponseAction.prototype, "status", void 0);
    return PostNetworksIdActionsChangeIpRangeActionResponseAction;
}(SpeakeasyBase));
export { PostNetworksIdActionsChangeIpRangeActionResponseAction };
var PostNetworksIdActionsChangeIpRangeActionResponse = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsChangeIpRangeActionResponse, _super);
    function PostNetworksIdActionsChangeIpRangeActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostNetworksIdActionsChangeIpRangeActionResponseAction)
    ], PostNetworksIdActionsChangeIpRangeActionResponse.prototype, "action", void 0);
    return PostNetworksIdActionsChangeIpRangeActionResponse;
}(SpeakeasyBase));
export { PostNetworksIdActionsChangeIpRangeActionResponse };
var PostNetworksIdActionsChangeIpRangeRequest = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsChangeIpRangeRequest, _super);
    function PostNetworksIdActionsChangeIpRangeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostNetworksIdActionsChangeIpRangePathParams)
    ], PostNetworksIdActionsChangeIpRangeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostNetworksIdActionsChangeIpRangeChangeIpRangeRequest)
    ], PostNetworksIdActionsChangeIpRangeRequest.prototype, "request", void 0);
    return PostNetworksIdActionsChangeIpRangeRequest;
}(SpeakeasyBase));
export { PostNetworksIdActionsChangeIpRangeRequest };
var PostNetworksIdActionsChangeIpRangeResponse = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsChangeIpRangeResponse, _super);
    function PostNetworksIdActionsChangeIpRangeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostNetworksIdActionsChangeIpRangeActionResponse)
    ], PostNetworksIdActionsChangeIpRangeResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostNetworksIdActionsChangeIpRangeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostNetworksIdActionsChangeIpRangeResponse.prototype, "statusCode", void 0);
    return PostNetworksIdActionsChangeIpRangeResponse;
}(SpeakeasyBase));
export { PostNetworksIdActionsChangeIpRangeResponse };
