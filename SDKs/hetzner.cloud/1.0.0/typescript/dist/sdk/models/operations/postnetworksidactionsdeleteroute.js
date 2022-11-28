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
var PostNetworksIdActionsDeleteRoutePathParams = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsDeleteRoutePathParams, _super);
    function PostNetworksIdActionsDeleteRoutePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostNetworksIdActionsDeleteRoutePathParams.prototype, "id", void 0);
    return PostNetworksIdActionsDeleteRoutePathParams;
}(SpeakeasyBase));
export { PostNetworksIdActionsDeleteRoutePathParams };
var PostNetworksIdActionsDeleteRouteAddDeleteRouteRequest = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsDeleteRouteAddDeleteRouteRequest, _super);
    function PostNetworksIdActionsDeleteRouteAddDeleteRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsDeleteRouteAddDeleteRouteRequest.prototype, "destination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gateway" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsDeleteRouteAddDeleteRouteRequest.prototype, "gateway", void 0);
    return PostNetworksIdActionsDeleteRouteAddDeleteRouteRequest;
}(SpeakeasyBase));
export { PostNetworksIdActionsDeleteRouteAddDeleteRouteRequest };
// PostNetworksIdActionsDeleteRouteActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostNetworksIdActionsDeleteRouteActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsDeleteRouteActionResponseActionError, _super);
    function PostNetworksIdActionsDeleteRouteActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsDeleteRouteActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsDeleteRouteActionResponseActionError.prototype, "message", void 0);
    return PostNetworksIdActionsDeleteRouteActionResponseActionError;
}(SpeakeasyBase));
export { PostNetworksIdActionsDeleteRouteActionResponseActionError };
var PostNetworksIdActionsDeleteRouteActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsDeleteRouteActionResponseActionResources, _super);
    function PostNetworksIdActionsDeleteRouteActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostNetworksIdActionsDeleteRouteActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsDeleteRouteActionResponseActionResources.prototype, "type", void 0);
    return PostNetworksIdActionsDeleteRouteActionResponseActionResources;
}(SpeakeasyBase));
export { PostNetworksIdActionsDeleteRouteActionResponseActionResources };
export var PostNetworksIdActionsDeleteRouteActionResponseActionStatusEnum;
(function (PostNetworksIdActionsDeleteRouteActionResponseActionStatusEnum) {
    PostNetworksIdActionsDeleteRouteActionResponseActionStatusEnum["Success"] = "success";
    PostNetworksIdActionsDeleteRouteActionResponseActionStatusEnum["Running"] = "running";
    PostNetworksIdActionsDeleteRouteActionResponseActionStatusEnum["Error"] = "error";
})(PostNetworksIdActionsDeleteRouteActionResponseActionStatusEnum || (PostNetworksIdActionsDeleteRouteActionResponseActionStatusEnum = {}));
var PostNetworksIdActionsDeleteRouteActionResponseAction = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsDeleteRouteActionResponseAction, _super);
    function PostNetworksIdActionsDeleteRouteActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsDeleteRouteActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostNetworksIdActionsDeleteRouteActionResponseActionError)
    ], PostNetworksIdActionsDeleteRouteActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsDeleteRouteActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostNetworksIdActionsDeleteRouteActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostNetworksIdActionsDeleteRouteActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostNetworksIdActionsDeleteRouteActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostNetworksIdActionsDeleteRouteActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsDeleteRouteActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsDeleteRouteActionResponseAction.prototype, "status", void 0);
    return PostNetworksIdActionsDeleteRouteActionResponseAction;
}(SpeakeasyBase));
export { PostNetworksIdActionsDeleteRouteActionResponseAction };
var PostNetworksIdActionsDeleteRouteActionResponse = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsDeleteRouteActionResponse, _super);
    function PostNetworksIdActionsDeleteRouteActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostNetworksIdActionsDeleteRouteActionResponseAction)
    ], PostNetworksIdActionsDeleteRouteActionResponse.prototype, "action", void 0);
    return PostNetworksIdActionsDeleteRouteActionResponse;
}(SpeakeasyBase));
export { PostNetworksIdActionsDeleteRouteActionResponse };
var PostNetworksIdActionsDeleteRouteRequest = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsDeleteRouteRequest, _super);
    function PostNetworksIdActionsDeleteRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostNetworksIdActionsDeleteRoutePathParams)
    ], PostNetworksIdActionsDeleteRouteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostNetworksIdActionsDeleteRouteAddDeleteRouteRequest)
    ], PostNetworksIdActionsDeleteRouteRequest.prototype, "request", void 0);
    return PostNetworksIdActionsDeleteRouteRequest;
}(SpeakeasyBase));
export { PostNetworksIdActionsDeleteRouteRequest };
var PostNetworksIdActionsDeleteRouteResponse = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsDeleteRouteResponse, _super);
    function PostNetworksIdActionsDeleteRouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostNetworksIdActionsDeleteRouteActionResponse)
    ], PostNetworksIdActionsDeleteRouteResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostNetworksIdActionsDeleteRouteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostNetworksIdActionsDeleteRouteResponse.prototype, "statusCode", void 0);
    return PostNetworksIdActionsDeleteRouteResponse;
}(SpeakeasyBase));
export { PostNetworksIdActionsDeleteRouteResponse };
