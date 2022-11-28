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
var PostServersIdActionsChangeAliasIpsPathParams = /** @class */ (function (_super) {
    __extends(PostServersIdActionsChangeAliasIpsPathParams, _super);
    function PostServersIdActionsChangeAliasIpsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsChangeAliasIpsPathParams.prototype, "id", void 0);
    return PostServersIdActionsChangeAliasIpsPathParams;
}(SpeakeasyBase));
export { PostServersIdActionsChangeAliasIpsPathParams };
var PostServersIdActionsChangeAliasIpsRequestBody = /** @class */ (function (_super) {
    __extends(PostServersIdActionsChangeAliasIpsRequestBody, _super);
    function PostServersIdActionsChangeAliasIpsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alias_ips" }),
        __metadata("design:type", Array)
    ], PostServersIdActionsChangeAliasIpsRequestBody.prototype, "aliasIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsChangeAliasIpsRequestBody.prototype, "network", void 0);
    return PostServersIdActionsChangeAliasIpsRequestBody;
}(SpeakeasyBase));
export { PostServersIdActionsChangeAliasIpsRequestBody };
// PostServersIdActionsChangeAliasIpsActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostServersIdActionsChangeAliasIpsActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostServersIdActionsChangeAliasIpsActionResponseActionError, _super);
    function PostServersIdActionsChangeAliasIpsActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeAliasIpsActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeAliasIpsActionResponseActionError.prototype, "message", void 0);
    return PostServersIdActionsChangeAliasIpsActionResponseActionError;
}(SpeakeasyBase));
export { PostServersIdActionsChangeAliasIpsActionResponseActionError };
var PostServersIdActionsChangeAliasIpsActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostServersIdActionsChangeAliasIpsActionResponseActionResources, _super);
    function PostServersIdActionsChangeAliasIpsActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsChangeAliasIpsActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeAliasIpsActionResponseActionResources.prototype, "type", void 0);
    return PostServersIdActionsChangeAliasIpsActionResponseActionResources;
}(SpeakeasyBase));
export { PostServersIdActionsChangeAliasIpsActionResponseActionResources };
export var PostServersIdActionsChangeAliasIpsActionResponseActionStatusEnum;
(function (PostServersIdActionsChangeAliasIpsActionResponseActionStatusEnum) {
    PostServersIdActionsChangeAliasIpsActionResponseActionStatusEnum["Success"] = "success";
    PostServersIdActionsChangeAliasIpsActionResponseActionStatusEnum["Running"] = "running";
    PostServersIdActionsChangeAliasIpsActionResponseActionStatusEnum["Error"] = "error";
})(PostServersIdActionsChangeAliasIpsActionResponseActionStatusEnum || (PostServersIdActionsChangeAliasIpsActionResponseActionStatusEnum = {}));
var PostServersIdActionsChangeAliasIpsActionResponseAction = /** @class */ (function (_super) {
    __extends(PostServersIdActionsChangeAliasIpsActionResponseAction, _super);
    function PostServersIdActionsChangeAliasIpsActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeAliasIpsActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostServersIdActionsChangeAliasIpsActionResponseActionError)
    ], PostServersIdActionsChangeAliasIpsActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeAliasIpsActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsChangeAliasIpsActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsChangeAliasIpsActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostServersIdActionsChangeAliasIpsActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostServersIdActionsChangeAliasIpsActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeAliasIpsActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeAliasIpsActionResponseAction.prototype, "status", void 0);
    return PostServersIdActionsChangeAliasIpsActionResponseAction;
}(SpeakeasyBase));
export { PostServersIdActionsChangeAliasIpsActionResponseAction };
var PostServersIdActionsChangeAliasIpsActionResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsChangeAliasIpsActionResponse, _super);
    function PostServersIdActionsChangeAliasIpsActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostServersIdActionsChangeAliasIpsActionResponseAction)
    ], PostServersIdActionsChangeAliasIpsActionResponse.prototype, "action", void 0);
    return PostServersIdActionsChangeAliasIpsActionResponse;
}(SpeakeasyBase));
export { PostServersIdActionsChangeAliasIpsActionResponse };
var PostServersIdActionsChangeAliasIpsRequest = /** @class */ (function (_super) {
    __extends(PostServersIdActionsChangeAliasIpsRequest, _super);
    function PostServersIdActionsChangeAliasIpsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsChangeAliasIpsPathParams)
    ], PostServersIdActionsChangeAliasIpsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostServersIdActionsChangeAliasIpsRequestBody)
    ], PostServersIdActionsChangeAliasIpsRequest.prototype, "request", void 0);
    return PostServersIdActionsChangeAliasIpsRequest;
}(SpeakeasyBase));
export { PostServersIdActionsChangeAliasIpsRequest };
var PostServersIdActionsChangeAliasIpsResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsChangeAliasIpsResponse, _super);
    function PostServersIdActionsChangeAliasIpsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsChangeAliasIpsActionResponse)
    ], PostServersIdActionsChangeAliasIpsResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeAliasIpsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostServersIdActionsChangeAliasIpsResponse.prototype, "statusCode", void 0);
    return PostServersIdActionsChangeAliasIpsResponse;
}(SpeakeasyBase));
export { PostServersIdActionsChangeAliasIpsResponse };
