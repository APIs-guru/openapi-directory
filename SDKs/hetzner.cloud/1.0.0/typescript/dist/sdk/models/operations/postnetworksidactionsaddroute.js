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
var PostNetworksIdActionsAddRoutePathParams = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsAddRoutePathParams, _super);
    function PostNetworksIdActionsAddRoutePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostNetworksIdActionsAddRoutePathParams.prototype, "id", void 0);
    return PostNetworksIdActionsAddRoutePathParams;
}(SpeakeasyBase));
export { PostNetworksIdActionsAddRoutePathParams };
var PostNetworksIdActionsAddRouteAddDeleteRouteRequest = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsAddRouteAddDeleteRouteRequest, _super);
    function PostNetworksIdActionsAddRouteAddDeleteRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsAddRouteAddDeleteRouteRequest.prototype, "destination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gateway" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsAddRouteAddDeleteRouteRequest.prototype, "gateway", void 0);
    return PostNetworksIdActionsAddRouteAddDeleteRouteRequest;
}(SpeakeasyBase));
export { PostNetworksIdActionsAddRouteAddDeleteRouteRequest };
// PostNetworksIdActionsAddRouteActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostNetworksIdActionsAddRouteActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsAddRouteActionResponseActionError, _super);
    function PostNetworksIdActionsAddRouteActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsAddRouteActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsAddRouteActionResponseActionError.prototype, "message", void 0);
    return PostNetworksIdActionsAddRouteActionResponseActionError;
}(SpeakeasyBase));
export { PostNetworksIdActionsAddRouteActionResponseActionError };
var PostNetworksIdActionsAddRouteActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsAddRouteActionResponseActionResources, _super);
    function PostNetworksIdActionsAddRouteActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostNetworksIdActionsAddRouteActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsAddRouteActionResponseActionResources.prototype, "type", void 0);
    return PostNetworksIdActionsAddRouteActionResponseActionResources;
}(SpeakeasyBase));
export { PostNetworksIdActionsAddRouteActionResponseActionResources };
export var PostNetworksIdActionsAddRouteActionResponseActionStatusEnum;
(function (PostNetworksIdActionsAddRouteActionResponseActionStatusEnum) {
    PostNetworksIdActionsAddRouteActionResponseActionStatusEnum["Success"] = "success";
    PostNetworksIdActionsAddRouteActionResponseActionStatusEnum["Running"] = "running";
    PostNetworksIdActionsAddRouteActionResponseActionStatusEnum["Error"] = "error";
})(PostNetworksIdActionsAddRouteActionResponseActionStatusEnum || (PostNetworksIdActionsAddRouteActionResponseActionStatusEnum = {}));
var PostNetworksIdActionsAddRouteActionResponseAction = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsAddRouteActionResponseAction, _super);
    function PostNetworksIdActionsAddRouteActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsAddRouteActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostNetworksIdActionsAddRouteActionResponseActionError)
    ], PostNetworksIdActionsAddRouteActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsAddRouteActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostNetworksIdActionsAddRouteActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostNetworksIdActionsAddRouteActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostNetworksIdActionsAddRouteActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostNetworksIdActionsAddRouteActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsAddRouteActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsAddRouteActionResponseAction.prototype, "status", void 0);
    return PostNetworksIdActionsAddRouteActionResponseAction;
}(SpeakeasyBase));
export { PostNetworksIdActionsAddRouteActionResponseAction };
var PostNetworksIdActionsAddRouteActionResponse = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsAddRouteActionResponse, _super);
    function PostNetworksIdActionsAddRouteActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostNetworksIdActionsAddRouteActionResponseAction)
    ], PostNetworksIdActionsAddRouteActionResponse.prototype, "action", void 0);
    return PostNetworksIdActionsAddRouteActionResponse;
}(SpeakeasyBase));
export { PostNetworksIdActionsAddRouteActionResponse };
var PostNetworksIdActionsAddRouteRequest = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsAddRouteRequest, _super);
    function PostNetworksIdActionsAddRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostNetworksIdActionsAddRoutePathParams)
    ], PostNetworksIdActionsAddRouteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostNetworksIdActionsAddRouteAddDeleteRouteRequest)
    ], PostNetworksIdActionsAddRouteRequest.prototype, "request", void 0);
    return PostNetworksIdActionsAddRouteRequest;
}(SpeakeasyBase));
export { PostNetworksIdActionsAddRouteRequest };
var PostNetworksIdActionsAddRouteResponse = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsAddRouteResponse, _super);
    function PostNetworksIdActionsAddRouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostNetworksIdActionsAddRouteActionResponse)
    ], PostNetworksIdActionsAddRouteResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostNetworksIdActionsAddRouteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostNetworksIdActionsAddRouteResponse.prototype, "statusCode", void 0);
    return PostNetworksIdActionsAddRouteResponse;
}(SpeakeasyBase));
export { PostNetworksIdActionsAddRouteResponse };
