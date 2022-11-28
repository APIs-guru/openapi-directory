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
var PostServersIdActionsAttachToNetworkPathParams = /** @class */ (function (_super) {
    __extends(PostServersIdActionsAttachToNetworkPathParams, _super);
    function PostServersIdActionsAttachToNetworkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsAttachToNetworkPathParams.prototype, "id", void 0);
    return PostServersIdActionsAttachToNetworkPathParams;
}(SpeakeasyBase));
export { PostServersIdActionsAttachToNetworkPathParams };
var PostServersIdActionsAttachToNetworkAttachToNetworkRequest = /** @class */ (function (_super) {
    __extends(PostServersIdActionsAttachToNetworkAttachToNetworkRequest, _super);
    function PostServersIdActionsAttachToNetworkAttachToNetworkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alias_ips" }),
        __metadata("design:type", Array)
    ], PostServersIdActionsAttachToNetworkAttachToNetworkRequest.prototype, "aliasIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], PostServersIdActionsAttachToNetworkAttachToNetworkRequest.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsAttachToNetworkAttachToNetworkRequest.prototype, "network", void 0);
    return PostServersIdActionsAttachToNetworkAttachToNetworkRequest;
}(SpeakeasyBase));
export { PostServersIdActionsAttachToNetworkAttachToNetworkRequest };
// PostServersIdActionsAttachToNetworkActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostServersIdActionsAttachToNetworkActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostServersIdActionsAttachToNetworkActionResponseActionError, _super);
    function PostServersIdActionsAttachToNetworkActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostServersIdActionsAttachToNetworkActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostServersIdActionsAttachToNetworkActionResponseActionError.prototype, "message", void 0);
    return PostServersIdActionsAttachToNetworkActionResponseActionError;
}(SpeakeasyBase));
export { PostServersIdActionsAttachToNetworkActionResponseActionError };
var PostServersIdActionsAttachToNetworkActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostServersIdActionsAttachToNetworkActionResponseActionResources, _super);
    function PostServersIdActionsAttachToNetworkActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsAttachToNetworkActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostServersIdActionsAttachToNetworkActionResponseActionResources.prototype, "type", void 0);
    return PostServersIdActionsAttachToNetworkActionResponseActionResources;
}(SpeakeasyBase));
export { PostServersIdActionsAttachToNetworkActionResponseActionResources };
export var PostServersIdActionsAttachToNetworkActionResponseActionStatusEnum;
(function (PostServersIdActionsAttachToNetworkActionResponseActionStatusEnum) {
    PostServersIdActionsAttachToNetworkActionResponseActionStatusEnum["Success"] = "success";
    PostServersIdActionsAttachToNetworkActionResponseActionStatusEnum["Running"] = "running";
    PostServersIdActionsAttachToNetworkActionResponseActionStatusEnum["Error"] = "error";
})(PostServersIdActionsAttachToNetworkActionResponseActionStatusEnum || (PostServersIdActionsAttachToNetworkActionResponseActionStatusEnum = {}));
var PostServersIdActionsAttachToNetworkActionResponseAction = /** @class */ (function (_super) {
    __extends(PostServersIdActionsAttachToNetworkActionResponseAction, _super);
    function PostServersIdActionsAttachToNetworkActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostServersIdActionsAttachToNetworkActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostServersIdActionsAttachToNetworkActionResponseActionError)
    ], PostServersIdActionsAttachToNetworkActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostServersIdActionsAttachToNetworkActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsAttachToNetworkActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsAttachToNetworkActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostServersIdActionsAttachToNetworkActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostServersIdActionsAttachToNetworkActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostServersIdActionsAttachToNetworkActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostServersIdActionsAttachToNetworkActionResponseAction.prototype, "status", void 0);
    return PostServersIdActionsAttachToNetworkActionResponseAction;
}(SpeakeasyBase));
export { PostServersIdActionsAttachToNetworkActionResponseAction };
var PostServersIdActionsAttachToNetworkActionResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsAttachToNetworkActionResponse, _super);
    function PostServersIdActionsAttachToNetworkActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostServersIdActionsAttachToNetworkActionResponseAction)
    ], PostServersIdActionsAttachToNetworkActionResponse.prototype, "action", void 0);
    return PostServersIdActionsAttachToNetworkActionResponse;
}(SpeakeasyBase));
export { PostServersIdActionsAttachToNetworkActionResponse };
var PostServersIdActionsAttachToNetworkRequest = /** @class */ (function (_super) {
    __extends(PostServersIdActionsAttachToNetworkRequest, _super);
    function PostServersIdActionsAttachToNetworkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsAttachToNetworkPathParams)
    ], PostServersIdActionsAttachToNetworkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostServersIdActionsAttachToNetworkAttachToNetworkRequest)
    ], PostServersIdActionsAttachToNetworkRequest.prototype, "request", void 0);
    return PostServersIdActionsAttachToNetworkRequest;
}(SpeakeasyBase));
export { PostServersIdActionsAttachToNetworkRequest };
var PostServersIdActionsAttachToNetworkResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsAttachToNetworkResponse, _super);
    function PostServersIdActionsAttachToNetworkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsAttachToNetworkActionResponse)
    ], PostServersIdActionsAttachToNetworkResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostServersIdActionsAttachToNetworkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostServersIdActionsAttachToNetworkResponse.prototype, "statusCode", void 0);
    return PostServersIdActionsAttachToNetworkResponse;
}(SpeakeasyBase));
export { PostServersIdActionsAttachToNetworkResponse };
