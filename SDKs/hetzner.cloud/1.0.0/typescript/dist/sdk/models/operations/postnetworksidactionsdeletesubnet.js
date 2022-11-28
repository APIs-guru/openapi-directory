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
var PostNetworksIdActionsDeleteSubnetPathParams = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsDeleteSubnetPathParams, _super);
    function PostNetworksIdActionsDeleteSubnetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostNetworksIdActionsDeleteSubnetPathParams.prototype, "id", void 0);
    return PostNetworksIdActionsDeleteSubnetPathParams;
}(SpeakeasyBase));
export { PostNetworksIdActionsDeleteSubnetPathParams };
var PostNetworksIdActionsDeleteSubnetDeleteSubnetRequest = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsDeleteSubnetDeleteSubnetRequest, _super);
    function PostNetworksIdActionsDeleteSubnetDeleteSubnetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip_range" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsDeleteSubnetDeleteSubnetRequest.prototype, "ipRange", void 0);
    return PostNetworksIdActionsDeleteSubnetDeleteSubnetRequest;
}(SpeakeasyBase));
export { PostNetworksIdActionsDeleteSubnetDeleteSubnetRequest };
// PostNetworksIdActionsDeleteSubnetActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostNetworksIdActionsDeleteSubnetActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsDeleteSubnetActionResponseActionError, _super);
    function PostNetworksIdActionsDeleteSubnetActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsDeleteSubnetActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsDeleteSubnetActionResponseActionError.prototype, "message", void 0);
    return PostNetworksIdActionsDeleteSubnetActionResponseActionError;
}(SpeakeasyBase));
export { PostNetworksIdActionsDeleteSubnetActionResponseActionError };
var PostNetworksIdActionsDeleteSubnetActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsDeleteSubnetActionResponseActionResources, _super);
    function PostNetworksIdActionsDeleteSubnetActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostNetworksIdActionsDeleteSubnetActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsDeleteSubnetActionResponseActionResources.prototype, "type", void 0);
    return PostNetworksIdActionsDeleteSubnetActionResponseActionResources;
}(SpeakeasyBase));
export { PostNetworksIdActionsDeleteSubnetActionResponseActionResources };
export var PostNetworksIdActionsDeleteSubnetActionResponseActionStatusEnum;
(function (PostNetworksIdActionsDeleteSubnetActionResponseActionStatusEnum) {
    PostNetworksIdActionsDeleteSubnetActionResponseActionStatusEnum["Success"] = "success";
    PostNetworksIdActionsDeleteSubnetActionResponseActionStatusEnum["Running"] = "running";
    PostNetworksIdActionsDeleteSubnetActionResponseActionStatusEnum["Error"] = "error";
})(PostNetworksIdActionsDeleteSubnetActionResponseActionStatusEnum || (PostNetworksIdActionsDeleteSubnetActionResponseActionStatusEnum = {}));
var PostNetworksIdActionsDeleteSubnetActionResponseAction = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsDeleteSubnetActionResponseAction, _super);
    function PostNetworksIdActionsDeleteSubnetActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsDeleteSubnetActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostNetworksIdActionsDeleteSubnetActionResponseActionError)
    ], PostNetworksIdActionsDeleteSubnetActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsDeleteSubnetActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostNetworksIdActionsDeleteSubnetActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostNetworksIdActionsDeleteSubnetActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostNetworksIdActionsDeleteSubnetActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostNetworksIdActionsDeleteSubnetActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsDeleteSubnetActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsDeleteSubnetActionResponseAction.prototype, "status", void 0);
    return PostNetworksIdActionsDeleteSubnetActionResponseAction;
}(SpeakeasyBase));
export { PostNetworksIdActionsDeleteSubnetActionResponseAction };
var PostNetworksIdActionsDeleteSubnetActionResponse = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsDeleteSubnetActionResponse, _super);
    function PostNetworksIdActionsDeleteSubnetActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostNetworksIdActionsDeleteSubnetActionResponseAction)
    ], PostNetworksIdActionsDeleteSubnetActionResponse.prototype, "action", void 0);
    return PostNetworksIdActionsDeleteSubnetActionResponse;
}(SpeakeasyBase));
export { PostNetworksIdActionsDeleteSubnetActionResponse };
var PostNetworksIdActionsDeleteSubnetRequest = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsDeleteSubnetRequest, _super);
    function PostNetworksIdActionsDeleteSubnetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostNetworksIdActionsDeleteSubnetPathParams)
    ], PostNetworksIdActionsDeleteSubnetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostNetworksIdActionsDeleteSubnetDeleteSubnetRequest)
    ], PostNetworksIdActionsDeleteSubnetRequest.prototype, "request", void 0);
    return PostNetworksIdActionsDeleteSubnetRequest;
}(SpeakeasyBase));
export { PostNetworksIdActionsDeleteSubnetRequest };
var PostNetworksIdActionsDeleteSubnetResponse = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsDeleteSubnetResponse, _super);
    function PostNetworksIdActionsDeleteSubnetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostNetworksIdActionsDeleteSubnetActionResponse)
    ], PostNetworksIdActionsDeleteSubnetResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostNetworksIdActionsDeleteSubnetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostNetworksIdActionsDeleteSubnetResponse.prototype, "statusCode", void 0);
    return PostNetworksIdActionsDeleteSubnetResponse;
}(SpeakeasyBase));
export { PostNetworksIdActionsDeleteSubnetResponse };
