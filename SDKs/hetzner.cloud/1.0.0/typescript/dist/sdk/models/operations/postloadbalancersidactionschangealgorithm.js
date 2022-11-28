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
var PostLoadBalancersIdActionsChangeAlgorithmPathParams = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsChangeAlgorithmPathParams, _super);
    function PostLoadBalancersIdActionsChangeAlgorithmPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsChangeAlgorithmPathParams.prototype, "id", void 0);
    return PostLoadBalancersIdActionsChangeAlgorithmPathParams;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsChangeAlgorithmPathParams };
export var PostLoadBalancersIdActionsChangeAlgorithmRequestBodyTypeEnum;
(function (PostLoadBalancersIdActionsChangeAlgorithmRequestBodyTypeEnum) {
    PostLoadBalancersIdActionsChangeAlgorithmRequestBodyTypeEnum["RoundRobin"] = "round_robin";
    PostLoadBalancersIdActionsChangeAlgorithmRequestBodyTypeEnum["LeastConnections"] = "least_connections";
})(PostLoadBalancersIdActionsChangeAlgorithmRequestBodyTypeEnum || (PostLoadBalancersIdActionsChangeAlgorithmRequestBodyTypeEnum = {}));
var PostLoadBalancersIdActionsChangeAlgorithmRequestBody = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsChangeAlgorithmRequestBody, _super);
    function PostLoadBalancersIdActionsChangeAlgorithmRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeAlgorithmRequestBody.prototype, "type", void 0);
    return PostLoadBalancersIdActionsChangeAlgorithmRequestBody;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsChangeAlgorithmRequestBody };
// PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionError, _super);
    function PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionError.prototype, "message", void 0);
    return PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionError;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionError };
var PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionResources, _super);
    function PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionResources.prototype, "type", void 0);
    return PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionResources;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionResources };
export var PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionStatusEnum;
(function (PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionStatusEnum) {
    PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionStatusEnum["Success"] = "success";
    PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionStatusEnum["Running"] = "running";
    PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionStatusEnum["Error"] = "error";
})(PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionStatusEnum || (PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionStatusEnum = {}));
var PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction, _super);
    function PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionError)
    ], PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostLoadBalancersIdActionsChangeAlgorithmActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction.prototype, "status", void 0);
    return PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction };
var PostLoadBalancersIdActionsChangeAlgorithmActionResponse = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsChangeAlgorithmActionResponse, _super);
    function PostLoadBalancersIdActionsChangeAlgorithmActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction)
    ], PostLoadBalancersIdActionsChangeAlgorithmActionResponse.prototype, "action", void 0);
    return PostLoadBalancersIdActionsChangeAlgorithmActionResponse;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsChangeAlgorithmActionResponse };
var PostLoadBalancersIdActionsChangeAlgorithmRequest = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsChangeAlgorithmRequest, _super);
    function PostLoadBalancersIdActionsChangeAlgorithmRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLoadBalancersIdActionsChangeAlgorithmPathParams)
    ], PostLoadBalancersIdActionsChangeAlgorithmRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostLoadBalancersIdActionsChangeAlgorithmRequestBody)
    ], PostLoadBalancersIdActionsChangeAlgorithmRequest.prototype, "request", void 0);
    return PostLoadBalancersIdActionsChangeAlgorithmRequest;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsChangeAlgorithmRequest };
var PostLoadBalancersIdActionsChangeAlgorithmResponse = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsChangeAlgorithmResponse, _super);
    function PostLoadBalancersIdActionsChangeAlgorithmResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLoadBalancersIdActionsChangeAlgorithmActionResponse)
    ], PostLoadBalancersIdActionsChangeAlgorithmResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeAlgorithmResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsChangeAlgorithmResponse.prototype, "statusCode", void 0);
    return PostLoadBalancersIdActionsChangeAlgorithmResponse;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsChangeAlgorithmResponse };
